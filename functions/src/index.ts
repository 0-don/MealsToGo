import { Client } from "@googlemaps/google-maps-services-js";
import * as functions from "firebase-functions";
import Stripe from "stripe";
import { geocodeRequest } from "./geocode";
import { payRequest } from "./pay";
import { placesRequest } from "./places";

const stripeKey = process.env.FUNCTIONS_EMULATOR
  ? functions.config().stripe.test
  : functions.config().stripe.live;

const stripeClient = new Stripe(stripeKey, {
  apiVersion: "2020-08-27",
});

const client = new Client({ config: {} });

export const geocode = functions.https.onRequest((request, response) => {
  geocodeRequest(request, response, client);
});

export const placesNearby = functions.https.onRequest((request, response) => {
  placesRequest(request, response, client);
});

export const pay = functions.https.onRequest((request, response) => {
  // payRequest(request, response, stripeClient);
  payRequest(request, response, stripeClient);
});
