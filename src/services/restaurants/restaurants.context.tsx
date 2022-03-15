import React, { createContext, useContext, useEffect, useState } from "react";
import { LocationContext } from "../location/location.context";
import { restaurantRequest, restaurantsTransform } from "./restaurant.service";
import { RestaurantProps } from "./types";

type RestaurantsContextData = {
  restaurants: RestaurantProps[];
  isLoading: boolean;
  error: string;
};

export const RestaurantsContext = createContext<RestaurantsContextData>(
  {} as RestaurantsContextData
);

export const RestaurantsContextProvider: React.FC = ({ children }) => {
  const [restaurants, setRestaurants] = useState<RestaurantProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (locationString: string) => {
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurantRequest(locationString)
        .then(restaurantsTransform)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location?.lat},${location?.lng}`;

      retrieveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
