import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";

const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, // Duration for the container
        staggerChildren: 0.4, // Stagger the items with a delay
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6, // Duration for each item
        ease: [0.68, -0.55, 0.27, 1.55], // Custom easing for smoothness
      },
    },
  };

  return (
    <motion.div
      className="bg-black max-w-[1200px] mx-auto p-5"
      id="work"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="pb-8">
        <p className="text-4xl mb-3 font-bold primary">Work</p>
        <p className="text-gray-400">Check out some of my recent work</p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <motion.div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative"
          variants={itemVariants}
        >
          <img
            src={proj1}
            alt="GameHub"
            className="w-full h-full object-cover"
          />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              GameHub
            </span>
            <div className="pt-8 text-center">
              <a
                href="https://game-hub-mu-peach.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative"
          variants={itemVariants}
        >
          <img
            src={proj2}
            alt="Youtube Clone"
            className="w-full h-full object-cover"
          />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              Youtube Clone
            </span>
            <div className="pt-8 text-center">
              <a
                href="https://youtube-clone-rho-eight.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Work;
