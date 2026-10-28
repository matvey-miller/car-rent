import { typeFilters, capacityFilters } from "../../data/filters"
import FilterSection from "./FilterSection"
import FilterPrice from "./FilterPrice"

export default function FilterSidebar() {
    return (
        <aside className="w-[360px] min-h-[1050px] flex flex-col gap-[56px] bg-white border-r border-[#F3F5F7] px-[32px] py-[32px]">
            <FilterSection title="T Y P E" type="type" checkboxes={typeFilters}/>
            <FilterSection title="C A P A C I T Y" type="capacity" checkboxes={capacityFilters}/>
            <FilterPrice/>
        </aside>
    )
}