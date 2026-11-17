'use client'
import PaymentSection from "./PaymentSection"
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js"
import { useParams } from "next/navigation"
import { useTransition } from "react"
import { rentCar } from "../../lib/actions"
import {createPaymentIntent} from "../../lib/actions"



export default function ConfirmationSection() {
    const stripe = useStripe()
    const elements = useElements()
    const params = useParams<{id: string}>()
    const [isPending, startTransition] = useTransition()

    const { id } = params

    async function handlePayment(e: React.MouseEvent) {
        e.preventDefault()

        if (!stripe || !elements || !id) return;

        startTransition(async () => {
            const clientSecret = await createPaymentIntent(id);
            const card = elements.getElement(CardElement)

            const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
                    payment_method: { card: card! }
                })

            if (error || !paymentIntent)  return;
            
            await rentCar(id, paymentIntent.id)

            
            })

        

        
    }

    return (
        <PaymentSection title="Confirmation" text="We are getting to the end. Just a few clicks and your rental is ready!" step={4}>
            <div className="flex flex-col gap-[24px]">
                <label className="flex items-center gap-[8px] cursor-pointer">
                    <input type="checkbox" name="marketing" className="filter-checkbox" />
                    <span className="text-s-9 font-medium tracking-[-0.02em] text-secondary-400">I agree with sending marketing and newsletter emails.</span>
                </label>

                <label className="flex items-center gap-[8px] cursor-pointer">
                    <input type="checkbox" name="terms" className="filter-checkbox" />
                    <span className="text-s-9 font-medium tracking-[-0.02em] text-secondary-400">I agree with our terms and conditions and privacy policy.</span>
                </label>
            </div>

            <button 
            onClick={handlePayment}
            disabled={isPending}
            type="submit" 
            className="btn w-[140px] h-[56px] bg-primary-500 text-s-8 font-bold tracking-[-0.32px] text-white">
                {isPending ? <span>Loading...</span> : <span>Rent now</span>}
            </button>
        </PaymentSection>
    )
}