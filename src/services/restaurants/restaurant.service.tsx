import camilaze from "../../utils/camelize";
import { mockImages, mocks, Result } from "./mock";
import { MockProps, RestaurantProps } from "./types";

// type valueof<T> = T[keyof T]; // : Promise<valueof<typeof mocks>>

export const restaurantRequest = (
  location: string = "37.7749295,-122.4194155"
): Promise<MockProps> =>
  new Promise((resolve, reject) =>
    mocks[location as keyof typeof mocks]
      ? resolve(mocks[location as keyof typeof mocks] as unknown as MockProps)
      : reject("Not found")
  );

export const restaurantsTransform = ({
  results = [],
}: MockProps): RestaurantProps[] => {
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map(
      () => mockImages[Math.ceil(Math.random() * (mockImages.length - 1))]
    );

    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });

  return camilaze(mappedResults);
};
