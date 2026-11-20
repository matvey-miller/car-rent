
import { getUserData } from "../../lib/user"
import { redirect } from "next/navigation";
import Link from "next/link"


interface ProfileField {
    label: string;
    value?: string | null;
}

const EMPTY_VALUE = "Not specified"

export default async function ProfileCard() {
    const userData = await getUserData()

    if (userData === null) {
        redirect('/login')
    }

    const fields: ProfileField[] = [
        { label: "Name", value: userData.name },
        { label: "Email", value: userData.email },
        { label: "Phone" , value: userData.phone},    
        { label: "Address", value: userData.address},  
    ]

    return (
        <section className="rounded-[10px] bg-white p-[32px] flex gap-[32px]">
            <img
                src={userData.image ?? "/users/default.svg"}
                alt=""
                className="w-[120px] h-[120px] rounded-full shrink-0"
            />

            <div className="flex-1 flex flex-col gap-[24px]">
                <div className="flex justify-between items-center h-[44px]">
                    <h1 className="text-s-4 font-bold tracking-[-0.03em] text-secondary-500">My profile</h1>
                    <Link href="/profile/edit" className="btn bg-primary-500 w-[140px] h-[44px] text-s-8 font-semibold tracking-[-0.02em] text-white">
                        Edit profile
                    </Link>
                </div>

                <div className="h-px w-full bg-secondary-100" />

                <dl className="grid grid-cols-2 gap-x-[44px] gap-y-[24px]">
                    {fields.map((field) => (
                        <div key={field.label} className="flex flex-col gap-[4px]">
                            <dt className="text-s-9 font-medium leading-[21px] tracking-[-0.02em] text-secondary-300">
                                {field.label}
                            </dt>
                            <dd className={`text-s-8 font-semibold leading-[24px] tracking-[-0.02em] ${field.value ? "text-secondary-500" : "text-secondary-300"}`}>
                                {field.value || EMPTY_VALUE}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    )
}