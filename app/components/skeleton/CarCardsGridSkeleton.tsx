import CarCardSkeleton from "./CarCardSkeleton"

interface CarCardsGridSkeletonProps {
    count: number;
    columns?: 3 | 4;
}

export default function CarCardsGridSkeleton({
  count,
  columns = 3,
}: CarCardsGridSkeletonProps) {
  const gridClass = columns === 4 ? "car-cards-container-wide" : ""

  return (
    <div className={`car-cards-container ${gridClass}`}>
      {Array.from({ length: count }, (_, i) => (
        <CarCardSkeleton key={i} />
      ))}
    </div>
  )
}