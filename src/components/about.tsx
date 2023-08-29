import Image from "next/image";
import React from "react";
import goIcon from "public/language-icon/go.png";
import cIcon from "public/language-icon/csharp.png";
import reactIcon from "public/language-icon/raect.png";
import tailwindcssIcon from "public/language-icon/tailwindcss.png";

const About = () => {
  const advantageOptions = [
    {
      icon: <Image src={goIcon} alt="Go Lang Icon" width={110} height={30} />,
    },
    {
      icon: <Image src={reactIcon} alt="React Icon" width={110} height={30} />,
    },
    {
      icon: <Image src={tailwindcssIcon} alt="TailwindCSS Icon" width={110} height={30} />,
    },
    {
      icon: <Image src={cIcon} alt="C# Icon" width={110} height={30} />,
    },
  ];

  return (
    <div id="langage" className="bg-primary-dark w-full h-full p-8 sm:p-12 lg:p-24">
    <div className="font-alata text-3xl sm:text-4xl text-white font-bold mb-4 text-center">
        Mes langues de prédilection
    </div>
    <div className="flex items-center justify-center">
    <div className="grid items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
        {advantageOptions.map((option, index) => (
            <div
                key={index}
                className="bg-white flex min-w-[250px] max-w-[330px] h-380 shadow-lg rounded-2xl m-2 sm:m-3 flex-col justify-center items-center p-6 transition-colors duration-300 hover:bg-primary-grey"
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
    </div>
</div>
  )
};

export default About;
