import type { Review } from "../../data/reviews"
import Stars from "../Stars"

export default function ReviewItem({ review }: { review: Review }) {
    const date = new Date(review.date).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })

    return (
        <article className="flex flex-col gap-[16px]">
            <div className="flex justify-between items-start">
                <div className="flex items-center gap-[16px]">
                    <img src={review.user.avatar} alt="" className="w-[56px] h-[56px] rounded-full object-cover" />
                    <div className="flex flex-col gap-[4px]">
                        <h4 className="text-s-6 font-bold leading-[25px] tracking-[-0.02em] text-secondary-500">{review.user.name}</h4>
                        <span className="text-s-9 font-medium leading-[21px] tracking-[-0.02em] text-secondary-300">{review.user.role}</span>
                    </div>
                </div>

                <div className="flex flex-col items-end gap-[8px]">
                    <span className="text-s-9 font-medium leading-[21px] tracking-[-0.02em] text-secondary-300">{date}</span>
                    <Stars rating={review.rating} />
                </div>
            </div>

            <p className="text-s-9 font-medium leading-[28px] tracking-[-0.02em] text-secondary-400">{review.comment}</p>
        </article>
    )
}
