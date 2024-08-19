import React from "react";
import profileimg from "../assets/profile-pic.png";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black">
      <div className="col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]">
        <img src={profileimg} alt="profile" />
      </div>
      <div className="col-span-2 px-5 my-auto">
        <h1 className="text-white text-3xl sm:text-4xl lg:text-8xl font-extrabold">
          <span className="primary">I'm a</span>
          <br />
          <TypeAnimation
            sequence={["Full Stack Devloper", 1000, "Web Dev", 1000]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
          />
        </h1>

        <p className="text-white sm:text-lg my-6 lg:text-xl">
          "I'm a passionate full-stack developer focused on building innovative,
          user-friendly applications that drive growth and enhance digital
          experiences."
        </p>
        <div className="my-8">
          <a
            href="public\Jatin Bisht- resume.pdf"
            className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
