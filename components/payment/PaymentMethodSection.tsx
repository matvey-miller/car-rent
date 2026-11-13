import PaymentSection from "./PaymentSection"
import PaymentField from "./PaymentField"

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

            <div className="grid grid-cols-2 gap-x-[32px] gap-y-[24px]">
                <PaymentField label="Card Number" name="cardNumber" placeholder="Card number" />
                <PaymentField label="Expiration Date" name="cardExpiry" placeholder="DD / MM / YY" />
                <PaymentField label="Card Holder" name="cardHolder" placeholder="Card holder" />
                <PaymentField label="CVC" name="cardCvc" placeholder="CVC" />
            </div>
        </PaymentSection>
    )
}