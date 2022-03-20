import camelize from "camelize";
import { host, isMock } from "../../utils/env";

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
  console.log(searchTerm, host);
  return fetch(`${host}/geocode?city=${searchTerm}&mock=${isMock}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const locationTransform = (result: LocationReq) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport } as LocationProps;
};
