import PaymentSection from "./PaymentSection"

export default function ConfirmationSection() {
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

            <button type="submit" className="btn w-[140px] h-[56px] bg-primary-500 text-s-8 font-bold tracking-[-0.32px] text-white">
                Rent Now
            </button>
        </PaymentSection>
    )
}