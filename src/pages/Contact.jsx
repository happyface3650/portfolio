// src/pages/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, MapPinIcon, PhoneIcon, CodeBracketIcon, ShareIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  return (
    <section className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-navy-800 mb-4">Get In Touch</h2>
        </motion.div>
        
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-lg shadow-xl border-l-4 border-navy-600 hover:shadow-2xl transition-all duration-300"
          >
            <p className="text-gray-700 mb-8">
              Have a project in mind or want to discuss potential opportunities? 
              Feel free to reach out to me directly at:
            </p>
            
            <div className="space-y-4 max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-4 p-4 rounded-lg hover:bg-blue-50 transition-colors">
                <div className="p-3 rounded-full bg-blue-100 text-navy-700">
                  <EnvelopeIcon className="w-6 h-6" />
                </div>
                <a 
                  href="mailto:s3yuen@uwaterloo.ca" 
                  className="text-lg font-medium text-navy-800 hover:text-blue-600 transition-colors"
                >
                  s3yuen@uwaterloo.ca
                </a>
              </div>
              
              <div className="flex items-center justify-center space-x-4 p-4 rounded-lg hover:bg-blue-50 transition-colors">
                <div className="p-3 rounded-full bg-blue-100 text-navy-700">
                  <PhoneIcon className="w-6 h-6" />
                </div>
                <a 
                  href="tel:+16472178720" 
                  className="text-lg font-medium text-navy-800 hover:text-blue-600 transition-colors"
                >
                  +1 (647) 217-8720
                </a>
              </div>
              
              <div className="flex items-center justify-center space-x-4 p-4 rounded-lg hover:bg-blue-50 transition-colors">
                <div className="p-3 rounded-full bg-blue-100 text-navy-700">
                  <ShareIcon className="w-6 h-6" />
                </div>
                <a 
                  href="https://www.linkedin.com/in/sophie-yuen-180357297" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-navy-800 hover:text-blue-600 transition-colors"
                >
                  linkedin.com/in/sophie-yuen
                </a>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-gray-600 text-sm">
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