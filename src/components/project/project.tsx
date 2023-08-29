import Image from "next/image";
import React from "react";
import ResselAlcool from "public/banner/alcool_banner.png";
import Mathias from "public/banner/mathias_banner.png";
import Smilifood from "public/banner/smili_banner.png";
import Button1 from "src/button/button1";

const Project = () => {
  const advantageOptions = [
    {
      title: "Ressel Alcool",
      description:
        "Création de différents moniteurs utilisé sur discord, qui avec des filtres précis indiquent si de nouveaux produits sont disponibles.",
      image: ResselAlcool,
      buttonHref: "https://discord.gg/6QnaX2vK5P",
      openNewTab: true, 
    },
    {
      title: "Smili food",
      description:
        "Retrouvez toutes les parties que j'ai réalisés pour Smili Food sur leur site web (pages, footer, components, etc)",
      image: Smilifood,
      buttonHref: "https://www.smilifood.com/reservation",
      openNewTab: true, 
    },
    {
      title: "Étude 2022/2024",
      description:
        "Retrouvez tous les projets que j'ai réalisés pendant mes deux années d'études en BTS SIO au sein du Lycée Mathias durant les années 2022/2024",
      image: Mathias,
      buttonHref: "#btssio",
      openNewTab: false, 
    },
    
  ];

  return (
    <div className="flex justify-center p-4">
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
            <div className="w-full flex">
              <Image
                src={option.image}
                alt="Image"
                className="w-full md:w-200 h-60 rounded-lg mb-4 flex justify-center items-center transition-all duration-500"
              />
            </div>
            <h2 className="font-alata text-2xl md:text-4xl text-white font-bold mb-4 relative transition-all duration-500 text-left">{option.title}</h2>
            <p className="text-gray-400 pb-6 transition-all duration-500">{option.description}</p>
            <div className="flex justify-end transition-all duration-500 w-full">
              <Button1
                href={option.buttonHref}
                text="Voir plus"
                target={option.openNewTab ? "_blank" : ""}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
