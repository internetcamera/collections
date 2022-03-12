import { signToAddPhotosToCollection } from '@app/features/Signatures';
import { useWallet } from '@gimmixorg/use-wallet';
import { Collection } from '@prisma/client';
import { prisma } from '@server/helpers/prisma';
import { GetServerSideProps } from 'next';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

export const getServerSideProps: GetServerSideProps = async ctx => {
  const collectionSlug = ctx.params!.collectionSlug as string;
  const collection = await prisma.collection.findUnique({
    where: { slug: collectionSlug },
    include: { photos: true }
  });
  return { props: JSON.parse(JSON.stringify({ collection })) };
};

const CollectionEditPage = ({ collection }: { collection: Collection }) => {
  const [ipfsHashes, setIpfsHashes] = useState<string[]>([]);
  const [names, setNames] = useState<string[]>([]);
  const [descriptions, setDescriptions] = useState<string[]>([]);

  const { connect, account, provider } = useWallet();
  const onDrop = useCallback(async acceptedFiles => {
    for (const file of acceptedFiles) {
      const data = new FormData();
      data.append('files', file);
      const response = await fetch('https://ipfs.internet.camera/upload', {
        method: 'POST',
        body: data
      }).then(r => r.json());
      setIpfsHashes(photos => [...photos, response.hash]);
      setNames(names => [...names, '']);
      setDescriptions(descriptions => [...descriptions, '']);
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const onSubmit = async () => {
    let _provider = provider;
    let _account = account;
    if (!_provider) {
      const state = await connect();
      _provider = state.provider;
      _account = state.account;
    }
    const photos = ipfsHashes.map((ipfsHash, i) => ({
      name: names[i],
      description: descriptions[i],
      ipfsHash,
      index: i
    }));

    const signature = await signToAddPhotosToCollection(
      photos,
      collection.name,
      _provider.getSigner()
    );

    const response = await fetch('/api/add-to-collection', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        photos,
        collectionId: collection.id,
        signature,
        account: _account
      })
    }).then(r => r.json());
    console.log(response);
  };

  return (
    <div className="collection">
      <pre>{JSON.stringify(collection, null, 2)}</pre>

      <div className="dropzone" {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>

      <div className="local-photos">
        {ipfsHashes.map((ipfsHash, i) => (
          <div className="photo" key={ipfsHash}>
            <img src={`https://ipfs.internet.camera/ipfs/${ipfsHash}`} />
            <input
              type="text"
              value={names[i]}
              onChange={e =>
                setNames(names => [
                  ...names.slice(0, i),
                  e.target.value,
                  ...names.slice(i + 1)
                ])
              }
            />
            <textarea
              value={descriptions[i]}
              onChange={e =>
                setDescriptions(descriptions => [
                  ...descriptions.slice(0, i),
                  e.target.value,
                  ...descriptions.slice(i + 1)
                ])
              }
            />
          </div>
        ))}
      </div>
      <button onClick={onSubmit}>Submit</button>

      <style jsx>{`
        .collection {
        }
        .dropzone {
          padding: 5px;
          background-color: #f1f1f1;
        }
      `}</style>
    </div>
  );
};

export default CollectionEditPage;
