"use client";

import { HeroProps } from '@/types';

export default function HeroSection({ title, description, ctas, image }: HeroProps) {
  return (
    <section
    className="
        w-full
        h-[60vh]
        flex items-center justify-center
        rounded-lg text-white mt-[65px]
      "
    style={{
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
    }}
    >
    <div
    className="
          w-full
          px-6
          md:px-[25%]
          max-w-full
          flex flex-col items-center text-center
        "
    >
    <h1 className="font-bold mb-4 uppercase text-2xl md:text-[32px]">{title}</h1>
    <p className="text-base md:text-xl mb-8">{description}</p>
    <div className="flex gap-2 flex-col md:flex-row justify-center w-full gap-4">
    {ctas.map((cta, i) => (
      <a
      key={i}
      href={cta.url}
      className="bg-white text-[#170038] font-semibold text-sm md:text-base py-3 px-6 rounded-lg uppercase"
      >
      {cta.name}
      </a>
    ))}
    </div>
    </div>
    </section>
  );
}