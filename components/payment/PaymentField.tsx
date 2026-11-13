interface PaymentFieldProps {
    label: string;
    name: string;
    placeholder?: string;
    type?: string;
}

export default function PaymentField({ label, name, placeholder, type = "text" }: PaymentFieldProps) {
    return (
        <div className="flex flex-col gap-[16px]">
            <label htmlFor={name} className="payment-label">{label}</label>
            <input id={name} name={name} type={type} placeholder={placeholder} className="payment-field" />
        </div>
    )
}