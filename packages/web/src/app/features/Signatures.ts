import { Signer } from 'ethers';

export const getMessageToSignToCreateCollection = (name: string) =>
  `Click sign to create ${name} on aperture.city.`;

export const signToCreateCollection = (name: string, provider: Signer) =>
  provider.signMessage(getMessageToSignToCreateCollection(name));
