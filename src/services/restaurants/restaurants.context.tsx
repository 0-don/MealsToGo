import React, {
  useState,
  createContext,
  useEffect,
  useMemo,
  useContext,
} from "react";
import { LocationContext } from "../location/location.context";
import { Result } from "./mock";
import { restaurantRequest, restaurantsTransform } from "./restaurant.service";
import { RestaurantProps } from "./types";

export const RestaurantsContext = createContext<{
  restaurants: RestaurantProps[];
  isLoading: boolean;
  error: string | null;
}>({
  restaurants: [],
  isLoading: false,
  error: "",
});

export const RestaurantsContextProvider: React.FC = ({ children }) => {
  const [restaurants, setRestaurants] = useState<RestaurantProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
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
      console.log(locationString);
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
