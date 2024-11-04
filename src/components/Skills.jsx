import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
import { motion, useInView } from "framer-motion";

const Skills = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="border border-gray-600 bg-black text-gray-400 md:h-auto max-w-[1200px] mx-auto grid grid-cols-2 sm:grid-cols-3 md:flex md:justify-between md:items-center p-6 gap-6"
    >
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="text-primary text-2xl md:text-4xl font-bold m-4 md:m-0 md:w-auto md:text-left text-center col-span-2 sm:col-span-3"
      >
        My <br className="hidden md:block" /> Tech{" "}
        <br className="hidden md:block" /> Stack
      </motion.h2>

      {[
        { img: html, name: "HTML" },
        { img: css, name: "CSS" },
        { img: javascript, name: "JavaScript" },
        { img: react, name: "React" },
        { img: tailwind, name: "Tailwind" },
      ].map((tech, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="flex flex-col items-center m-4 sm:my-0 w-[60px] sm:w-[80px] md:w-[100px]"
        >
          <img src={tech.img} alt={tech.name} width={100} height={100} />
          <p className="mt-2 text-center text-gray-300">{tech.name}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Skills;
