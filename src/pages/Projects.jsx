import React from 'react';
import { motion } from 'framer-motion';
import { CodeBracketIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { TrophyIcon } from '@heroicons/react/24/solid';

// F1-themed components
const CheckeredFlag = ({ className = '' }) => (
  <div className={`${className} w-6 h-6 bg-[length:200%_200%]`} style={{
    backgroundImage: 'repeating-conic-gradient(#000 0 25%, #fff 0 50%)',
    backgroundSize: '1rem 1rem',
  }} />
);

const TireMark = ({ className = '' }) => (
  <div className={`${className} w-16 h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full relative overflow-hidden`}>
    <div className="absolute inset-0 bg-[linear-gradient(45deg,#0000_45%,#000_50%,#0000_55%)] bg-[length:1rem_1rem]" />
  </div>
);

const projects = [
  {
    title: 'Anthropic AI Hackathon Winner: Scholarly',
    description: 'Built an end-to-end scholarship automation platform with personalized recommendations and Claude-powered essay generation.',
    tags: ['Express.js', 'TypeScript', 'LangChain', 'MultiAgent System', 'Prompt Engineering'],
    link: '#',
    github: '#'
  },
  {
    title: 'Coming Soon: F 1 Race Strategy Engineer',
    description: 'Developed a transformer world model (MAE 0.8s) for predicting F1 race states (lap times, tire deg, positions). Currently integrating reinforcement learning for strategy optimization. Built end-to-end data pipeline with custom feature engineering.',
    tags: ['PyTorch', 'Python', 'Pandas', 'NumPy', 'Gradient Boosting', 'scikit-learn', 'Reinforcement Learning', 'Transformer based sequential modelling', 'Feature Engineering'],
    link: '#',
    github: '#'
  },
   {
    title: 'AI Game Agent (Nim)',
    description: 'Developed a reinforcement learning AI agent that masters Nim via Q-learning in 10000+ iterations.',
    tags: ['Python', 'Reinforcement Learning', 'Q-learning'],
    link: '#',
    github: '#'
  },
  {
    title: 'Retail Trauma - Hack the Valley X Track Winner',
    description: 'Built a browser extension + web app that tracks online spending and blocks checkout pages with humorous “roasts” to encourage better financial habits in 36 hours. ',
    tags: ['TypeScript', 'Node.js', 'Browser Extension', 'Google Gemini API'],
    link: '#',
    github: '#'
  },
  {
    title: 'Traffic Sign Classifier',
    description: 'Developed a CNN achieving 95% accuracy on traffic sign classification by optimizing preprocessing, augmentation, and hyperparameters. ',
    tags: ['Python', 'TensorFlow', 'Keras', 'Machine Learning', 'Computer Vision', 'CNN'],
    link: '#',
    github: '#'
  }
 
];

const Projects = () => {
  return (
    <section className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative race track lines */}
      <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600" />
      <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600" />
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-red-600 via-yellow-400 to-red-600" />
      <div className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-b from-red-600 via-yellow-400 to-red-600" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative mb-8">
            <div className="flex justify-center items-center mb-2">
              <CheckeredFlag className="h-8 w-8 mr-3" />
              <h2 className="text-4xl font-bold text-black font-racing">PROJECTS</h2>
              <CheckeredFlag className="h-8 w-8 ml-3" />
            </div>
            <div className="h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50 mx-auto w-1/3" />
          </div>
        </motion.div>
        <div className="space-y-6 w-full">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-xl overflow-hidden border-2 border-gray-200 hover:border-red-600 transition-all duration-300 group relative z-10 w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative h-2 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,#0000_45%,#fff_50%,#0000_55%)] bg-[length:1rem_100%] opacity-30" />
              </div>
              <div className="p-6 w-full">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-black">{project.title}</h3>
                  <div className="flex space-x-2">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-red-600 transition-colors"
                        title="View on GitHub"
                      >
                        <CodeBracketIcon className="w-5 h-5" />
                      </a>
                    )}
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-red-600 transition-colors"
                        title="View Live Demo"
                      >
                        <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${index === 1 ? 'bg-red-50 text-red-800 border-red-200' : 'bg-gray-100 text-gray-800 border-gray-200'}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {index === 1 && (
                  <div className="mt-4 flex items-center text-xs text-red-600 font-medium">
                    <TrophyIcon className="w-4 h-4 mr-1" />
                    <span>Featured F1 Project</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center text-sm text-gray-600">
            <CheckeredFlag className="w-5 h-5 mr-2" />
            <span className="text-red-600 font-bold">FLAG</span>
            More projects coming soon...
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;