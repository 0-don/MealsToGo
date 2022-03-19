import { LIVEHOST, LOCALHOST, STRIPETEST, STRIPELIVE } from "@env";

export const isDevelopment = Object.values(process.env).includes("development");
export const liveHost = LIVEHOST;
export const localHost = LOCALHOST;
export const host = isDevelopment ? localHost : liveHost;
export const stripeKey = isDevelopment ? STRIPETEST : STRIPELIVE;
export const isMock = isDevelopment;
