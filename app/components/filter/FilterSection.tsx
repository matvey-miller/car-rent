"use client"
import { Checkboxes } from "../../data/filters"
import FilterCheckbox from "../filter/FilterCheckbox";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { categoryUrl } from "../../lib/categoryUrl";


interface FilterSectionProps {
    title: string;
    type: string;
    checkboxes: Checkboxes[];
}

export default function FilterSection ({title, type, checkboxes} : FilterSectionProps) {
    const router = useRouter()
    const searchParams = useSearchParams()

    const [selected, setSelected] = useState(searchParams.getAll(type))

    useEffect( () =>
    {setSelected(searchParams.getAll(type))},
    [searchParams])
    

    function toggle(currentFilter : string) {
        const updatedFilter = selected.includes(currentFilter)
            ? selected.filter((filter) => filter !== currentFilter)
            : [...selected, currentFilter]

        setSelected(updatedFilter)

        //create a new URL
        const params = new URLSearchParams(searchParams.toString())
        params.delete(type)
        updatedFilter.forEach((filter) => (params.append(type, filter)))
        params.delete("limit")

        router.push(categoryUrl(params), {scroll: false})
        
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
