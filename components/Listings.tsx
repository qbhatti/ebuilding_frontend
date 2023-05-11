import React from 'react';
import ListingCard from './ListingCard';
import { ListingsData } from '@/types';

type ListingsProps = {
  listings: ListingsData;
};

const Listings = ({ listings }: ListingsProps) => {
  return (
    <>
      <div className='text-2xl font-semibold mt-6 mb-1 '>
        <span>Current Listings</span>
      </div>
      <hr className='border-t-3' />

      <div>
        {listings.data.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </>
  );
};

export default Listings;
