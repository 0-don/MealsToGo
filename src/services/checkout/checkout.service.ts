import createStripe from "stripe-client";
import { Card } from "../../features/checkout/components/credit-card.component";
import { host } from "../../utils/env";

const stripe = createStripe(
  "pk_live_51HzuVwBO89hznhCzQC3Loo5ivGo17qigXoZAadpabnnmBVqBnlD8pX5qvQmJVsFAHsA63qpDw3WM1QwJQkTvnh9000nfq9eZaj"
);

export const cardTokenRequest = async (card: Card): Promise<{ id: string }> =>
  stripe.createToken({ card });

export const payRequest = async (
  token: string,
  amount: number,
  name: string
): Promise<any> => {
  const res = await fetch(`${host}/pay`, {
    body: JSON.stringify({
      token,
      name,
      amount,
    }),
    method: "POST",
  });
  if (res.status > 200) {
    // return Promise.reject();
    throw new Error("'something went wrong processing your payment'");
  }
  return res.json();
};
