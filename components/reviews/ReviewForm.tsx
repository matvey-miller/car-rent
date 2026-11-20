'use client'

import { useState, FormEvent } from "react"
import { useRouter } from "next/navigation"
import { postReview } from "../../lib/actions"
import { useSession } from "next-auth/react"
import ReviewSignIn from "./ReviewSignIn"
import ReviewFormSkeleton from "../skeleton/ReviewFomSkeleton"

interface FormErrors {
    rating?: string;
    comment?: string;
    form?: string;
}

export default function ReviewForm({ carId }: { carId: string }) {
    const router = useRouter()
    const session = useSession()

    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState("")
    const [errors, setErrors] = useState<FormErrors>({})
    const [isSending, setIsSending] = useState(false)


    //Заполнение указаний для полей с ошибками
    function validate(): FormErrors {
        const result: FormErrors = {}
        if (rating === 0) result.rating = "Choose a rating"
        if (comment.trim().length < 10) result.comment = "Write at least 10 characters"
        return result
    }

    function clearError(field: keyof FormErrors) {
        setErrors((errors) => ({ ...errors, [field]: undefined }))
    }


    async function handleSubmit(e: FormEvent) {
        e.preventDefault()

        const found = validate()
        setErrors(found)
        if (Object.keys(found).length > 0) return //ошибки есть -> выходим

        setIsSending(true)
        try {
            await postReview(carId, rating, comment)
            setRating(0)
            setComment("")
            router.refresh()
        } catch {
            setErrors({ form: "Could not send the review. Check that json-server is running." })
        } finally {
            setIsSending(false)
        }
    }

    if (session.status === "loading") {
        return (
            <ReviewFormSkeleton />
        )
    }


    if (session.status === "unauthenticated") {
        return (
            <ReviewSignIn />
        )
    }

    return (
        <div>
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-[24px]">
            <h3 className="text-s-6 font-bold leading-[30px] tracking-[-0.02em] text-secondary-500">Leave a review</h3>

            

            <div className="review-field-wrap">
                <div className="flex items-center gap-[12px]">
                    <span className="text-s-9 font-semibold tracking-[-0.02em] text-secondary-400">Rating</span>
                    <div className="flex gap-[2px]">
                        {[1, 2, 3, 4, 5].map((n) => (
                            <button key={n} type="button" onClick={() => {setRating(n); clearError("rating")}} aria-label={`${n} stars`}>
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

            <div className="review-field-wrap">
                <textarea
                    value={comment}
                    onChange={(e) => {setComment(e.target.value); clearError("comment")}}
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
        </div>
        
    )
}
