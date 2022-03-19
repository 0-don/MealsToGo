import { LIVEHOST, LOCALHOST, STRIPETEST, STRIPELIVE } from "@env";

export const liveHost = LIVEHOST;
export const localHost = LOCALHOST;
export const isDevelopment = process.env.NODE_ENV === "development";
export const host = isDevelopment ? localHost : liveHost;
export const isMock = isDevelopment;
export const stripeKey = isDevelopment ? STRIPETEST : STRIPELIVE;
