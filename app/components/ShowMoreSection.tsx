export default function ShowMoreSection() {
    return (
        <div className="flex justify-between items-center w-100% h-[44px] my-[32px]">
            <button className="btn absolute left-1/2 -translate-x-1/2 bg-primary-500 w-[156px] h-[44px] text-s-8 text-white text-semibold text-white">
                Show more car
            </button>
            <h3 className="text-s-9 text-secondary-300 text-medium ml-auto">120 Cars</h3>
        </div>
    )
}