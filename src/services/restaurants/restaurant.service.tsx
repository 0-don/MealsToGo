import camilaze from "../../utils/camelize";

import { mocks, Result } from "./mock";

type valueof<T> = T[keyof T]

export const restaurantRequest = (
  location: keyof typeof mocks = "37.7749295,-122.4194155"
): Promise<valueof<typeof mocks> | string> =>
  new Promise((resolve, reject) =>
    mocks[location] ? resolve(mocks[location]) : reject("Not found")
  );

const restaurantsTransform = ({ results = [] }: { results: Result[] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant.openingHours && restaurant.openingHours.openNow,
      isClosedTemporarily: restaurant.businessStatus === "CLOSED_TEMPORARILY",
    };
  });
  console.log(mappedResults);
  return results;
};

restaurantRequest().then((results) => restaurantsTransform(camilaze(results)));
