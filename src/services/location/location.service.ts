import camelize from "../../utils/camelize";
import { locations } from "./location.mock";

export type LocationReq = {
  results: {
    geometry: {
      location: {
        lng: number;
        lat: number;
      };
      viewport: {
        northeast: {
          lat: number;
          lng: number;
        };
        southwest: {
          lat: number;
          lng: number;
        };
      };
    };
  }[];
};

export type LocationProps = {
  lat: number;
  lng: number;
  viewport: {
    northeast: {
      lat: number;
      lng: number;
    };
    southwest: {
      lat: number;
      lng: number;
    };
  };
};

export const locationRequest = async (
  searchTerm: string
): Promise<LocationReq> => {
  return fetch(
    `http://192.168.0.115:5001/mealstogo-ee48c/us-central1/geocode?city=${searchTerm}`
  ).then((res) => res.json());
};

export const locationTransform = (result: LocationReq) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport } as LocationProps;
};
