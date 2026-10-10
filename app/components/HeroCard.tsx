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

// Размеры машины из Figma (позиция задаётся в CSS)
const CAR_SIZE = {
  light: { width: 406, height: 116 },
  dark: { width: 340, height: 108 },
};

export function HeroCard({ title, description, buttonText, bgSrc, carSrc, variant = 'light' }: HeroCardProps) {
  const size = CAR_SIZE[variant];
  return (
    <article className={`hero-card hero-card--${variant}`}>
      <Image src={bgSrc} alt="" fill priority sizes="640px" className="hero-card__bg" />
      <div className="hero-card__content">
        <div className="hero-card__texts">
          <h2 className="hero-card__title">{title}</h2>
          <p className="hero-card__text">{description}</p>
        </div>
        <Button className="btn--ads" variant={variant === 'light' ? 'primary' : 'info'}>{buttonText}</Button>
      </div>
      <Image src={carSrc} alt="" width={size.width} height={size.height} className="hero-card__car" />
    </article>
  );
}
