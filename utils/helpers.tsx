import { Address } from '@/types';

export const parseAddress = (address: Address): string => {
  const { unitNumber, street, city, province, postalCode } = address;
  let addressStr: string = '';

  if (unitNumber) addressStr = unitNumber + ' - ';

  return `${addressStr}${street}, ${city}, ${province} ${postalCode}`;
};
