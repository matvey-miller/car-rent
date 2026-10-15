'use client'

import { useRouter, useSearchParams } from "next/navigation"
import { FilterOption } from "../../data/filters"
import FilterCheckbox from "./FilterCheckbox"
import { categoryUrl } from "../../lib/categoryUrl"

interface FilterSectionProps {
    title: string;
    param: string;
    options: FilterOption[];
}

export default function FilterSection({ title, param, options }: FilterSectionProps) {
    const router = useRouter()
    const searchParams = useSearchParams()

    const selected = searchParams.getAll(param)

    function toggle(name: string) {
        const next = selected.includes(name)
            ? selected.filter((value) => value !== name)
            : [...selected, name]

        const params = new URLSearchParams(searchParams.toString())
        params.delete(param)
        next.forEach((value) => params.append(param, value))
        params.delete("limit")

        router.push(categoryUrl(params), { scroll: false })
    }

    return (
        <section className="flex flex-col gap-[28px]">
            <h3 className="filter-title">{title}</h3>

            <div className="flex flex-col gap-[32px]">
                {options.map((option) => (
                    <FilterCheckbox
                        key={option.id}
                        name={option.name}
                        count={option.count}
                        checked={selected.includes(option.value)}
                        onChange={() => toggle(option.value)}
                    />
                ))}
            </div>
        </section>
    )
}