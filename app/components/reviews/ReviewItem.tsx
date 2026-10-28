import Image from "next/image"
import type { Review } from "../../data/reviews"
import Stars from "../Stars"

// 1. Вынесли настройки даты наружу. Теперь они создаются один раз при запуске, 
// а не пересоздаются каждый раз при рендере каждого отзыва.
const dateFormatter = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC", // Защита от сдвига даты из-за разных часовых поясов
})

export default function ReviewItem({ review }: { review: Review }) {
    // 2. Безопасный парсинг даты. 
    // Если из базы или моков придет кривая строка (например "21.05.2023"), 
    // компонент не выведет уродливый "Invalid Date", а просто покажет исходную строку.
    const parsedDate = new Date(review.date)
    const formattedDate = !isNaN(parsedDate.getTime())
        ? dateFormatter.format(parsedDate)
        : review.date

    return (
        // Заменили gap-[16px] на стандартный gap-4
        <article className="flex flex-col gap-4">
            <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                    
                    {/* 3. Заменили <img> на оптимизированный Image из Next.js и убрали квадратные скобки в размерах */}
                    <Image
                        src={review.user.avatar}
                        alt={review.user.name}
                        width={56}
                        height={56}
                        className="w-14 h-14 rounded-full object-cover"
                    />

                    {/* gap-[4px] -> gap-1 */}
                    <div className="flex flex-col gap-1">
                        {/* Заменил h4 на h3 (предполагая, что заголовок всей секции отзывов — это h2) */}
                        <h3 className="text-s-6 font-bold leading-[25px] tracking-[-0.02em] text-secondary-500">
                            {review.user.name}
                        </h3>
                        <span className="text-s-9 font-medium leading-[21px] tracking-[-0.02em] text-secondary-300">
                            {review.user.role}
                        </span>
                    </div>
                </div>

                {/* gap-[8px] -> gap-2 */}
                <div className="flex flex-col items-end gap-2">
                    {/* 4. Семантический тег <time> вместо безликого <span> */}
                    <time 
                        dateTime={review.date} 
                        className="text-s-9 font-medium leading-[21px] tracking-[-0.02em] text-secondary-300"
                    >
                        {formattedDate}
                    </time>
                    <Stars rating={review.rating} />
                </div>
            </div>

            {/* leading-[28px] -> leading-7 */}
            <p className="text-s-9 font-medium leading-7 tracking-[-0.02em] text-secondary-400">
                {review.comment}
            </p>
        </article>
    )
}