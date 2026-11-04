'use client'

import Link from "next/link";
import { z } from "zod";
import { useForm, UseFormRegisterReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateUserData } from "../../lib/user";
import { useRouter } from "next/navigation";

interface EditProfileFormProps {
    initialData: {
        name: string;
        phone: string;
        address: string;
    };
}


const profileSchema = z.object({
    name: z.string().min(2, "Name is too short"),
    phone: z.string().min(10, "Phone must be at least 10 characters").or(z.literal("")),
    address: z.string().or(z.literal(""))

})

// Zod умеет сам генерировать TypeScript-тип на основе схемы. Это супер-удобно!
export type ProfileFormValues = z.infer<typeof profileSchema>;


export default function EditProfileForm({ initialData }: EditProfileFormProps) {
    const router = useRouter()
    //useForm заполняет сразу 3 функции
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<ProfileFormValues>({
        resolver: zodResolver(profileSchema),
        defaultValues: initialData
    });

    async function onSubmit(data: ProfileFormValues) {
        try {
            await updateUserData(data)
            router.push("/profile")
        } catch {
            console.error("Failed to update user data")
        }
        

}

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-[24px]">
            <Field
                id="nickname"
                label="Nickname"
                placeholder="Enter your nickname"
                autoComplete="nickname"
                hint="At least 2 characters"
                registration={register("name")}
                error={errors.name?.message}
            />
            <Field
                id="phone"
                label="Phone"
                type="tel"
                placeholder="+0 000 000 0000"
                autoComplete="tel"
                hint="Include the country code"
                registration={register("phone")}
                error={errors.phone?.message}
            />
            <Field
                id="address"
                label="Address"
                placeholder="City, street, house"
                autoComplete="street-address"
                hint="Where the car should be delivered"
                registration={register("address")}
                error={errors.address?.message}
            />

            <div className="flex gap-[16px] mt-[8px]">
                <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn w-[160px] h-[44px] bg-primary-500 text-s-8 font-semibold tracking-[-0.02em] text-white cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed">
                    {isSubmitting ? "Saving..." : "Save Changes"}
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
    registration: UseFormRegisterReturn;
    label: string;
    placeholder: string;
    autoComplete: string;
    hint: string;
    error?: string;
    type?: string;
}

function Field({ id, label, placeholder, autoComplete, hint, registration, error, type = "text" }: FieldProps) {
    return (
        <div className="review-field-wrap">
            <label htmlFor={id} className="text-s-9 font-semibold tracking-[-0.02em] text-secondary-400">
                {label}
            </label>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                autoComplete={autoComplete}
                {...registration}
                className={`review-field h-[56px] ${error ? "review-field-error" : ""}`}
            />
            {error
                ? <span className="review-error">{error}</span>
                : <span className="text-s-10 font-medium tracking-[-0.02em] text-secondary-300">{hint}</span>}

        </div>
    );
}

