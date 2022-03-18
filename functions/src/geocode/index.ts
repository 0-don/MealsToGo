import { Request, Response } from "express";

export const geocodeRequest = (request: Request, response: Response) => {
  response.send("geocode request");
};
