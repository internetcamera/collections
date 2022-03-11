import { Collection } from '@prisma/client';
import useSWR from 'swr';

const useCollectionsForAccount = (account?: string) => {
  const { data } = useSWR<{
    collections: Pick<Collection, 'id' | 'name' | 'slug'>[];
  }>(
    account ? `/api/get-collections?account=${account}` : null,
    (url: string) => fetch(url).then(r => r.json())
  );
  return data?.collections || [];
};

export default useCollectionsForAccount;
