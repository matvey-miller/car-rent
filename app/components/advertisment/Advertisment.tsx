type AdvertismentProps = {
  number: 1 | 2;
};

export default function Advertisment({ number }: AdvertismentProps) {
  return (
    <aside className={`adv-bg adv-${number}`}>
      Advertisment
    </aside>
  );
}