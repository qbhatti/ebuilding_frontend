import { ListingsData } from '@/types';
import axios from 'axios';

export const getListingsData = async () => {
  const url = `${process.env.STRAPI_URL}/api/listings?populate=photos,address`;
  let listingsRes: ListingsData = (await axios(url)).data;
  return listingsRes;
};
