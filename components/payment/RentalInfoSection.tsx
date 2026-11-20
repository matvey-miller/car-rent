import PaymentSection from "./PaymentSection"
import PaymentSelect from "./PaymentSelect"
import PaymentField from "./PaymentField"
import type { PaymentFormValues } from "../../lib/validations/payment"

export default function RentalInfoSection() {
    return (
        <PaymentSection title="Rental Info" text="Please select your rental date" step={2}>
            <RentalGroup 
                title="Pick - Up" 
                number={1} 
                locationName="pickUpLocation"
                dateName="pickUpDate"
                timeName="pickUpTime"
            />
            <RentalGroup 
                title="Drop - Off" 
                number={2} 
                locationName="dropOffLocation"
                dateName="dropOffDate"
                timeName="dropOffTime"
            />
        </PaymentSection>
    )
}

interface RentalGroupProps {
    title: string;
    number: number;
    locationName: keyof PaymentFormValues;
    dateName: keyof PaymentFormValues;
    timeName: keyof PaymentFormValues;
}

function RentalGroup({ title, number, locationName, dateName, timeName }: RentalGroupProps) {
    return (
        <fieldset>
            {/* legend для скринридеров, видимый заголовок ниже */}
            <legend className="sr-only">{title}</legend>

            <div aria-hidden="true" className="flex items-center gap-[8px] h-[24px] mb-[20px]">
                <img src={`/rental-details/circle${number}.svg`} alt="" className="w-[16px] h-[16px]" />
                <span className="text-s-8 font-semibold leading-[24px] tracking-[-0.02em] text-secondary-500">{title}</span>
            </div>

            <div className="grid grid-cols-2 gap-x-[32px] gap-y-[24px]">
                <PaymentSelect label="Locations" name={locationName} placeholder="Select your city" />
                <PaymentField label="Date" name={dateName} type="date" placeholder="Select your date" />
                <PaymentField label="Time" name={timeName} type="time" placeholder="Select your time" />
            </div>
        </fieldset>
    )
}