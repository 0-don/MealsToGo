import { Client } from "@googlemaps/google-maps-services-js";
import { addMockImage, mockImages } from "./mock/index";
import { Request, Response } from "express";
import { parse } from "url";
import { PlacesRequestQuery } from "../types";
import { mocks } from "./mock";
import { config } from "firebase-functions";

const addGoogleImage = (restaurant: any) => {
  const ref = restaurant.photos[0].photo_reference;
  if (!ref) {
    const randomImage =
      mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    restaurant.photos = [randomImage];
    return restaurant;
  }

  restaurant.photos = [
    `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${ref}&key=${
      config().google.key
    }`,
  ];
  return restaurant;
};

export const placesRequest = (
  request: Request,
  response: Response,
  client: Client
) => {
  const { location, mock } = parse(request.url, true)
    .query as PlacesRequestQuery;
  if (mock === "true") {
    const data = mocks[location];
    if (data) {
      data.results = data.results.map(addMockImage);
    }
    response.json(mock);
  }

  client
    .placesNearby({
      params: {
        location,
        radius: 1500,
        type: "restaurant",
        key: config().google.key,
      },
      timeout: 1000,
    })
    .then((res) => {
      res.data.results = res.data.results.map(addGoogleImage);
      return response.json(res.data);
    })
    .catch((e) => {
      response.status(400);
      return response.send(e.response.data.error_message);
    });
};
