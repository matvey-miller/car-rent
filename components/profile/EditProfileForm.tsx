'use client'

import Link from "next/link";

interface EditProfileFormProps {
    initialData: {
        name: string;
        phone: string;
        address: string;
    };
}

export default function EditProfileForm({ initialData }: EditProfileFormProps) {
    return (
        <form noValidate className="flex flex-col gap-[24px]">
            <Field
                id="nickname"
                label="Nickname"
                placeholder="Enter your nickname"
                autoComplete="nickname"
                hint="At least 2 characters"
                defaultValue={initialData.name}
            />
            <Field
                id="phone"
                label="Phone"
                type="tel"
                placeholder="+0 000 000 0000"
                autoComplete="tel"
                hint="Include the country code"
                defaultValue={initialData.phone}
            />
            <Field
                id="address"
                label="Address"
                placeholder="City, street, house"
                autoComplete="street-address"
                hint="Where the car should be delivered"
                defaultValue={initialData.address}
            />

            <div className="flex gap-[16px] mt-[8px]">
                <button type="submit" className="btn w-[160px] h-[44px] bg-primary-500 text-s-8 font-semibold tracking-[-0.02em] text-white cursor-pointer">
                    Save changes
                </button>
                <Link href="/profile" className="btn w-[120px] h-[44px] border border-secondary-200 text-s-8 font-semibold tracking-[-0.02em] text-secondary-400 flex justify-center items-center">
                    Cancel
                </Link>
            </div>
        </form>
    );
}

interface FieldProps {
    id: string;
    label: string;
    placeholder: string;
    autoComplete: string;
    hint: string;
    defaultValue: string;
    type?: string;
}

function Field({ id, label, placeholder, autoComplete, hint, defaultValue, type = "text" }: FieldProps) {
    return (
        <div className="review-field-wrap">
            <label htmlFor={id} className="text-s-9 font-semibold tracking-[-0.02em] text-secondary-400">
                {label}
            </label>
            <input
                id={id}
                name={id}
                type={type}
                placeholder={placeholder}
                autoComplete={autoComplete}
                defaultValue={defaultValue}
                className="review-field h-[56px]"
            />
            <span className="text-s-10 font-medium tracking-[-0.02em] text-secondary-300">{hint}</span>
        </div>
    );
}