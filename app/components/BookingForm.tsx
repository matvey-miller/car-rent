import Image from 'next/image';

interface BookingFormProps {
  title: string;
  type: 'pickup' | 'dropoff';
}

const fields = [
  { key: 'location', label: 'Locations', placeholder: 'Select your city', options: ['New York', 'Los Angeles'] },
  { key: 'date', label: 'Date', placeholder: 'Select your date', options: ['Today', 'Tomorrow'] },
  { key: 'time', label: 'Time', placeholder: 'Select your time', options: ['10:00 AM', '12:00 PM'] },
];

export function BookingForm({ title, type }: BookingFormProps) {
  const icon = type === 'pickup' ? '/icons/pick-up.svg' : '/icons/drop-off.svg';

  return (
    <fieldset className="booking-form">
      <legend className="booking-form__title">
        <Image src={icon} alt="" width={16} height={16} />
        {title}
      </legend>

      <div className="booking-form__fields">
        {fields.map((f, i) => {
          const id = `${type}-${f.key}`;
          return (
            <div className="booking-form__item" key={f.key}>
              {i > 0 && <span className="booking-form__divider" aria-hidden />}
              <div className="field">
                <label htmlFor={id} className="field__label">{f.label}</label>
                <select id={id} defaultValue="" className="field__select">
                  <option value="" disabled>{f.placeholder}</option>
                  {f.options.map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
            </div>
          );
        })}
      </div>
    </fieldset>
  );
}
