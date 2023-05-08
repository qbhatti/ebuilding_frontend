export interface ListingsData {
  data: Listing[];
  meta: object;
}

export interface Listing {
  id: number;
  attributes: {
    type: string;
    beds: number;
    baths: number;
    areaSQFT: number;
    askingPrice: number;
    description?: string;
    photos: {
      data: ListingPhoto[];
    };
    address: Address;
  };
}

export interface ListingPhoto {
  id: number;
  attributes: {
    name: string;
    thumbnail: object;
    url: string;
  };
}

export interface Address {
  unitNumber: string;
  street: string;
  city: string;
  province: string;
  postalCode: string;
}
