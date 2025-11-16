"use client";

import { motion } from "framer-motion";
import { projects } from "../constant/data";
import useInViewAnimation from "../custom-hook/context/useInViewAnimation";

export default function Projects() {
  const { ref, controls } = useInViewAnimation({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <div id="projects">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={controls}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mt-20 w-full max-w-[70rem] mx-auto px-4 sm:px-8 scroll-mt-28"
      >
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Projects</h2>
        </div>

        {/* Grid of cards */}
        <div className="grid grid-cols-1  gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              className="group flex flex-col bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
            >
              {/* Image */}
              <div className="flex justify-center mb-5">
                <img
                  src={project.thumbnail}
                  alt={project.name}
                 
                  className="w-24 h-24 object-contain rounded-md group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Name */}
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                {project.name}
              </h3>

              {/* Description as bullet‑style */}
              <ul className="text-sm text-gray-700 leading-relaxed space-y-1 mb-4">
                {project.description.split("\n").map((line, i) => (
                  <li key={i} className="flex items-start">
                    <span className="whitespace-pre-line">{line}</span>
                  </li>
                ))}
              </ul>

              {/* Footer Link */}
              <div className="mt-auto flex justify-center">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-purple-600 font-medium hover:text-purple-700 transition-colors"
                >
                  Visit Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
