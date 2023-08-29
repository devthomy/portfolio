import Image from "next/image";
import React from "react";
import ResselAlcool from "public/banner/alcool_banner.png";
import Mathias from "public/banner/mathias_banner.png";
import Button1 from "src/button/button1";

const Btssio = () => {
  const advantageOptions = [
    {
      title: "/",
      description:
        "on build",
      image: Mathias,
      buttonHref: "https://discord.gg/6QnaX2vK5P",
    },
    {
      title: "/",
      description:
        "on build",
      image: Mathias,
      buttonHref: "https://discord.gg/6QnaX2vK5P",
    },
  ];

  return (
    <div id="btssio" className="flex justify-center p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {advantageOptions.map((option, index) => (
          <div
            key={index}
            className="bg-primary-dark flex max-h-[475px] md:max-w-[800px] h-auto shadow-lg rounded-2xl m-2 md:m-5 flex-col items-center p-4 md:p-6 transition-all duration-500"
            style={{
              boxShadow:
                "inset 0 0 50px rgba(0, 132, 255, 0.3), 0 0 50px rgba(0, 132, 255, 0.3)",
              outline: "2px solid rgba(65, 105, 225, 1)",
            }}
          >
            <div>
              <Image
                src={option.image}
                alt="Image"
                className="w-full h-60 md:w-200 md:h-60 rounded-lg mb-4 flex justify-center items-center transition-all duration-500"
              />
            </div>
            <h2 className="font-alata text-2xl md:text-4xl text-white font-bold mb-4 justify-left relative transition-all duration-500">{option.title}</h2>
            <p className="text-gray-400 pb-6 transition-all duration-500">{option.description}</p>
            <div className="flex justify-end transition-all duration-500 w-full">
              <Button1 href={option.buttonHref} text="Voir plus" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Btssio;
