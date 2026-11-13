import PaymentSection from "./PaymentSection"
import PaymentField from "./PaymentField"

export default function BillingInfoSection() {
    return (
        <PaymentSection title="Billing Info" text="Please enter your billing info" step={1}>
            <div className="grid grid-cols-2 gap-x-[32px] gap-y-[24px]">
                <PaymentField label="Name" name="name" placeholder="Your name" />
                <PaymentField label="Phone Number" name="phone" placeholder="Phone number" type="tel" />
                <PaymentField label="Address" name="address" placeholder="Address" />
                <PaymentField label="Town / City" name="city" placeholder="Town or city" />
            </div>
        </PaymentSection>
    )
}