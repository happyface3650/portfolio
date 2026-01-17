import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { 
  Linkedin,
  Mail, 
  Phone 
} from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center text-black">
        {/* Contact Links - Left Side */}
        <div className="hidden md:flex items-center space-x-4 text-sm overflow-hidden">
          <div className="flex items-center space-x-4">
            {/* Phone - icon only on smaller screens */}
            <a 
              href="tel:+16472178720" 
              className="flex items-center text-gray-700 hover:text-black transition-colors whitespace-nowrap"
              title="+1 (647) 217-8720"
            >
              <Phone className="w-4 h-4 mr-1 flex-shrink-0" />
              <span className="hidden lg:inline">+1 (647) 217-8720</span>
            </a>
            
            <span className="text-gray-400">•</span>
            
            {/* Email - icon only on smaller screens */}
            <a 
              href="mailto:s3yuen@uwaterloo.ca" 
              className="flex items-center text-gray-700 hover:text-black transition-colors whitespace-nowrap"
              title="s3yuen@uwaterloo.ca"
            >
              <Mail className="w-4 h-4 mr-1 flex-shrink-0" />
              <span className="hidden lg:inline">s3yuen@uwaterloo.ca</span>
            </a>
            
            <span className="text-gray-400">•</span>
            
            {/* LinkedIn Link */}
            <a 
              href="https://www.linkedin.com/in/sophie-yuen-180357297" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-black transition-colors whitespace-nowrap text-xs lg:text-sm"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4 mr-1 flex-shrink-0 lg:hidden" />
              <span className="hidden lg:inline">linkedin.com/in/sophie-yuen</span>
            </a>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative px-2 py-1 text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? 'text-black font-semibold'
                  : 'text-gray-700 hover:text-black'
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-0 -bottom-1 w-full h-0.5 bg-navy-800"
                  initial={false}
                  transition={{
                    type: 'spring',
                    bounce: 0.25,
                    duration: 0.5,
                  }}
                />
              )}
            </Link>
          ))}

        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-2 bg-white dark:bg-gray-900">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === link.path
                      ? 'bg-gray-100 text-black font-semibold'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-black'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
