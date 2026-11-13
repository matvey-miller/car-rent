import BillingInfoSection from "../../../components/payment/BillingInfoSection"
import RentalInfoSection from "../../../components/payment/RentalInfoSection"
import PaymentMethodSection from "../../../components/payment/PaymentMethodSection"
import ConfirmationSection from "../../../components/payment/ConfirmationSection"
import RentalSummary from "../../../components/payment/RentalSummary"
import { Suspense } from "react"
import { getCar } from "../../../lib/api"
import { notFound } from "next/navigation"

export default async function PaymentPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    return (
        <form className="flex items-start gap-[32px] w-[1312px] m-auto my-[32px]">
            <div className="flex-1 flex flex-col gap-[32px]">
                <BillingInfoSection />
                <RentalInfoSection />
                <PaymentMethodSection />
                <ConfirmationSection />
            </div>
            <Suspense fallback={<div>llll</div>}>
                <RentalSummaryWrapper params={params}/>
            </Suspense>
        </form>
    )
}

async function RentalSummaryWrapper({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params // <-- Распаковываем здесь
    const car = await getCar(id)
    
    if (!car) notFound()

    return <RentalSummary car={car} />
}