import type { ReactNode } from "react"

interface StatusMessageProps {
    title: string;
    text: string;
    children: ReactNode;
}

export default function StatusMessage({ title, text, children }: StatusMessageProps) {
    return (
        <div className="min-h-[600px] flex flex-col items-center justify-center gap-[16px] px-[32px] text-center">
            <h2 className="text-s-4 font-bold tracking-[-0.03em] text-secondary-500">{title}</h2>
            <p className="max-w-[420px] text-s-8 font-medium leading-[150%] tracking-[-0.02em] text-secondary-300">{text}</p>
            <div className="flex gap-[16px] mt-[16px]">{children}</div>
        </div>
    )
}