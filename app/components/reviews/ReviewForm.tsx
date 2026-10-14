'use client'

import { useState, FormEvent } from "react"
import { useRouter } from "next/navigation"
import { postReview } from "../../lib/api"

interface FormErrors {
    name?: string;
    rating?: string;
    comment?: string;
    form?: string;
}

export default function ReviewForm({ carId }: { carId: string }) {
    const router = useRouter()

    const [name, setName] = useState("")
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState("")
    const [errors, setErrors] = useState<FormErrors>({})
    const [isSending, setIsSending] = useState(false)

    function validate(): FormErrors {
        const result: FormErrors = {}
        if (name.trim().length < 2) result.name = "Enter your name (at least 2 characters)"
        if (rating === 0) result.rating = "Choose a rating"
        if (comment.trim().length < 10) result.comment = "Write at least 10 characters"
        return result
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault()

        const found = validate()
        setErrors(found)
        if (Object.keys(found).length > 0) return

        setIsSending(true)
        try {
            await postReview({
                carId,
                user: { name: name.trim(), avatar: "/users/default.svg", role: "Customer" },
                rating,
                comment: comment.trim(),
                date: new Date().toISOString().slice(0, 10),
            })
            setName("")
            setRating(0)
            setComment("")
            router.refresh()
        } catch {
            setErrors({ form: "Could not send the review. Check that json-server is running." })
        } finally {
            setIsSending(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-[24px]">
            <h3 className="text-s-6 font-bold leading-[30px] tracking-[-0.02em] text-secondary-500">Leave a review</h3>

            <div className="flex flex-col gap-[8px]">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className={`review-field h-[56px] ${errors.name ? "review-field-error" : ""}`}
                />
                {errors.name && <span className="review-error">{errors.name}</span>}
            </div>

            <div className="flex flex-col gap-[8px]">
                <div className="flex items-center gap-[12px]">
                    <span className="text-s-9 font-semibold tracking-[-0.02em] text-secondary-400">Rating</span>
                    <div className="flex gap-[2px]">
                        {[1, 2, 3, 4, 5].map((n) => (
                            <button key={n} type="button" onClick={() => setRating(n)} aria-label={`${n} stars`}>
                                <img
                                    src={n <= rating ? "/buttons/star-filled.svg" : "/buttons/star-empty.svg"}
                                    alt=""
                                    className="w-[20px] h-[20px]"
                                />
                            </button>
                        ))}
                    </div>
                </div>
                {errors.rating && <span className="review-error">{errors.rating}</span>}
            </div>

            <div className="flex flex-col gap-[8px]">
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Write your review"
                    className={`review-field h-[120px] py-[16px] resize-none ${errors.comment ? "review-field-error" : ""}`}
                />
                {errors.comment && <span className="review-error">{errors.comment}</span>}
            </div>

            {errors.form && <span className="review-error">{errors.form}</span>}

            <button
                type="submit"
                disabled={isSending}
                className="btn w-[140px] h-[44px] bg-primary-500 text-s-8 font-semibold tracking-[-0.02em] text-white disabled:opacity-60"
            >
                {isSending ? "Sending..." : "Send review"}
            </button>
        </form>
    )
}
