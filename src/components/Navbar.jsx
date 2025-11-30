import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Detect scrolling
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 400);

      // Detect active section
      const sections = [
        "hero",
        "skills",
        "about",
        "experience",
        "work",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarVariants = {
    expanded: {
      height: "80px",
      opacity: 1,
      transition: { duration: 0.6 },
    },
    collapsed: {
      height: "20px",
      opacity: 0,
      transition: { duration: 0.6 },
    },
  };

  const navItems = [
    { id: "hero", label: "Home", icon: FaHome },
    { id: "about", label: "About", icon: FaUser },
    { id: "work", label: "Work", icon: FaBriefcase },
    { id: "contact", label: "Contact", icon: FaEnvelope },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <AnimatePresence>
        <motion.nav
          className="fixed w-full z-20 top-0 left-0 bg-black text-white hidden md:block"
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

            {/* Desktop Menu Links */}
            <div className="flex space-x-8 items-center">
              <motion.a
                href="/"
                whileHover={{ scale: 1.1 }}
                className="text-xl font-semibold text-white hover:text-cyan-400 transition-colors"
              >
                Home
              </motion.a>
              <motion.a
                href="#about"
                whileHover={{ scale: 1.1 }}
                className="text-xl font-semibold text-white hover:text-cyan-400 transition-colors"
              >
                About
              </motion.a>
              <motion.a
                href="#work"
                whileHover={{ scale: 1.1 }}
                className="text-xl font-semibold text-white hover:text-cyan-400 transition-colors"
              >
                Work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.1 }}
                className="text-xl font-semibold text-white hover:text-cyan-400 transition-colors"
              >
                Contact
              </motion.a>
            </div>
          </div>
        </motion.nav>

        {/* Two-Bar Icon when Scrolled (Desktop) */}
        <motion.div
          className={`hidden md:flex flex-col fixed gap-1.5 h-8 p-2 bg-black w-full items-center z-30 transition-opacity ${
            hasScrolled ? "opacity-100" : "opacity-0"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="inline-block w-[100px] h-[2px] rounded-lg bg-white"></div>
          <div className="inline-block w-[100px] h-[3px] rounded-lg bg-white"></div>
        </motion.div>
      </AnimatePresence>

      {/* Mobile Bottom Navigation */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-lg border-t border-gray-800"
      >
        <div className="flex justify-around items-center h-16 px-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-all duration-300 ${
                activeSection === item.id
                  ? "text-cyan-400"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              <item.icon className="text-xl mb-1" />
              <span className="text-xs font-medium">{item.label}</span>
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 h-1 w-12 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-t-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
