// src/components/Projects.js
import React from 'react';
import data from '../data.json'; // Assuming data.json is in the same directory as Projects.js
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = data.home.projects || [];

  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-5xl font-extrabold text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
              <p className="text-lg">{project.description}</p>
              <a href={project.link} className="text-teal-500 mt-4 block">View Project</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
