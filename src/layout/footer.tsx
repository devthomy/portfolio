import Image from "next/image";
import Link from "next/link";
import React from "react";
import twitter from "public/media/twitter.png";
import github from "public/media/github.png";
import discord from "public/media/discord.png";

const Footer = () => {
  return (
    <footer id="footer">
    <div className="bg-primary-dark items-center">
      <div className="bg-primary-dark max-w-4xl mx-auto flex flex-col items-center">
        <div className="px-5 text-white lg:px-0 grid grid-cols-1 lg:grid-cols-3 text-br-dark py-10 justify-center">


          <div className="flex flex-col py-6 lg:py-0 pl-2 lg:pl-0 mt-10 p-6">
            <ul className="mb-6 text-br-secondary mt-2">
              <li className="flex flex-col items-center text-br-primary">
                <p className="font-alata font-semibold">Me suivre</p>
                <div className="flex space-x-2 p-2 justify-center">
                  <Link className="hover:opacity-80" href="https://github.com/erozzzz" target="_blank">
                    <Image
                      src={github}
                      alt={"GitHub logo"}
                      width={24}
                      height={24}
                      className="transition-transform duration-300 transform hover:scale-110"
                    />
                  </Link>
                  <Link className="hover:opacity-80" href="https://twitter.com/__eroz" target="_blank">
                    <Image
                      src={twitter}
                      alt={"Twitter logo"}
                      width={24}
                      height={24}
                      className="transition-transform duration-300 transform hover:scale-110"
                    />
                  </Link>
                  <Link className="hover:opacity-80" href="https://discord.gg/UUbnFbu2hn" target="_blank">
                    <Image
                      src={discord}
                      alt={"Discord logo"}
                      width={24}
                      height={24}
                      className="transition-transform duration-300 transform hover:scale-110"
                    />
                  </Link>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex flex-col py-6 lg:py-0 pl-2 lg:pl-0 mt-10 p-6">
            <ul className="mb-6 text-br-secondary mt-2">
              <li className="flex flex-col text-br-primary text-center">
                <p className="font-alata font-semibold">À propos</p>
                <Link
                  className="text-br-dark text-base hover:text-br-primary mt-1 transition-transform duration-300 transform hover:scale-105"
                  href="/solutions"
                >
                  Politique de confidentialité
                </Link>
                <Link
                  className="text-br-dark text-base hover:text-br-primary mt-1 transition-transform duration-300 transform hover:scale-105"
                  href="/blog"
                >
                  Conditions générales
                </Link>
              </li>
            </ul>
          </div>







          <div className="flex flex-col py-6 lg:py-0 pl-24 lg:pl-0 mt-10">
            <ul className="mb-6 pl-16 text-br-secondary mt-2">
              <li className="mb-2 flex flex-col text-center text-br-primary">
                <p className="font-alata font-semibold">Contact</p>
                <a
                  className="text-br-dark text-base hover:text-br-primary mt-1 transition-transform duration-300 transform hover:scale-105 hover:text-primary-purple"
                  href="mailto:thomaseroz@icloud.com"
                >
                  thomaseroz@icloud.com
                </a>
              </li>
            </ul>
          </div>


        </div>


      </div>
      <div className="bg-primary-grey flex p-4">
        <div className="flex w-full flex-col text-white lg:flex-row justify-center text-br-lgreen pt-2 pb-2 text-sm">
          <p className="font-alata">
            &copy; {new Date().getFullYear()} © Copyright Thomas BAIL,
            Tous les droits sont réservés
          </p>
        </div>
      </div>
    </div>
    </footer >
  );
};

export default Footer;
