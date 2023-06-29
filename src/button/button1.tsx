import React from "react";

const Button1 = ({ href, text }: { href: string; text: string }) => {
  return (
    <a
      href={href}
      className="bg-primary-blue text-white font-alanta px-4 py-2 rounded-md mx-2 transition-all hover:bg-white hover:text-primary-blue hover:border-primary-blue hover:scale-105 duration-300 shadow-blue"
    >
      {text}
    </a>
  );
};

export default Button1;
