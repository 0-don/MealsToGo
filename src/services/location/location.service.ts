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

export const locationRequest = (searchTerm: string): Promise<LocationReq> => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm as keyof typeof locations];
    if (!locationMock) {
      reject("not found");
    }
    resolve(locationMock);
  });
};

export const locationTransform = (result: LocationReq) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport } as LocationProps;
};