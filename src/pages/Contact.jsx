// src/pages/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { LinkedinIcon } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section bg-gray-50 dark:bg-gray-900/50">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>
        
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Let's Work Together</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Have a project in mind or want to discuss potential opportunities? 
              Feel free to reach out to me directly at:
            </p>
            
            <div className="space-y-6 max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-4">
                <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                  <EnvelopeIcon className="w-6 h-6" />
                </div>
                <a 
                  href="mailto:s3yuen@uwaterloo.ca" 
                  className="text-lg font-medium text-gray-800 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  s3yuen@uwaterloo.ca
                </a>
              </div>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                  <PhoneIcon className="w-6 h-6" />
                </div>
                <a 
                  href="tel:+16472178720" 
                  className="text-lg font-medium text-gray-800 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  +1 (647) 217-8720
                </a>
              </div>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                  <LinkedinIcon className="w-6 h-6" />
                </div>
                <a 
                  href="https://www.linkedin.com/in/sophie-yuen-180357297" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-gray-800 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  linkedin.com/in/sophie-yuen-180357297
                </a>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;