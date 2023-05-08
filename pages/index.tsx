import React from 'react';
import Cover from '@/components/Cover';
import Listings from '@/components/Listings';
import { NextPage } from 'next';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import Wrapper from '@/components/Wrapper';
import CompanyInfo from '@/components/CompanyInfo';
import { ListingsData } from '@/types';
import { getListingsData } from '@/utils/queries';

const Home: NextPage = () => {
  const { data, isLoading, isError } = useQuery<ListingsData>(
    ['listings'],
    getListingsData
  );

  return (
    <>
      <Cover />
      <Wrapper>
        {isLoading ? (
          <p className='h-[450px] md:h-[300px] lg:h-[200px] text-center pt-10'>
            Loading...
          </p>
        ) : isError ? (
          <p className='h-[450px] md:h-[300px] lg:h-[200px] text-center pt-10 text-red-700'>
            Error: Something went wrong...
          </p>
        ) : (
          <Listings listings={data} />
        )}
      </Wrapper>
      <CompanyInfo />
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  //pre-fetch the listings data to populate the homepage on serve-side
  await queryClient.prefetchQuery<ListingsData>(['listings'], getListingsData);

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
};
