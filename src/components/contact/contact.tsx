import Image from "next/image";
import React from "react";
import goIcon from "public/language-icon/go.png";
import cIcon from "public/language-icon/csharp.png";
import reactIcon from "public/language-icon/raect.png";
import tailwindcssIcon from "public/language-icon/tailwindcss.png";
import Waves from "public/bottomwaves.svg"

const Contact = () => {
  const advantageOptions = [
    {
      icon: <Image src={goIcon} alt="Image" width={110} height={30} />,
    },
    {
      icon: <Image src={reactIcon} alt="Image" width={110} height={30} />,
    },
    {
      icon: <Image src={tailwindcssIcon} alt="Image" width={110} height={30} />,
    },
    {
      icon: <Image src={cIcon} alt="Image" width={110} height={30} />,
    },
  ];

  return (
    <div id="project" className="relative bg-primary-dark p-7 w-full">
      
       <div className="flex font-alata text-4xl text-white font-bold mb-4 justify-center relative">
        Mes projets
       </div>
      <div className="flex justify-center p-10">
        {advantageOptions.map((option, index) => (
          <div
            key={index}
            className="bg-white flex min-w-[250px] max-w-[330px] h-380 shadow-lg rounded-2xl m-5 flex-col justify-center items-center p-6 transition-colors duration-300 hover:bg-primary-grey"
            style={{
              boxShadow: "inset 0 0 50px rgba(255, 255, 255, 0.3), 0 0 50px rgba(255, 255, 255, 0.3)",
              outline: "2px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            <div className="w-12 h-12 rounded-full mb- flex justify-center items-center">
              {option.icon}
            </div>
          
          </div>
        ))}
        
      </div>
      <div className="z-0">
        <Image src={Waves} alt="Logo" className="w-full" />

      </div>
    </div>
  );
};

export default Contact;
