import * as functions from "firebase-functions";
import { geocodeRequest } from "../geocode";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const geocode = functions.https.onRequest((request, response) => {
  geocodeRequest(request, response);
});
