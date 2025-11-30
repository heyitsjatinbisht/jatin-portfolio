import React from "react";
import {
  FaPython,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaReact,
  FaJs,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiLangchain,
  SiTypescript,
  SiMysql,
  SiRedis,
  SiExpress,
  SiFastapi,
  SiPrisma,
  SiMongoose,
} from "react-icons/si";
import { motion, useInView } from "framer-motion";

const Skills = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const skillCategories = [
    {
      title: "Backend & APIs",
      icon: "🚀",
      skills: [
        { icon: <FaPython />, name: "Python", level: 90 },
        { icon: <FaNodeJs />, name: "Node.js", level: 85 },
        { icon: <SiExpress />, name: "Express.js", level: 85 },
        { icon: <SiFastapi />, name: "FastAPI", level: 80 },
      ],
    },
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      skills: [
        { icon: <SiLangchain />, name: "LangChain", level: 85 },
        { icon: <FaDatabase />, name: "Vector DBs", level: 75 },
        { icon: <FaPython />, name: "RAG Systems", level: 80 },
      ],
    },
    {
      title: "Databases & ORMs",
      icon: "🗄️",
      skills: [
        { icon: <SiMongodb />, name: "MongoDB", level: 85 },
        { icon: <SiMysql />, name: "MySQL", level: 80 },
        { icon: <SiPrisma />, name: "Prisma", level: 75 },
        { icon: <SiMongoose />, name: "Mongoose", level: 85 },
        { icon: <SiRedis />, name: "Redis", level: 75 },
      ],
    },
    {
      title: "DevOps & Cloud",
      icon: "☁️",
      skills: [
        { icon: <FaDocker />, name: "Docker", level: 85 },
        { icon: <FaAws />, name: "AWS", level: 75 },
        { icon: <FaGitAlt />, name: "Git", level: 90 },
      ],
    },
    {
      title: "Frontend",
      icon: "💻",
      skills: [
        { icon: <FaReact />, name: "React", level: 85 },
        { icon: <SiTypescript />, name: "TypeScript", level: 80 },
        { icon: <FaJs />, name: "JavaScript", level: 90 },
      ],
    },
  ];

  return (
    <div className="max-w-[1200px] mx-auto my-16 px-6" id="skills">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold primary mb-3">Technical Expertise</h2>
        <p className="text-gray-400">My core technology stack</p>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-800">
              <span className="text-3xl">{category.icon}</span>
              <h3 className="text-xl font-bold text-gray-200">
                {category.title}
              </h3>
            </div>

            {/* Skills List */}
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    delay: categoryIndex * 0.1 + skillIndex * 0.05,
                  }}
                  className="group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-2xl text-cyan-400 group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </div>
                    <span className="text-gray-300 font-medium flex-1">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      {skill.level}%
                    </span>
                  </div>
                  {/* Progress Bar */}
                  <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{
                        duration: 1,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                      }}
                      className="h-full bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
