import { useFormContext } from "react-hook-form";
import { PaymentFormValues } from "../../lib/validations/payment";

interface PaymentFieldProps {
    label: string;
    name: keyof PaymentFormValues;
    placeholder?: string;
    type?: string;
}

export default function PaymentField({ label, name, placeholder, type = "text" }: PaymentFieldProps) {
    const isPicker = type === "date" || type === "time"
    const {register, formState:{errors}} = useFormContext<PaymentFormValues>()
    return (
        <div className="flex flex-col gap-[12px]">
            <label htmlFor={name} className="payment-label">{label}</label>

            <div className="relative">
                <input
                    id={name}
                    type={type}
                    placeholder={placeholder}
                    {...register(name)}
                    className={`payment-field ${isPicker ? "payment-picker" : ""}`}
                />
                {isPicker && (
                    <img
                        src="/rental-details/arrow-down.svg"
                        alt=""
                        aria-hidden="true"
                        className="w-[16px] h-[16px] absolute right-[24px] top-1/2 -translate-y-1/2 pointer-events-none"
                    />
                )}
            </div>
            {errors[name]?.message && (
                <span className="text-s-10 font-medium text-red-500">
                    {errors[name].message}
                </span>
            )}
        </div>
    )
}