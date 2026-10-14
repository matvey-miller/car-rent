'use client'

interface FilterCheckboxProps {
    name: string;
    count: number;
    checked?: boolean;
}

export default function FilterCheckbox({ name, count, checked }: FilterCheckboxProps) {
    return (
        <label className="flex items-center gap-[8px] h-[24px] cursor-pointer">
            <input type="checkbox" className="filter-checkbox" defaultChecked={checked} />
            <span className="filter-text">
                {name}<span className="text-secondary-300 ml-[6px]">({count})</span>
            </span>
        </label>
    )
}