import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="/src/assets/images/profile.jpg"
                alt="Sophie Yuen"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-navy-900 mb-6">
            Hi, I'm Sophie Yuen
          </h1>
          <div className="w-full max-w-5xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              <motion.div 
                className="bg-white px-5 py-3 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all whitespace-nowrap"
                whileHover={{ y: -2 }}
              >
                <p className="font-medium text-navy-800">Computer Engineering @ University of Waterloo</p>
              </motion.div>
              
              <motion.div 
                className="bg-white px-5 py-3 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all whitespace-nowrap"
                whileHover={{ y: -2 }}
              >
                <p className="font-medium text-navy-800">Prev ML Engineer (co-op) @ AGF</p>
              </motion.div>
              
              <motion.div 
                className="bg-white px-5 py-3 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all whitespace-nowrap"
                whileHover={{ y: -2 }}
              >
                <p className="font-medium text-navy-800">Incoming Quant @ AGF</p>
              </motion.div>
              
              <motion.div 
                className="bg-white px-5 py-3 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all whitespace-nowrap"
                whileHover={{ y: -2 }}
              >
                <p className="font-medium text-navy-800">ML/CV Project Manager @ WARG</p>
              </motion.div>
            </div>
          </div>
          <div className="mt-10">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about"
                className="px-8 py-3 bg-navy-700 text-white rounded-lg font-medium hover:bg-navy-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Learn More About Me
              </Link>
              <Link
                to="/experience"
                className="px-8 py-3 border-2 border-navy-700 text-navy-700 rounded-lg font-medium hover:bg-navy-50 transition-colors duration-300"
              >
                View My Experience
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;