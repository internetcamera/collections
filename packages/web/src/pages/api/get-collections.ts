import { prisma } from '@server/helpers/prisma';
import { NextApiHandler } from 'next';

const api: NextApiHandler = async (req, res) => {
  const { account }: { account?: string } = req.query;
  if (!account) return res.status(400).send('Missing account');
  const collections = await prisma.collection.findMany({
    where: { ownerId: account.toLowerCase() },
    orderBy: { id: 'asc' },
    select: { id: true, name: true, slug: true }
  });
  console.log({ collections });
  return res.json({ collections });
};

export default api;
