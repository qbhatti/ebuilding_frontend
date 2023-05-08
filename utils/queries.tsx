import axios from 'axios';

export const getListingsData = async () => {
  const url = `${process.env.STRAPI_URL}/api/listings?populate=photos,address`;
  console.log(url);
  let listingsRes = (await axios(url)).data;
  return listingsRes;
};
