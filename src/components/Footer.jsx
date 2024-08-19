import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1200px] p-6 sm:p-12 flex flex-col sm:flex-row justify-between items-center mx-auto bg-black text-white">
      <span className="primary text-xl font-bold mb-4 sm:mb-0">J. BISHT</span>

      <div className="flex items-center space-x-6 mb-4 sm:mb-0">
        <a
          href="https://www.linkedin.com/in/jatin-bisht-b40a301bb/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-blue-400 transition duration-300"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/heyitsjatinbisht"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition duration-300"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.instagram.com/jsbisht_21/?next=%2F"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-pink-500 transition duration-300"
        >
          <FaInstagram size={24} />
        </a>
      </div>

      <p className="text-gray-300 text-sm text-center sm:text-right">
        bishtjatin477@gmail.com <br /> #webDev2024
      </p>
    </div>
  );
};

export default Footer;
