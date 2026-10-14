import { typeFilters, capacityFilters } from "../../data/filters"
import FilterSection from "./FilterSection"
import FilterPrice from "./FilterPrice"

export default function FilterSidebar() {
    return (
        <aside className="w-[360px] min-h-[1050px] p-[32px] flex flex-col gap-[56px] bg-white border-r border-[#F3F5F7]">
            <FilterSection title="T Y P E" options={typeFilters}/>
            <FilterSection title="C A P A C I T Y" options={capacityFilters}/>
            <FilterPrice/>
        </aside>
    )
}