interface CarCategorySectionProps {
    title: string;
    className?: string;
    buttonLabel?: string;
}

export default function CarCategorySection({ title, className, buttonLabel }: CarCategorySectionProps) {
    return (
        <div className={`cars-category-container ${className || ''}`}>
                    <h2 className="text-s-8 text-secondary-300">{title}</h2>
                    {buttonLabel && (
                        <button className="text-primary-500">{buttonLabel}</button>
                    )}
                </div>
    )
}