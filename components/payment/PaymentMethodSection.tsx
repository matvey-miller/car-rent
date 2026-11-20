'use client'
import PaymentSection from "./PaymentSection"
import PaymentField from "./PaymentField"
import { ReactNode, useState } from "react"
import { CardNumberElement, CardExpiryElement, CardCvcElement } from "@stripe/react-stripe-js"
import type { StripeElementChangeEvent } from "@stripe/stripe-js";

const methods = [
    { value: "card", label: "Credit Card", logos: ["/payment/visa.svg", "/payment/mastercard.svg"] },
    { value: "paypal", label: "PayPal", logos: ["/payment/paypal.svg"] },
    { value: "bitcoin", label: "Bitcoin", logos: ["/payment/bitcoin.svg"] },
]

// Stripe рисует поля в iframe, поэтому стили передаются сюда, а не через CSS
const stripeStyle = {
    base: {
        fontSize: "14px",
        fontWeight: "500",
        color: "#1A202C",
        "::placeholder": { color: "#90A3BF" },
    },
    invalid: { color: "#FF4423" },
}

export default function PaymentMethodSection() {
    const [stripeErrors, setStripeErrors] = useState<Record<string, string>>({});

    const handleStripeChange = (field: string) => (event: StripeElementChangeEvent) => {
        setStripeErrors((prev) => ({
            ...prev,
            [field]: event.error ? event.error.message : "",
        }));
    };

    return (
        <PaymentSection title="Payment Method" text="Please enter your payment method" step={3}>
            <div className="flex flex-col gap-[24px]">
                {methods.map((method) => (
                    <div key={method.value} className="group rounded-[10px] bg-bg-color has-[:checked]:p-[24px]">
                        <label className="flex items-center justify-between h-[56px] px-[32px] cursor-pointer group-has-[:checked]:h-[24px] group-has-[:checked]:px-0">
                            <span className="flex items-center gap-[16px]">
                                <input type="radio" name="paymentMethod" value={method.value} defaultChecked={method.value === "card"} className="payment-radio" />
                                <span className="text-s-8 font-semibold tracking-[-0.02em] text-secondary-500">{method.label}</span>
                            </span>

                            <span className="flex items-center gap-[16px]" aria-hidden="true">
                                {method.logos.map((src) => <img key={src} src={src} alt="" />)}
                            </span>
                        </label>

                        {method.value === "card" && (
                            <div className="payment-card-fields hidden group-has-[:checked]:grid grid-cols-2 gap-x-[32px] gap-y-[24px] mt-[28px]">
                                <StripeField label="Card Number" error={stripeErrors.cardNumber}>
                                    <CardNumberElement 
                                        options={{ style: stripeStyle, placeholder: "Card number" }} 
                                        onChange={handleStripeChange("cardNumber")} 
                                    />
                                </StripeField>

                                <StripeField label="Expration Date" error={stripeErrors.expiry}>
                                    <CardExpiryElement 
                                        options={{ style: stripeStyle, placeholder: "DD / MM / YY" }} 
                                        onChange={handleStripeChange("expiry")} 
                                    />
                                </StripeField>

                                <PaymentField label="Card Holder" name="cardHolder" placeholder="Card holder" />

                                <StripeField label="CVC" error={stripeErrors.cvc}>
                                    <CardCvcElement 
                                        options={{ style: stripeStyle, placeholder: "CVC" }} 
                                        onChange={handleStripeChange("cvc")} 
                                    />
                                </StripeField>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </PaymentSection>
    )
}

// подпись + обёртка в стиле .payment-field, внутри которой живёт iframe Stripe
function StripeField({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
    return (
        <div className="flex flex-col gap-[12px]">
            <span className="payment-label">{label}</span>
            <div className={`payment-field flex flex-col justify-center ${error ? "border-red-500" : ""}`}>
                {children}
            </div>
            {error && <span className="text-s-10 font-medium text-red-500">{error}</span>}
        </div>
    )
}