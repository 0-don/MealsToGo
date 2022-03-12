import { mocks } from "./mock";

export const restaurantRequest = (
  location: keyof typeof mocks = "37.7749295,-122.4194155"
) =>
  new Promise((resolve, reject) =>
    mocks[location] ? resolve(mocks[location]) : reject("Not found")
  );

restaurantRequest().then((result) => {
  console.log(result);
})
