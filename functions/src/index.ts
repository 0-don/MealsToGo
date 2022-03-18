import * as functions from "firebase-functions";
import { geocodeRequest } from "./geocode";
import { placesRequest } from "./places";
import { Client } from "@googlemaps/google-maps-services-js";

const client = new Client({config: {}})

export const geocode = functions.https.onRequest((request, response) => {
  geocodeRequest(request, response, client);
});

export const placesNearby = functions.https.onRequest((request, response) => {
  placesRequest(request, response, client);
});
