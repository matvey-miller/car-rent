import { useFormContext } from "react-hook-form";
import { PaymentFormValues } from "../../lib/validations/payment";

interface PaymentSelectProps {
    label: string;
    name: keyof PaymentFormValues;
    placeholder: string;
}

export default function PaymentSelect({ label, name, placeholder }: PaymentSelectProps) {
    const {register, formState: {errors}} = useFormContext<PaymentFormValues>()

    return (
        <div className="flex flex-col gap-[12px]">
            <label htmlFor={name} className="payment-label">{label}</label>

            <div className="relative">
                <select 
                id={name} 
                defaultValue="" 
                {...register(name)}
                className="payment-field payment-select">
                    <option value="" disabled>{placeholder}</option>
                    <option value="Berlin">Berlin</option>
                    <option value="Munich">Munich</option>
                </select>
                <img
                    src="/rental-details/arrow-down.svg"
                    alt=""
                    aria-hidden="true"
                    className="w-[16px] h-[16px] absolute right-[24px] top-1/2 -translate-y-1/2 pointer-events-none"
                />
            </div>
            {errors[name]?.message && (
                <span className="text-s-10 font-medium text-red-500">
                    {errors[name].message}
                </span>
            )}
        </div>
    )
}