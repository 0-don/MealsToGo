import { Request, Response } from "express";
import Stripe from "stripe";

export const payRequest = (
  request: Request,
  response: Response,
  stripeClient: Stripe
) => {
  const body = JSON.parse(request.body);
  const { token, amount } = body;
  console.error(token);
  stripeClient.paymentIntents
    .create({
      amount,
      currency: "USD",
      payment_method_types: ["card"],
      confirm: true,
    })
    .then((paymentIntent) => {
      response.json(paymentIntent);
    })
    .catch((e) => {
      console.error(e);
      response.status(400);
      response.send(e);
    });
};
