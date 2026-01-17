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
    <section className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-navy-800 mb-4">Projects</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">A collection of my recent work and projects</p>
        </motion.div>
        <div className="space-y-6 w-full">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-navy-600 hover:shadow-xl hover:shadow-blue-600/20 transition-all duration-300 group relative z-10 w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="p-6 w-full">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-navy-800">{project.title}</h3>
                  <div className="flex space-x-3">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
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
                        className="text-gray-600 hover:text-blue-600 transition-colors"
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
                      className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-navy-700 border border-blue-100 hover:bg-blue-100 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {index === 1 && (
                  <div className="mt-4 flex items-center text-xs text-blue-600 font-medium">
                    <TrophyIcon className="w-4 h-4 mr-1" />
                    <span>Featured Project</span>
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
          <p className="text-gray-600 text-sm">
            More projects coming soon...
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;