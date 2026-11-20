'use client'
import { ReactNode } from "react";
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe, Stripe } from "@stripe/stripe-js";

// Кешируем инстанс вне жизненного цикла компонента
let stripePromise: Promise<Stripe | null>;

const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string, 
          {
            locale: "en"
          }
        );
    }
    return stripePromise;
};

export default function ClientStripeProvider({ children }: { children: ReactNode }) {
  return (
    <Elements stripe={getStripe()}>
        {children}
    </Elements>
  )
}