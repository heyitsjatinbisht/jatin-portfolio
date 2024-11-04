import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Detect scrolling
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Animation variants for the two-bar icon
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const navbarVariants = {
    expanded: {
      height: "80px",
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    collapsed: {
      height: "20px",
      opacity: 0,
      transition: {
        duration: 0.6,
        when: "afterChildren",
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <AnimatePresence>
      {/* Full Navbar */}
      <motion.nav
        className="fixed w-full z-20 top-0 left-0 bg-black text-white"
        variants={navbarVariants}
        animate={isHovered || !hasScrolled ? "expanded" : "collapsed"}
        initial="collapsed"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold primary">
              Jatin Bisht
            </a>
          </div>

          {/* Menu Links for larger screens */}
          <motion.div
            variants={navbarVariants}
            initial="collapsed"
            animate="expanded"
            className="hidden md:flex space-x-8 items-center"
          >
            <motion.div
              variants={item}
              whileHover={{ scale: 1.1, color: "#ff0000" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href="/" className="text-xl font-semibold text-white">
                Home
              </a>
            </motion.div>
            <motion.div
              variants={item}
              whileHover={{ scale: 1.1, color: "#ff0000" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href="#about" className="text-xl font-semibold text-white">
                About
              </a>
            </motion.div>
            <motion.div
              variants={item}
              whileHover={{ scale: 1.1, color: "#ff0000" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href="#work" className="text-xl font-semibold text-white">
                Work
              </a>
            </motion.div>
            <motion.div
              variants={item}
              whileHover={{ scale: 1.1, color: "#ff0000" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href="#contact" className="text-xl font-semibold text-white">
                Contact
              </a>
            </motion.div>
          </motion.div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="hover:text-gray-400 focus:outline-none text-white"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Two-Bar Icon when Scrolled */}
      <motion.div
        className={`flex flex-col fixed gap-1.5 h-8 p-2 bg-black w-full items-center z-30 transition-opacity ${
          hasScrolled ? "opacity-100" : "opacity-0"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial="hidden"
        animate={hasScrolled && !isHovered ? "visible" : "hidden"}
        exit="exit"
        variants={containerVariants}
      >
        <motion.div
          className="inline-block w-[100px] h-[2px] rounded-lg bg-white"
          variants={itemVariants}
        ></motion.div>
        <motion.div
          className="inline-block w-[100px] h-[3px] rounded-lg bg-white"
          variants={itemVariants}
        ></motion.div>
      </motion.div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          key="mobile-menu"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-y-0 left-0 w-64 bg-[#171717] transform md:hidden text-white"
        >
          <ul className="text-xl flex flex-col font-semibold mt-12 p-4">
            <li>
              <a
                href="/"
                className="block py-2 px-3 hover:text-gray-400 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 px-3 hover:text-gray-400 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block py-2 px-3 hover:text-gray-400 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 px-3 hover:text-gray-400 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
