import type { ReactNode } from "react"

interface PaymentSectionProps {
    title: string;
    text: string;
    step: number;
    children: ReactNode;
}

export default function PaymentSection({ title, text, step, children }: PaymentSectionProps) {
    return (
        <section className="rounded-[10px] bg-white p-[32px] flex flex-col gap-[32px]">
            <div className="flex justify-between items-start">
                <div className="flex flex-col gap-[4px]">
                    <h2 className="text-s-6 font-bold leading-[30px] tracking-[-0.02em] text-secondary-500">{title}</h2>
                    <p className="text-s-9 font-medium leading-[21px] tracking-[-0.02em] text-secondary-300">{text}</p>
                </div>
                <span className="text-s-9 font-medium leading-[21px] tracking-[-0.02em] text-secondary-300">Step {step} of 4</span>
            </div>

            {children}
        </section>
    )
}