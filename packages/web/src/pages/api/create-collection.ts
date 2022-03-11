import { prisma } from '@server/helpers/prisma';
import { NextApiHandler } from 'next';
import { utils } from 'ethers';
import slugify from 'slugify';
import { getMessageToSignToCreateCollection } from '@app/features/Signatures';

const api: NextApiHandler = async (req, res) => {
  const {
    name,
    description,
    account,
    signature
  }: {
    name: string;
    description: string;
    account: string;
    signature: string;
  } = req.body;

  const signer = utils.verifyMessage(
    getMessageToSignToCreateCollection(name),
    signature
  );
  if (signer.toLowerCase() != account.toLowerCase())
    return res.status(403).send('Unauthorized');

  const slug = slugify(name).toLowerCase();
  let wallet = await prisma.wallet.findUnique({
    where: { id: account.toLowerCase() }
  });
  if (!wallet)
    wallet = await prisma.wallet.create({
      data: {
        id: account.toLowerCase()
      }
    });

  // todo: ensure slug is unique
  const collection = await prisma.collection.create({
    data: { name, description, slug, ownerId: wallet.id }
  });
  return res.json({ id: collection.id });
};

export default api;
