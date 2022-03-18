import { addMockImage } from "./mock/index";
import { Request, Response } from "express";
import { parse } from "url";
import { PlacesRequestQuery } from "../types";
import { mocks } from "./mock";

export const placesRequest = (request: Request, response: Response) => {
  const { location } = parse(request.url, true).query as PlacesRequestQuery;
  const mock = mocks[location];
  if (mock) {
    mock.results = mock.results.map(addMockImage);
  }
  response.json(mock);
};
