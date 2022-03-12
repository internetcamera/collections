import { Signer } from 'ethers';

export const getMessageToSignToCreateCollection = (name: string) =>
  `Click sign to create ${name} on aperture.city.`;

export const signToCreateCollection = (name: string, provider: Signer) =>
  provider.signMessage(getMessageToSignToCreateCollection(name));

export const getMessageToSignToAddPhotosToCollection = (
  photoCount: number,
  collectionName: string
) =>
  `Click sign to add ${photoCount} photos to ${collectionName} on aperture.city.`;

export const signToAddPhotosToCollection = (
  photos: {
    name: string;
    description: string;
    ipfsHash: string;
    index: number;
  }[],
  collectionName: string,
  provider: Signer
) =>
  provider.signMessage(
    getMessageToSignToAddPhotosToCollection(photos.length, collectionName)
  );
