import { LIVEHOST, LOCALHOST, STRIPEPUBLICTEST, STRIPEPUBLICLIVE } from "@env";

export const isDevelopment = Object.values(process.env).includes("development");
export const host = isDevelopment ? LOCALHOST : LIVEHOST;
export const stripeKey = isDevelopment ? STRIPEPUBLICTEST : STRIPEPUBLICLIVE;
export const isMock = isDevelopment;
