import Image from "next/image";
import Link from "next/link";
import React from "react";
import github from "public/media/github.png";
import twitter from "public/media/twitter.png";
import discord from "public/media/discord.png";

const Contact = () => {
  return (
    <div className="bg-primary-grey h-[84vh] sm:h-[55vh] md:h-[60vh] flex justify-center items-center flex-col relative">
    

      <div className="flex items-center font-bold z-20">
        <h1 className="text-4xl text-bold text-white">/&gt;</h1>
        <a
          className="text-4xl text-bold text-white hover:text-primary-blue p-1 transform transition-transform duration-300 hover:-translate-y-1"
          href="mailto:thomaseroz@icloud.com"
        >
          thomaseroz@icloud.com
        </a>
      </div>

      <div className="flex space-x-2 p-2 justify-center z-20">
        <Link className="hover:opacity-80" href="https://github.com/erozzzz" target="_blank">
          <Image
            src={github}
            alt={"GitHub logo"}
            width={34}
            height={34}
            className="transition-transform duration-300 transform hover:scale-110"
          />
        </Link>
        <Link className="hover:opacity-80" href="https://twitter.com/thomy_dev" target="_blank">
          <Image
            src={twitter}
            alt={"Twitter logo"}
            width={34}
            height={34}
            className="transition-transform duration-300 transform hover:scale-110"
          />
        </Link>
        <Link className="hover:opacity-80" href="https://discord.gg/UUbnFbu2hn" target="_blank">
          <Image
            src={discord}
            alt={"Discord logo"}
            width={34}
            height={34}
            className="transition-transform duration-300 transform hover:scale-110"
          />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
