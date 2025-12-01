import React, { useRef } from "react";
import profileimg from "../assets/profile-pic.jpeg";
import { motion, useInView } from "framer-motion";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center text-(--text-color) overflow-hidden relative py-20 md:py-0"
      id="hero"
    >
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 md:order-1 flex flex-col justify-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="block text-gray-300 text-2xl sm:text-3xl font-medium mb-2">
              Hello, I'm a
            </span>
            <span className="primary drop-shadow-lg">Full Stack Developer</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-gray-300 text-lg sm:text-xl max-w-lg mb-8 leading-relaxed"
          >
            Specializing in scalable backend systems, AI integration, and RAG
            architectures. I build intelligent solutions that power the next
            generation of applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="https://drive.google.com/file/d/1l1VpF8fvBMC2Sh6Vj5FJmNX4zNwOyk6L/view?usp=sharing"
              className="px-8 py-3 rounded-full bg-linear-to-r from-orange-500 to-pink-600 text-white font-semibold shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full border border-gray-600 text-gray-300 font-semibold hover:border-gray-400 hover:text-white transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center items-center relative"
        >
          <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px]">
            {/* Abstract Background Blob */}
            <div className="absolute inset-0 bg-linear-to-br from-orange-500/20 to-pink-600/20 rounded-full blur-3xl -z-10 animate-pulse"></div>

            <img
              src={profileimg}
              alt="Jatin Bisht"
              className="w-full h-full object-cover rounded-3xl shadow-2xl border border-gray-800/50 rotate-3 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
