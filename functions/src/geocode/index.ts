import { locations as locationsMock } from "./geocode.mock";
import { Request, Response } from "express";
import { parse } from "url";
import { GeocodeRequestQuery } from "../types";

export const geocodeRequest = (request: Request, response: Response) => {
  const { city } = parse(request.url, true).query as GeocodeRequestQuery;
  const locationMock = locationsMock[city];

  response.json(locationMock);
};
