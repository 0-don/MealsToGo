export const liveHost =
  "https://us-central1-mealstogo-ee48c.cloudfunctions.net";
export const localHost =
  "http://192.168.0.115:5001/mealstogo-ee48c/us-central1";
export const isDevelopment = process.env.NODE_ENV === "development";
export const host = isDevelopment ? localHost : liveHost;
export const isMock = true;
export const stripeKey = isDevelopment
  ? "pk_test_51HzuVwBO89hznhCztQ4D1tFaxug9go1yJSAKNwPuEaZ5F03sJbKrCBBT13bXpdjyZ5dkCdvJGeaqrLUHOGB6DHqb000zbuRLZD"
  : "pk_live_51HzuVwBO89hznhCzQC3Loo5ivGo17qigXoZAadpabnnmBVqBnlD8pX5qvQmJVsFAHsA63qpDw3WM1QwJQkTvnh9000nfq9eZaj";
