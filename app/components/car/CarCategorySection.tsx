import Link from "next/link"

interface CarCategorySectionProps {
    title: string;
    className?: string;
    action?: {
        buttonLabel: string;
        href: string;
    }
    
}

export default function CarCategorySection({ title, className, action }: CarCategorySectionProps) {
    return (
        <div className={`cars-category-container ${className || ''}`}>
            <h2 className="text-s-8 text-secondary-300">{title}</h2>
            {action && (
                <Link href={action.href} className="text-primary-500">{action.buttonLabel}</Link>
            )}
        </div>
    )
}