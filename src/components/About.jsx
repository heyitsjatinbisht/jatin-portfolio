import React from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="bg-black text-white max-w-[1200px] mx-auto my-12"
      id="about"
    >
      <div className="mt-4 md:mt-0 text-left flex flex-col py-6 md:py-0">
        <div className="my-auto mx-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-4xl font-bold mb-4 primary"
          >
            About Me
          </motion.h2>

          {[
            `I'm Jatin Bisht, a dedicated full-stack developer with a strong commitment to creating innovative, user-friendly applications. I recently completed my Master's in Computer Applications (MCA) from Dr. A.P.J. Abdul Kalam Technical University (AKTU), where I gained a deep understanding of software development, system design, and modern web technologies.`,
            `Throughout my academic journey and hands-on projects, I have honed my skills in key technologies such as JavaScript, TypeScript, React, Node.js, Express.js, and MongoDB. I thrive on solving complex problems and transforming ideas into functional, visually appealing digital solutions. Whether it's building responsive front-end interfaces or architecting efficient back-end systems, I focus on delivering clean, maintainable code that meets both business goals and user needs.`,
            `My experience includes working on diverse projects, from real-time applications to dynamic web platforms, where I emphasized the importance of performance, scalability, and user experience. I am particularly passionate about the intersection of technology and design, always striving to make applications that are not only powerful but also intuitive and enjoyable to use.`,
            `Beyond coding, I am committed to continuous learning and professional growth. I stay updated with the latest tech trends, experiment with new tools and frameworks, and contribute to the developer community. My long-term goal is to evolve as a developer, taking on more challenging projects, mentoring others, and making a meaningful impact in the tech industry.`,
            `In every project, I bring a blend of technical expertise, creative problem-solving, and a passion for innovation. I am excited to continue my journey in tech, creating solutions that drive growth and enhance digital experiences.`,
          ].map((text, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
              className="text-base lg:text-lg mb-4"
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
