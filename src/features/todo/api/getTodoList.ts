import { clientApi } from '@/shared/api/client';
import { serverApi } from '@/shared/api/server';

export const getTodoListServer = async () => {
  const res = await serverApi.get('/items');
  return res.data;
};

export const getTodoList = async () => {
  const res = await clientApi.get('/items');
  return res.data;
};
