import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  const terminalLines = [
    { type: "command", text: "cat experience.log" },
    { type: "output", text: "" },
    { type: "output", text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" },
    { type: "output", text: "📍 Current Position" },
    { type: "output", text: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" },
    { type: "output", text: "" },
    { type: "output", text: "🏢 Company    : Probey Services" },
    { type: "output", text: "💼 Role       : Full Stack Developer" },
    { type: "output", text: "📅 Duration   : January 2025 - Present" },
    { type: "output", text: "📍 Location   : Noida, Uttar Pradesh" },
    { type: "output", text: "" },
    { type: "command", text: "cat responsibilities.txt" },
    { type: "output", text: "" },
    {
      type: "output",
      text: "✅ Building scalable backend APIs using Node.js & Python",
    },
    {
      type: "output",
      text: "✅ Integrating AI/ML models into production systems",
    },
    {
      type: "output",
      text: "✅ Implementing RAG pipelines for intelligent data retrieval",
    },
    {
      type: "output",
      text: "✅ Optimizing database queries and system architecture",
    },
    { type: "output", text: "✅ Collaborating with cross-functional teams" },
    { type: "output", text: "" },
    { type: "command", text: "echo $TECH_STACK" },
    {
      type: "output",
      text: "Node.js | Python | LangChain | MongoDB | Docker | AWS",
    },
  ];

  useEffect(() => {
    if (currentLineIndex < terminalLines.length) {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, terminalLines[currentLineIndex]]);
        setCurrentLineIndex((prev) => prev + 1);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex, terminalLines.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-[1200px] mx-auto my-12 px-6"
      id="experience"
    >
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold primary mb-3">Experience</h2>
        <p className="text-gray-400">My professional journey</p>
      </div>

      <div className="bg-gray-900 rounded-lg border border-gray-700 shadow-2xl overflow-hidden">
        {/* Terminal Header */}
        <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-700">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-gray-400 text-sm ml-2">
            jatin@portfolio ~ experience
          </span>
        </div>

        {/* Terminal Body */}
        <div className="p-6 font-mono text-sm bg-black/50 min-h-[400px]">
          {displayedLines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="mb-1"
            >
              {line.type === "command" ? (
                <div className="flex items-center gap-2">
                  <span className="text-green-400">➜</span>
                  <span className="text-cyan-400">~</span>
                  <span className="text-white">{line.text}</span>
                  <span className="inline-block w-2 h-4 bg-green-400 animate-pulse ml-1"></span>
                </div>
              ) : (
                <div className="text-gray-300 pl-6">{line.text}</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
