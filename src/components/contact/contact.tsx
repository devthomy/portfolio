import Image from "next/image";
import React from "react";
import Button1 from "src/button/button1";

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-primary-grey p-24 flex justify-center items-center"
    >
      
        
        <div className="container p-6 bg-primary-dark mx-auto text-white flex justify-center rounded-lgshadow-lg rounded-lg transition-all  duration-500 "
        style={{
          boxShadow:
            "inset 0 0 50px rgba(0, 132, 255, 0.3), 0 0 50px rgba(0, 132, 255, 0.3)",
          outline: "2px solid rgba(65, 105, 225, 1)",
        }}
      >
          <div className="w-1/2">
            <h2 className="text-3xl font-alata font-bold mb-4">
              Contactez-moi
            </h2>
            <p className="mb-6 font-alata">
              N'hésitez pas à me contacter pour concrétiser votre projet !
              Ensemble, nous pouvons créer quelque chose d'exceptionnel et
              donner vie à vos idées. Je suis prêt à mettre mes compétences et
              mon expertise à votre service. Faisons équipe et accomplissons
              des résultats remarquables.
            </p>

            <form className="mb-6">
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 font-alata">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border text-primary-dark rounded-lg mt-1 font-alata"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-alata">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border text-primary-dark rounded-lg mt-1 font-alata"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2 font-alata">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-3 py-2 border text-primary-dark rounded-lg mt-1 font-alata"
                ></textarea>
              </div>
              <div className="flex justify-end transition-all duration-500">
                <Button1 href="/" text="Envoyez" />
              </div>
            </form>
          </div>
        </div>
      </div>

  );
};

export default Contact;
