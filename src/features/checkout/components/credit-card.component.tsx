import React, { Dispatch, SetStateAction } from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";
import { cardTokenRequest } from "../../../services/checkout/checkout.service";

type CreditCardInputProps = {
  name: string;
  onSuccess: Dispatch<SetStateAction<{ id: string } | undefined>>;
  onError: () => void;
};

type FormDataProps = {
  status: "valid" | "invalid" | "incomplete";
  values: {
    number: string;
    expiry: string;
    cvc: string;
  };
};

export type Card = {
  number: string;
  exp_month: string;
  exp_year: string;
  cvc: string;
  name: string;
};

export const CreditCardInput = ({
  name = "",
  onSuccess,
  onError,
}: CreditCardInputProps): JSX.Element => {
  const onChange = async (formData: FormDataProps) => {
    const { values, status } = formData;
    const isIncomplete = Object.values(status).includes("incomplete");
    const expiry = values.expiry.split("/");

    const card = {
      number: values.number,
      exp_month: expiry[0],
      exp_year: expiry[1],
      cvc: values.cvc,
      name,
    };
    if (!isIncomplete) {
      try {
        const info = await cardTokenRequest(card);

        onSuccess(info);
      } catch (e) {
        onError();
      }
    }
  };
  return <LiteCreditCardInput onChange={onChange} />;
};
