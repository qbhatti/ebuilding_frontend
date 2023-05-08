import { Listing } from '@/types';
import { parseAddress } from '@/utils/helpers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ListingCard = ({ listing }: { listing: Listing }) => {
  //combine the street, city, province and postal code into single string
  const address: string = parseAddress(listing.attributes.address);

  const {
    attributes: {
      type,
      beds,
      baths,
      areaSQFT,
      description,
      photos,
      askingPrice
    }
  } = listing;

  return (
    <Link href='#'>
      <div className='flex items-center bg-white border border-gray-200 rounded-lg shadow flex-row w-full hover:bg-gray-100 my-5 h-auto'>
        <Image
          className='rounded-none rounded-l-lg'
          src={`http://localhost:1337${photos?.data?.[0].attributes.url}`}
          alt=''
          width={200}
          height={200}
        />
        <div className='flex flex-col justify-between p-4 leading-normal'>
          <h5 className='mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white'>
            {address}
          </h5>
          <p className='max-h-[40px] w-full mb-2 font-normal text-sm text-gray-700 text-ellipsis overflow-hidden '>
            {description}
          </p>
          <hr className='w-full mb-2' />
          <div className='flex-row mx-2 justify-start gap-3 text-sm font-semibold mb-[-10px] '>
            <p className='inline-block mr-3'>{`${type} `}</p>
            <p className='inline-block mr-3'>{`${beds} bed${
              beds > 1 ? 's' : ''
            }`}</p>
            <p className='inline-block mr-3'>{`${baths} bath${
              baths > 1 ? 's' : ''
            }`}</p>
            <p className='inline-block mr-3'>{`${areaSQFT} sqft`}</p>

            <p className='inline-block mr-3'>{`$${askingPrice.toLocaleString()}`}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;
