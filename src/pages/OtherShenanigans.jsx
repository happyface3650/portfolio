import React from 'react';
import { motion } from 'framer-motion';

const OtherShenanigans = () => {
  return (
    <section className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Other Shenanigans
        </motion.h2>
        
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4">Coming Soon!</h3>
            <p className="mb-4">
              This is where I'll share my side projects, experiments, and other fun stuff that doesn't fit into the main categories.
            </p>
            <p>
              Check back later for updates!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OtherShenanigans;
