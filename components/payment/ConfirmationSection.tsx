'use client'
import PaymentSection from "./PaymentSection"
import { useStripe, useElements, CardNumberElement } from "@stripe/react-stripe-js"
import { useParams } from "next/navigation"
import { useTransition } from "react"
import { rentCar, RentCarDTO } from "../../lib/actions"
import {createPaymentIntent} from "../../lib/actions"
import { useFormContext } from "react-hook-form"
import { PaymentFormValues } from "../../lib/validations/payment"


export default function ConfirmationSection() {
    const stripe = useStripe()
    const elements = useElements()
    const params = useParams<{id: string}>()
    const [isPending, startTransition] = useTransition()
    const { handleSubmit } = useFormContext<PaymentFormValues>();
    const { id } = params


    //когда отправляет запрос
    async function onSubmit(data: PaymentFormValues) {
        if (!stripe || !elements || !id) return;


        startTransition(async () => {
            const clientSecret = await createPaymentIntent(id);
            const card = elements.getElement(CardNumberElement)

            const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
                    payment_method: { card: card! }
                })

            if (error || !paymentIntent)  return;

            const contractInfo: RentCarDTO = {
                carId: id,
                paymentIntentId: paymentIntent.id,
                formData: data
            }
            
            await rentCar(contractInfo)

            
            })

        

        
    }

    return (
        <PaymentSection title="Confirmation" text="We are getting to the end. Just few clicks and your rental is ready!" step={4}>
            <div className="flex flex-col gap-[24px]">
                <label className="flex items-center gap-[20px] h-[56px] px-[32px] rounded-[10px] bg-bg-color cursor-pointer">
                    <input type="checkbox" name="marketing" className="filter-checkbox" />
                    <span className="text-s-8 font-semibold tracking-[-0.02em] text-secondary-500">I agree with sending an Marketing and newsletter emails. No spam, promissed!</span>
                </label>

                <label className="flex items-center gap-[20px] h-[56px] px-[32px] rounded-[10px] bg-bg-color cursor-pointer">
                    <input type="checkbox" name="terms" className="filter-checkbox" />
                    <span className="text-s-8 font-semibold tracking-[-0.02em] text-secondary-500">I agree with our terms and conditions and privacy policy.</span>
                </label>
            </div>

            <button 
            onClick={handleSubmit(onSubmit)}
            disabled={isPending}
            type="button" 
            className="btn w-[140px] h-[56px] rounded-[10px]! bg-primary-500 text-s-8 font-bold tracking-[-0.32px] text-white disabled:opacity-60">
                {isPending ? <span>Loading...</span> : <span>Rent Now</span>}
            </button>

            <div className="flex flex-col gap-[16px]">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" className="text-secondary-500">
                    <path d="M16 3.5 5.5 7.5v8.2c0 6.2 4.4 10.6 10.5 12.8 6.1-2.2 10.5-6.6 10.5-12.8V7.5L16 3.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    <path d="m11.5 16 3.2 3.2 5.8-6" className="stroke-primary-500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <div className="flex flex-col gap-[8px]">
                    <p className="text-s-8 font-semibold leading-[24px] tracking-[-0.02em] text-secondary-500">All your data are safe</p>
                    <p className="text-s-9 font-medium leading-[21px] tracking-[-0.02em] text-secondary-300">We are using the most advanced security to provide you the best experience ever.</p>
                </div>
            </div>
        </PaymentSection>
    )
}