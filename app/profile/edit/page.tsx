import Link from "next/link";
import { Suspense } from "react";
import { redirect } from "next/navigation";
import { getUserData } from "../../../lib/user";
import EditProfileForm from "../../../components/profile/EditProfileForm";

export default function EditProfilePage() {
    return (
        <div className="flex flex-col gap-[24px] w-[720px] m-auto my-[32px]">
            <Link href="/profile" className="text-s-9 font-semibold tracking-[-0.02em] text-primary-500">
                ← Back to profile
            </Link>

            <section className="rounded-[10px] bg-white p-[32px] flex flex-col gap-[32px]">
                <div className="flex flex-col gap-[8px]">
                    <h1 className="text-s-4 font-bold tracking-[-0.03em] text-secondary-500">Edit profile</h1>
                    <p className="text-s-9 font-medium leading-[150%] tracking-[-0.02em] text-secondary-300">
                        Update your personal data. It will be used when you rent a car.
                    </p>
                </div>

                <div className="h-px w-full bg-secondary-100" />

                <Suspense fallback={<div className="h-[457px] skeleton rounded-[10px]"></div>}>
                    <ProfileFormLoader />
                </Suspense>
            </section>
        </div>
    );
}

// Выносим получение данных в отдельный асинхронный компонент
async function ProfileFormLoader() {
    const user = await getUserData();

    if (!user) {
        redirect('/login');
    }

    return (
        <EditProfileForm 
            initialData={{
                name: user.name ?? "",
                phone: user.phone ?? "",
                address: user.address ?? ""
            }} 
        />
    );
}