import React from "react";
import Header from "~/src/components/header";
import About from "~/src/components/about";

export default function Home() {
  return (
    <div className="bg-primary-grey">
      <Header />
      <div className="p-24">
        <About />
 
      </div>

    </div>
  );
}
