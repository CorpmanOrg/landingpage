import React from "react";
import Image from "next/image";
import { BackButton } from "./BackButton";

interface HeroSectionProps {
  name: string;
  description: string;
  logo: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ name, description, logo }) => {
  return (
    <section className="mx-auto w-4/5">
      <div className="mt-8 relative h-[250px] sm:h-[225px] md:h-[250px] rounded-t-[2rem] overflow-hidden">
        <Image
          src="/img/diego-hernandez-MSepzbKFz10-unsplash.jpg"
          alt="Cooperative background"
          fill
          className="object-cover"
          priority
        />

        {/* Deep Green Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-700/80 via-green-600/75 to-green-800/80"></div>

        {/* Back Button - Positioned in top left */}
        <div className="absolute top-4 left-4 z-20">
          <BackButton />
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 py-6">
          <div className="text-center text-white space-y-3">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">{name}</h1>
            <p className="text-sm sm:text-base md:text-lg text-green-100 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Logo positioned over the hero */}
      <div className="relative w-4/5 mx-auto lg:mb-8">
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-16 h-16 md:w-20 md:h-20 md:left-10 md:transform-none md:-top-18 lg:w-32 lg:h-32 lg:-top-16 rounded-full bg-white shadow-xl border-4 border-white z-10 overflow-hidden">
          <Image src={logo} alt={`${name} logo`} fill className="object-cover" />
        </div>
      </div>
    </section>
  );
};
