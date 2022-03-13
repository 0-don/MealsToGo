import React, { useEffect, useState } from "react";
import {
  LocationProps,
  locationRequest,
  locationTransform,
} from "./location.service";

interface LocationContextData {
  location:
    | {
        lat: number;
        lng: number;
      }
    | undefined;
  isLoading: boolean;
  error: null;
  search: (searchKeyword?: string) => void;
  keyword: string;
}

export const LocationContext = React.createContext<LocationContextData>({
  isLoading: false,
  error: null,
  location: undefined,
  keyword: "",
  search: () => {},
});

export const LocationContextProvider: React.FC = ({ children }) => {
  const [keyword, setKeyword] = useState("san francisco");
  const [location, setLocation] = useState<{
    lat: number;
    lng: number;
  }>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword: string = "Antwerp") => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };

  useEffect(() => {
    if (!keyword.length) {
      return;
    }
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [keyword]);

  useEffect(() => {}, [])
  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
