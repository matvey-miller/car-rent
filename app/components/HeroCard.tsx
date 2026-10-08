import Image from 'next/image';
import { Button } from './Button';

interface HeroCardProps {
  title: string;
  description: string;
  buttonText: string;
  bgSrc: string;   // фон рекламы (ads-1 / ads-2)
  carSrc: string;  // машина поверх фона
  variant?: 'light' | 'dark';
}

export function HeroCard({ title, description, buttonText, bgSrc, carSrc, variant = 'light' }: HeroCardProps) {
  return (
    <article className={`hero-card hero-card--${variant}`}>
      <Image src={bgSrc} alt="" fill priority sizes="640px" className="hero-card__bg" />
      <div className="hero-card__content">
        <h2 className="hero-card__title">{title}</h2>
        <p className="hero-card__text">{description}</p>
        <Button>{buttonText}</Button>
      </div>
      <Image src={carSrc} alt="" width={406} height={116} className="hero-card__car" />
    </article>
  );
}
