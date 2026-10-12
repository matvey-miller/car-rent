import RentalDetailItem from "./RentalDetailItem";

interface RentalDetailsFormProps {
  title: string;
  number: number;
}

export default function RentalDetailsForm({ title, number }: RentalDetailsFormProps) {
  return (
    <form className="r-details-form px-[48px] py-[24px] relative z-10">
      <div className="flex items-center gap-[8px] h-[24px] mb-[12px]">
        <img src={`/rental-details/circle${number}.svg`} alt="" className="w-[16px] h-[16px]" />
        <h3 className="text-[16px] font-semibold leading-[150%] tracking-[-0.02em]">{title}</h3>
      </div>

      <div className="flex gap-[24px]">
        <RentalDetailItem headline="Locations" selectedItem="city" />
        <div className="r-details-divider" aria-hidden="true" />
        <RentalDetailItem headline="Date" selectedItem="date" />
        <div className="r-details-divider" aria-hidden="true" />
        <RentalDetailItem headline="Time" selectedItem="time" />
      </div>
    </form>
  );
}