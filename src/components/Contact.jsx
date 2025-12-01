import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.5, 0.05, 0.1, 0.3],
      },
    },
  };

  return (
    <motion.div
      className="max-w-[1200px] mx-auto py-16 px-6"
      id="contact"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold primary mb-3">Get In Touch</h2>
        <p className="text-gray-400">Let's discuss your next project</p>
      </div>

      <div className="max-w-[800px] mx-auto">
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-cyan-500/30 transition-all duration-300">
          <form action="https://getform.io/f/avrepqma" method="POST">
            <div className="grid grid-cols-1 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="bg-gray-950 w-full px-4 py-3 text-gray-200 placeholder-gray-500 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="bg-gray-950 w-full px-4 py-3 text-gray-200 placeholder-gray-500 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                className="bg-gray-950 w-full px-4 py-3 text-gray-200 placeholder-gray-500 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                rows="6"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 px-6 font-semibold text-white bg-linear-to-r from-cyan-500 to-violet-500 rounded-lg hover:from-cyan-600 hover:to-violet-600 transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-8 text-center text-gray-400">
          <p>Or reach me directly at</p>
          <a
            href="mailto:bishtjatin477@gmail.com"
            className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
          >
            bishtjatin477@gmail.com
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
