import PaymentForm from "../../../components/payment/PaymentForm"
import { getCar } from "../../../lib/api"
import { notFound } from "next/navigation"
import RentalSummary from "../../../components/payment/RentalSummary"
import { Suspense } from "react"

export default async function PaymentPage({ params }: { params: Promise<{ id: string }> }) {

    return (
        <PaymentForm>
            <Suspense fallback={<div className="w-[492px] h-[546px] rounded-[10px] bg-secondary-100 p-[32px] flex flex-col gap-[24px] skeleton"></div>}>
                    <RentalSummaryWrapper params={params}/>
            </Suspense>
        </PaymentForm>
    )
}

async function RentalSummaryWrapper({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params // <-- Распаковываем здесь
    const car = await getCar(id)
    
    if (!car) notFound()

    return <RentalSummary car={car} />
}
