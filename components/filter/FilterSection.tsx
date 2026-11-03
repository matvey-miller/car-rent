"use client"
import { Checkboxes } from "../../data/filters"
import FilterCheckbox from "./FilterCheckbox";
import { useRouter, useSearchParams } from "next/navigation";
import { categoryUrl } from "../../lib/utils";
import { useOptimistic, startTransition } from "react";


interface FilterSectionProps {
    title: string;
    type: string;
    checkboxes: Checkboxes[];
}

export default function FilterSection ({title, type, checkboxes} : FilterSectionProps) {
    const router = useRouter()
    const searchParams = useSearchParams()
    const currentFilters = searchParams.getAll(type)
    //хук для optimistic ui прогрузки интерфейса не ожидая фетч (работает по предсказанию данных, которые мы сами предсказываем)
    const [selected, setSelected] = useOptimistic(currentFilters)
    

    function toggle(currentFilter : string) {
        const updatedFilter = currentFilters.includes(currentFilter)
            ? currentFilters.filter((filter) => filter !== currentFilter)
            : [...currentFilters, currentFilter]

        //create a new URL
        const params = new URLSearchParams(searchParams.toString())
        params.delete(type)
        updatedFilter.forEach((filter) => (params.append(type, filter)))
        params.delete("limit")

        startTransition(() => {
            setSelected(updatedFilter)
            router.push(categoryUrl(params), {scroll: false})
        })
        
        
    }

    return (
        <section className="flex flex-col gap-[28px]">
            <h3 className="filter-title">{title}</h3>

            <div className="flex flex-col gap-[32px]">
                {checkboxes.map((checkbox) => (
                    <FilterCheckbox
                        key={checkbox.id}
                        name={checkbox.name}
                        count={checkbox.count}
                        checked={selected.includes(checkbox.value)}
                        onChange={() => toggle(checkbox.value)}
                    />
                ))}
                
            </div>
        </section>
    )
}
