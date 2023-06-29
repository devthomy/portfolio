import React from "react";

const Button2 = ({ href, text }: { href: string; text: string }) => {
  return (
    <a href={href} className="bg-transparent border border-white text-white font-alanta px-4 py-2 rounded-md mx-2 transition-all duration-300 hover:border-primary-blue hover:text-primary-blue shadow-white hover:scale-105">
      {text}
    </a>
  );
};

export default Button2;
