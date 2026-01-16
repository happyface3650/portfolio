import React from 'react';
import { motion } from 'framer-motion';
import { AcademicCapIcon, TrophyIcon, BookOpenIcon } from '@heroicons/react/24/outline';

// University of Waterloo Engineering Theme
// Primary: Purple (#6A1B9A) - Engineering Faculty
// Secondary: Gold (#FFD54F) - Accent
// Tertiary: Red (#FF4B36) - University Color
// Neutral: Black & White

const education = [
  {
    degree: 'Bachelor of Applied Science in Computer Engineering',
    institution: 'University of Waterloo',
    period: 'Sept 2024 - Present',
    gpa: 'GPA: 86.3%',
    description: 'Relevant Coursework: Programming in C++, Data Structures and Algorithms, Calculus, Linear Algebra, Discrete Mathematics',
    icon: <AcademicCapIcon className="w-6 h-6" />
  },
  {
    degree: 'Practical Deep Learning for Coders (fast.ai)',
    period: 'Sept - Nov 2025 ',
    description: 'Implemented deep learning models from scratch, including neural networks and convolutional architectures. Studied and applied collaborative filtering, NLP pipelines, and random forest baselines, with emphasis on practical training dynamics and evaluation.',
    icon: <BookOpenIcon className="w-6 h-6" />
  },
  {
    degree: 'Harvard: CS50 Artificial Intelligence',
    period: 'Mar 2025 ',
    description: 'Developed AI systems including traffic sign recognition and search algorithms using Python, TensorFlow, and Scikit-learn, gaining hands-on experience with neural networks, computer vision, and optimization techniques',
    icon: <BookOpenIcon className="w-6 h-6" />
  }
];

const Education = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#6A1B9A] mb-2">Education</h2>
          <div className="h-1 w-24 bg-[#FFD54F] mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">My academic journey at the University of Waterloo's Faculty of Engineering</p>
        </motion.div>
        <div className="space-y-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg relative border-l-4 border-[#FFD54F] hover:shadow-xl transition-all duration-300 hover:border-[#6A1B9A]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-[#6A1B9A] flex items-center justify-center text-white flex-shrink-0">
                      {React.cloneElement(edu.icon, { className: 'w-6 h-6' })}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                      <h4 className="text-lg font-medium text-[#6A1B9A]">{edu.institution}</h4>
                    </div>
                  </div>
                  {edu.awards ? (
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                      {edu.awards.map((award, idx) => (
                        <li key={idx} className="text-gray-700">{award}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-700 mt-2">{edu.description}</p>
                  )}
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-sm font-medium text-[#6A1B9A] bg-[#FFD54F] px-3 py-1 rounded-full mb-2">
                    {edu.period}
                  </span>
                  {edu.gpa && (
                    <span className="text-sm font-medium text-white bg-[#6A1B9A] px-3 py-1 rounded-full">
                      {edu.gpa}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
//waterloo themed with drone images blended in part of the background 
//black white and gold
