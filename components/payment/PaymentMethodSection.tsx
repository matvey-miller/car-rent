'use client'
import PaymentSection from "./PaymentSection"
import PaymentField from "./PaymentField"
import { CardElement } from "@stripe/react-stripe-js"


const methods = [
    { value: "card", label: "Credit Card" },
    { value: "paypal", label: "PayPal" },
    { value: "bitcoin", label: "Bitcoin" },
]

export default function PaymentMethodSection() {
    return (
        <PaymentSection title="Payment Method" text="Please enter your payment method" step={3}>
            <div className="flex flex-col gap-[24px]">
                {methods.map((method) => (
                    <label key={method.value} className="flex items-center gap-[16px] h-[56px] px-[32px] rounded-[10px] bg-bg-color cursor-pointer">
                        <input type="radio" name="paymentMethod" value={method.value} defaultChecked={method.value === "card"} />
                        <span className="text-s-8 font-semibold tracking-[-0.02em] text-secondary-500">{method.label}</span>
                    </label>
                ))}
            </div>

                <div className="flex flex-col gap-[24px] bg-bg-color p-[24px] rounded-[10px] mt-[24px]">
                    <PaymentField label="Card Holder" name="cardHolder" placeholder="Card holder name" />
                    
                    <div className="flex flex-col gap-[8px]">
                        <span className="text-s-8 font-semibold tracking-[-0.02em] text-secondary-500">Card Details</span>
                        <div className="h-[56px] bg-white rounded-[10px] px-[24px] flex flex-col justify-center border border-secondary-100">
                            {/* Это защищенный iframe Stripe. Номер, дата и CVC уже внутри */}
                            <CardElement options={{ hidePostalCode: true }} />
                        </div>
                    </div>
                </div>
        </PaymentSection>
    )
}