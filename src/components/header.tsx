'use client'
import React, { useEffect, useState, useMemo } from "react";
import Waves from "public/waves.svg";
import Button1 from "src/button/button1"
import Button2 from "src/button/button2"
import Arrow from "public/arrow.svg";
import Image from "next/image";
import TypewriterComponent from "typewriter-effect";


const Header = () => {


  return (
    <div className="relative bg-primary-light-dark h-[84vh] sm:h-[90vh] md:h-[85vh]">

      <div className="absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 sm:top-1/2 md:top-52">
        <div className="flex flex-col items-center">
          <div className="flex flex-col sm:flex-row text-7xl text-white font-bold mb-4 p-24 justify-center relative sm:text-6xl md:text-6xl">
            <div className="text-with-shadow text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-purple animate-gradient mb-2 sm:mb-0 sm:mr-2">
              Thomas,
            </div>
            <div className="text-transparent bg-clip-text text-white">
              <TypewriterComponent
                options={{
                  strings: [
                    "19y",
                    "BTS SIO",
                    "Dijon"
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
          <div className="text-xl font-alanta text-white text-center justify-center  relative mt-[-5rem] sm:mt-[-4rem] md:mt-[-3rem] lg:mt-[-2rem] sm:text-lg md:text-xl lg:text-2xl">
            Jeune développeur, passionné et toujours dans ses études,
            <br className="hidden sm:hidden md:inline lg:inline" />
            <span className="hidden sm:inline md:inline lg:hidden"> je vous propose mes services et partage mes réalisations avec vous.</span>
            <span className="inline sm:hidden md:hidden lg:inline"> je vous propose mes services et partage mes réalisations avec vous.</span>
          </div>





          <div className="flex justify-center mt-4 sm:flex-wrap">
            <Button1 href="/contact" text="Contactez-moi" />
            <Button2 href="/project" text="Voir les projets" />
          </div>
        </div>
      </div>

      <div className="z-0">
        <Image src={Waves} alt="Logo" className="w-full h-full" />
      </div>

      <a href="#langage" className="font-alata absolute bottom-7 left-0 w-full text-white text-center py-4 flex items-center justify-center group sm:text-sm md:text-base">
        <Image src={Arrow} alt="arrow" className="text-white w-6 h-6 transition-transform duration-300 transform group-hover:scale-110 sm:w-5 sm:h-5" />
        <span className="ml-2">Scroll pour mieux me connaître</span>
      </a>

    </div>
  );
};

export default Header;
