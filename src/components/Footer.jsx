import React from 'react';
import { motion } from 'framer-motion';
import { 
  LinkedinIcon, 
  GithubIcon
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white shadow-md border-t border-gray-200 py-8">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          <div className="space-y-1">
            <p className="text-gray-800">
              {currentYear} Sophie Yuen. All rights reserved.
            </p>
            <div className="space-y-2 text-gray-800">
              <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1">
                <a href="tel:+16472178720" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center">
                  +1 (647) 217-8720
                </a>
                <span className="hidden sm:inline">•</span>
                <a href="mailto:s3yuen@uwaterloo.ca" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center">
                  s3yuen@uwaterloo.ca
                </a>
              </div>
              <div className="flex justify-center items-center space-x-4 pt-2">
                <a 
                  href="https://www.linkedin.com/in/sophie-yuen-180357297" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center gap-1"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/happyface3650" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center gap-1"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;