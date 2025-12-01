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
      skills: [
        { icon: <FaPython />, name: "Python", level: 90 },
        { icon: <FaNodeJs />, name: "Node.js", level: 85 },
        { icon: <SiExpress />, name: "Express.js", level: 85 },
        { icon: <SiFastapi />, name: "FastAPI", level: 80 },
      ],
    },
    {
      title: "AI & ML",
      skills: [
        { icon: <SiLangchain />, name: "LangChain", level: 85 },
        { icon: <FaDatabase />, name: "Vector DBs", level: 75 },
        { icon: <FaPython />, name: "RAG Systems", level: 80 },
      ],
    },
    {
      title: "Databases & ORMs",
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
      skills: [
        { icon: <FaDocker />, name: "Docker", level: 85 },
        { icon: <FaAws />, name: "AWS", level: 75 },
        { icon: <FaGitAlt />, name: "Git", level: 90 },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { icon: <FaReact />, name: "React", level: 85 },
        { icon: <SiTypescript />, name: "TypeScript", level: 80 },
        { icon: <FaJs />, name: "JavaScript", level: 90 },
      ],
    },
  ];

  return (
    <div className="max-w-[1200px] mx-auto my-20 px-6" id="skills">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="text-5xl font-bold primary mb-4">Technical Expertise</h2>
        <p className="text-gray-400 text-lg">
          My core technology stack and capabilities
        </p>
      </motion.div>

      {/* Main Panel Container */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        {/* Panel Container */}
        <div className="relative bg-gray-900 rounded-3xl border border-gray-700 shadow-2xl overflow-hidden">
          {/* Panel Header with tech pattern */}
          <div className="relative bg-gray-800 border-b border-gray-700 px-8 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-sm font-mono text-gray-400 ml-4">
                  ~/technical-skills
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                <span className="text-xs font-mono text-cyan-400">ACTIVE</span>
              </div>
            </div>
          </div>

          {/* Panel Content - Skills Grid */}
          <div className="p-8 md:p-12 bg-black/50">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.15 }}
                  className="space-y-4"
                >
                  {/* Category Title */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="h-1 w-8 bg-gradient-to-r from-cyan-500 to-violet-500 rounded"></div>
                    <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills in this category */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          delay: categoryIndex * 0.15 + skillIndex * 0.08,
                        }}
                        className="group"
                      >
                        {/* Skill Name and Icon */}
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className="text-xl text-cyan-400 group-hover:scale-125 group-hover:text-violet-400 transition-all duration-300">
                              {skill.icon}
                            </div>
                            <span className="text-gray-300 font-medium text-sm">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-xs font-mono text-gray-500">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="relative h-1.5 bg-gray-800/80 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={
                              isInView ? { width: `${skill.level}%` } : {}
                            }
                            transition={{
                              duration: 1,
                              delay:
                                categoryIndex * 0.15 + skillIndex * 0.08 + 0.3,
                              ease: "easeOut",
                            }}
                            className="h-full bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full shadow-lg shadow-cyan-500/50"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Panel Footer */}
          <div className="border-t border-gray-700 px-8 py-4 bg-gray-800">
            <div className="flex items-center justify-between text-xs font-mono text-gray-500">
              <span>Build: v2024.12</span>
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                All Systems Operational
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
