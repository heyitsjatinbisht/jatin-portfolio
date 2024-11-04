import React, { useRef } from "react";
import profileimg from "../assets/profile-pic.png";
import { TypeAnimation } from "react-type-animation";
import { motion, useInView } from "framer-motion";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-screen mx-auto py-8 bg-black"
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -100 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]"
      >
        <img src={profileimg} alt="profile" className="rounded-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 100 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="col-span-2 px-5 my-auto"
      >
        <h1 className="text-white text-3xl sm:text-4xl lg:text-8xl font-extrabold">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="primary"
          >
            I'm a
          </motion.span>
          <br />
          <TypeAnimation
            sequence={["Full Stack Developer", 1000, "Web Dev", 1000]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
          />
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="text-white sm:text-lg my-6 lg:text-xl"
        >
          "I'm a passionate full-stack developer focused on building innovative,
          user-friendly applications that drive growth and enhance digital
          experiences."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeInOut" }}
          className="my-8 flex flex-wrap gap-4"
        >
          <a
            href="https://drive.google.com/file/d/1l1VpF8fvBMC2Sh6Vj5FJmNX4zNwOyk6L/view?usp=sharing"
            className="px-6 py-3 w-full sm:w-auto rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 text-white transition duration-300 hover:bg-gradient-to-bl"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="px-6 py-3 w-full sm:w-auto rounded-xl border border-gray-400 text-white transition duration-300 hover:bg-gradient-to-br from-orange-500 to-pink-500 hover:border-none"
          >
            Contact
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
