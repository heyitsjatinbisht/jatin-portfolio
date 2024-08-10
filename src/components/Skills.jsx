import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";

const Skills = () => {
  return (
    <div className="border border-gray-600 bg-black text-gray-400 md:h-auto max-w-[1200px] mx-auto grid grid-cols-2 sm:grid-cols-3 md:flex md:justify-between md:items-center p-6 gap-6">
      <h2 className="text-primary text-2xl md:text-4xl font-bold m-4 md:m-0 md:w-auto md:text-left text-center col-span-2 sm:col-span-3">
        My <br className="hidden md:block" /> Tech{" "}
        <br className="hidden md:block" /> Stack
      </h2>

      {[
        { img: html, name: "HTML" },
        { img: css, name: "CSS" },
        { img: javascript, name: "JavaScript" },
        { img: react, name: "React" },
        { img: tailwind, name: "Tailwind" },
      ].map((tech, index) => (
        <div
          key={index}
          className="flex flex-col items-center m-4 sm:my-0 w-[60px] sm:w-[80px] md:w-[100px] hover:scale-110 transition-transform duration-300 ease-out"
        >
          <img src={tech.img} alt={tech.name} width={100} height={100} />
          <p className="mt-2 text-center text-gray-300">{tech.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Skills;
