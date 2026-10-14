import { FilterOption } from "../../data/filters"
import FilterCheckbox from "./FilterCheckbox"

interface FilterSectionProps {
    title: string;
    options: FilterOption[];
}

export default function FilterSection({ title, options }: FilterSectionProps) {
    return (
        <section className="flex flex-col gap-[28px]">
            <h3 className="filter-title">{title}</h3>

            <div className="flex flex-col gap-[32px]">
                {options.map((option) => (
                    <FilterCheckbox key={option.id} name={option.name} count={option.count} checked={option.checked}/>
                ))}
            </div>
        </section>
    )
}