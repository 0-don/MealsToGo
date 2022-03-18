export const liveHost =
  "https://us-central1-mealstogo-ee48c.cloudfunctions.net";
export const localHost =
  "http://192.168.0.115:5001/mealstogo-ee48c/us-central1";
export const isDevelopment = process.env.NODE_ENV === "development";
export const host = isDevelopment ? localHost : liveHost;
