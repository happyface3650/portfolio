import React from 'react';
import { motion } from 'framer-motion';
import { 
  LinkedinIcon, 
  GithubIcon
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sophie-yuen-180357297',
      icon: <LinkedinIcon className="w-5 h-5" />
    },
    {
      name: 'GitHub',
      url: 'https://github.com/happyface3650',
      icon: <GithubIcon className="w-5 h-5" />
    }
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <div className="space-y-1">
              <p className="text-gray-600 dark:text-gray-300">
                {currentYear} Sophie Yuen. All rights reserved.
              </p>
              <div className="flex flex-col sm:flex-row sm:space-x-4 text-sm text-gray-500 dark:text-gray-400">
                <a href="tel:+16472178720" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  +1 (647) 217-8720
                </a>
                <span className="hidden sm:inline">•</span>
                <a href="mailto:s3yuen@uwaterloo.ca" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  s3yuen@uwaterloo.ca
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;