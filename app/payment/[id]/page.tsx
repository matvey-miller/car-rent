import BillingInfoSection from "../../../components/payment/BillingInfoSection"
import RentalInfoSection from "../../../components/payment/RentalInfoSection"
import PaymentMethodSection from "../../../components/payment/PaymentMethodSection"
import ConfirmationSection from "../../../components/payment/ConfirmationSection"
import RentalSummary from "../../../components/payment/RentalSummary"
import { Suspense } from "react"
import { getCar } from "../../../lib/api"
import { notFound } from "next/navigation"
import ClientStripeProvider from "../../../components/payment/ClientStripeProvider"

export default async function PaymentPage({ params }: { params: Promise<{ id: string }> }) {

    return (
        <form className="flex items-start gap-[32px] w-[1312px] m-auto my-[32px]">
            <div className="flex-1 flex flex-col gap-[32px]">
                <BillingInfoSection />
                <RentalInfoSection />
                <ClientStripeProvider>
                    <PaymentMethodSection />
                    <Suspense>
                        <ConfirmationSection />
                    </Suspense>
                </ClientStripeProvider>
                
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