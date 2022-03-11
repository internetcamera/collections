import React, { useState } from 'react';
import { useWallet } from '@gimmixorg/use-wallet';
import { signToCreateCollection } from '@app/features/Signatures';
import useCollectionsForAccount from '@app/features/useCollectionsForAccount';
import Link from 'next/link';

const IndexPage = () => {
  const { connect, account, provider } = useWallet();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const collections = useCollectionsForAccount(account);

  const onSubmit = async () => {
    if (!provider) return;
    const signature = await signToCreateCollection(name, provider.getSigner());
    const response = await fetch('/api/create-collection', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        description,
        account,
        signature
      })
    }).then(res => res.json());
    console.log(response);
  };
  console.log({ collections });
  return (
    <div className="index">
      {!account ? (
        <button onClick={() => connect()}>Connect Wallet</button>
      ) : (
        <>
          <div className="collections">
            {collections.map(collection => (
              <Link
                key={collection.slug}
                href={`/collection/${collection.slug}`}
              >
                {collection.name}
              </Link>
            ))}
          </div>
          <div className="create">
            <h1>Create Collection</h1>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            <button onClick={onSubmit}>Create</button>
          </div>
        </>
      )}
      <style jsx>{`
        .create {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
      `}</style>
    </div>
  );
};

export default IndexPage;
