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
  const [localPhotos, setLocalPhotos] = useState<string[]>([]);
  const onDrop = useCallback(async acceptedFiles => {
    const data = new FormData();
    data.append('files', acceptedFiles[0]);
    const response = await fetch('https://ipfs.internet.camera/upload', {
      method: 'POST',
      body: data
    }).then(r => r.json());
    setLocalPhotos(photos => [...photos, response.hash]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
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
        {localPhotos.map(photo => (
          <img key={photo} src={`https://ipfs.internet.camera/ipfs/${photo}`} />
        ))}
      </div>

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
