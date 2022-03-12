import antwerp from "./antwerp.json";
import chicago from "./chicago.json";
import toronto from "./toronto.json";
import san_francisco from "./san_francisco.json";

export const mocks = {
  "51.219448,4.402464": antwerp,
  "43.653225,-79.383186": toronto,
  "41.878113,-87.629799": chicago,
  "37.7749295,-122.4194155": san_francisco,
};

export const mockImages = [
  "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-oranges-ice-600x750.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2020/08/detail-of-pavlova-strawberry-piece-of-cake-600x800.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-baking-600x750.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-pancakes-600x750.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2019/02/messy-pizza-on-a-black-table-600x400.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2019/02/pizza-ready-for-baking-600x400.jpg",
];

export interface Location {
  lat: number;
  lng: number;
}

export interface Northeast {
  lat: number;
  lng: number;
}

export interface Southwest {
  lat: number;
  lng: number;
}

export interface Viewport {
  northeast: Northeast;
  southwest: Southwest;
}

export interface Geometry {
  location: Location;
  viewport: Viewport;
}

export interface OpeningHours {
  openNow: boolean;
}

export interface Photo {
  height: number;
  htmlAttributions: string[];
  photoReference: string;
  width: number;
}

export interface PlusCode {
  compoundCode: string;
  globalCode: string;
}

export interface Result {
  businessStatus: string;
  geometry: Geometry;
  icon: string;
  name: string;
  openingHours: OpeningHours;
  photos: Photo[];
  placeId: string;
  rating: number;
  reference: string;
  userRatingsTotal: number;
  vicinity: string;
  plusCode: PlusCode;
  scope: string;
  types: string[];
  priceLevel?: number;
}

export interface MapsSearch {
  htmlAttributions: any[];
  nextPageToken: string;
  results: Result[];
  status: string;
}
