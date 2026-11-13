import PaymentSection from "./PaymentSection"
import PaymentField from "./PaymentField"

export default function RentalInfoSection() {
    return (
        <PaymentSection title="Rental Info" text="Please select your rental date" step={2}>
            <RentalGroup title="Pick - Up" prefix="pickUp" />
            <RentalGroup title="Drop - Off" prefix="dropOff" />
        </PaymentSection>
    )
}

function RentalGroup({ title, prefix }: { title: string; prefix: string }) {
    return (
        <fieldset className="flex flex-col gap-[24px]">
            <legend className="text-s-8 font-semibold leading-[24px] tracking-[-0.02em] text-secondary-500 mb-[24px]">{title}</legend>

            <div className="grid grid-cols-3 gap-[32px]">
                <div className="flex flex-col gap-[16px]">
                    <label htmlFor={`${prefix}Location`} className="payment-label">Locations</label>
                    <select id={`${prefix}Location`} name={`${prefix}Location`} defaultValue="" className="payment-field">
                        <option value="" disabled>Select your city</option>
                    </select>
                </div>

                <PaymentField label="Date" name={`${prefix}Date`} type="date" />
                <PaymentField label="Time" name={`${prefix}Time`} type="time" />
            </div>
        </fieldset>
    )
}