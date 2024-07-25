import React from 'react';
import data from '../data.json';
import { motion } from 'framer-motion';

const About = () => (
  <section className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-4">
      <motion.h1 
        className="text-5xl font-extrabold text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h1>
      <motion.p 
        className="text-lg text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {data.about.description}
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
       
       
      </motion.div>
      
      {/* <motion.div 
        className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="flex items-center mb-4">
          <h2 className="text-3xl font-bold border-b-2 border-teal-500 pb-2">Experience</h2>
        </div>
        {data.about.experience.map((job, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold">{job.company}</h3>
            <p>{job.description}</p>
          </div>
        ))}
      </motion.div> */}
      
      <motion.div 
        className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
      >
        <div className="flex items-center mb-4">
          <h2 className="text-3xl font-bold border-b-2 border-teal-500 pb-2">Education</h2>
        </div>
        {data.about.education.map((edu, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p>{edu.institution} | {edu.score}</p>
          </div>
        ))}
      </motion.div>
      
      <motion.div 
        className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6 }}
      >
        <div className="flex items-center mb-4">
          <h2 className="text-3xl font-bold border-b-2 border-teal-500 pb-2">Certifications</h2>
        </div>
        <ul className="list-disc ml-6 mt-2">
          {data.about.certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </motion.div>
      
      <motion.div 
        className="bg-gray-800 p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8 }}
      >
        <p className=" text-lg mb-4">
          Contact : 9487435083
          <br />
          Email: <a href="mailto:gokulakrish23gk@gmail.com" className="text-teal-500 hover:underline">gokulakrish23gk@gmail.com</a>
        </p>
        <p className="text-lg">{data.about.summary}</p>
      </motion.div>
    </div>
  </section>
);

export default About;
