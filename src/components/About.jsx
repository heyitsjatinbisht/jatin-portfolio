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
      className="max-w-[1200px] mx-auto my-12"
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
            `I'm Jatin Bisht, a passionate Backend Developer and AI Engineer dedicated to building robust, scalable systems. With a strong foundation in Computer Applications (MCA), I specialize in architecting efficient server-side logic and integrating cutting-edge AI solutions into modern web applications.`,
            `My expertise lies in Python, Node.js, and cloud-native technologies. I have a deep interest in Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG) systems, constantly exploring ways to make AI more accessible and practical for real-world business needs. I thrive on solving complex architectural challenges and optimizing database performance.`,
            `I have hands-on experience building RESTful APIs, microservices, and AI-powered tools. Whether it's fine-tuning a model, designing a vector database schema, or deploying containerized applications using Docker and Kubernetes, I focus on delivering high-performance, maintainable code.`,
            `Beyond the code, I am an active learner in the AI community, keeping up with the rapid advancements in Generative AI and machine learning. My goal is to bridge the gap between traditional software engineering and the evolving world of artificial intelligence.`,
            `I am always ready to take on challenging projects that push the boundaries of what's possible on the web. Let's build intelligent systems that drive the future.`,
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
              className="text-base lg:text-lg mb-4 text-gray-300"
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
