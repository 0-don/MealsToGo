import { Client } from "@googlemaps/google-maps-services-js";
import { Request, Response } from "express";
import { config } from "firebase-functions";
import { parse } from "url";
import { GeocodeRequestQuery } from "../types";
import { locations as locationsMock } from "./geocode.mock";

export const geocodeRequest = (
  request: Request,
  response: Response,
  client: Client
) => {
  const { city, mock } = parse(request.url, true).query as GeocodeRequestQuery;
  if (mock === "true") {
    const locationMock = locationsMock[city];
    return response.json(locationMock);
  }

  return client
    .geocode({
      params: {
        address: city,
        key: config().google.key,
      },
      timeout: 1000,
    })
    .then((res) => response.json(res.data))
    .catch((e) => {
      response.status(400);
      return response.send(e.response.data.error_message);
    });
};
