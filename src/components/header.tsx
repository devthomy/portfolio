'use client'
import React, { useEffect, useState, useMemo } from "react";
import Waves from "public/waves.svg";
import Button1 from "src/button/button1"
import Button2 from "src/button/button2"
import Arrow from "public/arrow.svg";
import Image from "next/image";

const Header = () => {
  const words = useMemo(() => ["developer", "19y", "from dijon"], []);
  const [text, setText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < words[currentWordIndex].length) {
          setText((prevText) => prevText + words[currentWordIndex][prevText.length]);
        } else {
          setIsDeleting(true);
        }
      } else {
        if (text.length > 0) {
          setText((prevText) => prevText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [text, isDeleting, currentWordIndex, words]);

  return (
    <div className="relative bg-primary-light-dark h-[83vh]">

      <div className="absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10">
        <div className="flex flex-col items-center">
          <div className="flex text-7xl text-white font-bold mb-4 p-24 justify-center relative">
            <div className="text-with-shadow text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-purple animate-gradient">
              Thomas
            </div>
            ,
            <div className="ml-2"> {text}</div>
          </div>
          <div className="text-xl font-alanta text-white text-center  justify-center relative mt-[-5rem]">
            Jeune développeur, passionné et toujours en étude,<br /> je vous propose mes services et partage mes réalisations avec vous.
          </div>

          <div className="flex justify-center mt-4">
            <Button1 href="/contact" text="Contactez-moi" />
            <Button2 href="/project" text="Voir les projets" />
          </div>
        </div>
      </div>





      <div className="z-0">
        <Image src={Waves} alt="Logo" className="w-full h-full" />
      </div>


      <a href="#langage" className="font-alata absolute bottom-7 left-0 w-full text-white text-center py-4 flex items-center justify-center group">
        <Image src={Arrow} alt="arrow" className="text-white w-6 h-6 transition-transform duration-300 transform group-hover:scale-110" />
        <span className="ml-2">Scroll pour mieux me connaître</span>
      </a>

    </div>

  );
};

export default Header;
