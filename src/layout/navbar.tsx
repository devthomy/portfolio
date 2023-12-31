import React from "react";
import Image from "next/image";
import Logo from "public/logo.png";

const Navbar = () => {
  return (
    <footer className="bg-primary-dark py-11 text-white z-10 relative">
      <div className="absolute left-24 top-3 ml-8 mt-8">
        <a href="/">
          <Image
            src={Logo}
            alt="Logo"
            className="w-16 h-16 hidden sm:block"
          />
        </a>
      </div>

      <div className="flex items-center justify-center backdrop:space-x-7 sm:space-x-16 flex-wrap">
        <a href="/" className="navbar-link relative text-lg py-2 px-3 m-2">
          Accueil
          <div className="navbar-link-hover"></div>
        </a>
        <a href="project" className="navbar-link relative text-lg py-2 px-3 m-2">
          Projets
          <div className="navbar-link-hover"></div>
        </a>
        <a href="contact" className="navbar-link relative text-lg py-2 px-3 m-2">
          Contact
          <div className="navbar-link-hover"></div>
        </a>
      </div>


    </footer>
  );
};

export default Navbar;
