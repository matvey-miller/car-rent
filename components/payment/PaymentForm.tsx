'use client'
import BillingInfoSection from "../../components/payment/BillingInfoSection"
import RentalInfoSection from "../../components/payment/RentalInfoSection"
import PaymentMethodSection from "../../components/payment/PaymentMethodSection"
import ConfirmationSection from "../../components/payment/ConfirmationSection"
import { Suspense } from "react"
import ClientStripeProvider from "../../components/payment/ClientStripeProvider"
import { ReactNode } from "react"
import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { paymentFormSchema, PaymentFormValues } from "../../lib/validations/payment"



export default function PaymentForm({children} : {children: ReactNode}) {
    const methods = useForm<PaymentFormValues>({
        resolver: zodResolver(paymentFormSchema),
    })

    

    return (
        <FormProvider {...methods}>
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
            <Suspense fallback={<div className="w-[492px] h-[546px] rounded-[10px] bg-secondary-100 p-[32px] flex flex-col gap-[24px]"></div>}>
                {children}
            </Suspense>
        </form>
        </FormProvider>
        
    )
}

