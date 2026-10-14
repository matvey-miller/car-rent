import type { Review } from "../../data/reviews"
import ReviewItem from "./ReviewItem"
import ReviewForm from "./ReviewForm"

interface ReviewsSectionProps {
    carId: string;
    reviews: Review[];
}

export default function ReviewsSection({ carId, reviews }: ReviewsSectionProps) {
    return (
        <section className="w-[1164px] rounded-[10px] bg-white p-[24px] flex flex-col gap-[32px]">
            <div className="flex items-center gap-[12px] h-[30px]">
                <h3 className="text-s-6 font-bold leading-[30px] tracking-[-0.02em] text-secondary-500">Reviews</h3>
                <span className="btn h-[28px] px-[20px] rounded-[4px] bg-primary-500 text-s-9 font-bold text-white">{reviews.length}</span>
            </div>

            {reviews.length === 0 && (
                <p className="text-s-9 font-medium text-secondary-300">No reviews yet. Be the first to leave one.</p>
            )}

            <div className="flex flex-col gap-[32px]">
                {reviews.map((review) => <ReviewItem key={review.id} review={review} />)}
            </div>

            <div className="h-px w-full bg-secondary-100" />

            <ReviewForm carId={carId} />
        </section>
    )
}
