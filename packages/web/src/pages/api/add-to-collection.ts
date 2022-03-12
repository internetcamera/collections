import { getMessageToSignToAddPhotosToCollection } from '@app/features/Signatures';
import { prisma } from '@server/helpers/prisma';
import { utils } from 'ethers';
import { NextApiHandler } from 'next';

const api: NextApiHandler = async (req, res) => {
  const {
    photos,
    collectionId,
    account,
    signature
  }: {
    photos: {
      name: string;
      description: string;
      ipfsHash: string;
      index: number;
    }[];
    collectionId: number;
    account: string;
    signature: string;
  } = req.body;

  const collection = await prisma.collection.findUnique({
    where: { id: collectionId }
  });

  if (!collection) return res.status(404).send('Collection not found');

  const signer = utils.verifyMessage(
    getMessageToSignToAddPhotosToCollection(photos.length, collection.name),
    signature
  );
  if (
    signer.toLowerCase() != account.toLowerCase() ||
    signer.toLowerCase() != collection.ownerId.toLowerCase()
  )
    return res.status(403).send('Unauthorized');

  for (const photo of photos) {
    await prisma.photo.create({
      data: {
        name: photo.name,
        description: photo.description,
        ipfsHash: photo.ipfsHash,
        index: photo.index,
        collectionId
      }
    });
  }

  return res.json({ success: true });
};

export default api;
