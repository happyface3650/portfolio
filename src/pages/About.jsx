import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      items: ['Python', 'C++', 'C#', 'C', 'TypeScript', 'JavaScript']
    },
    {
      title: 'Machine Learning & Data',
      items: [
        'Supervised learning',
        'Sequential modeling',
        'Transformer-based sequential models',
        'Computer vision',
        'Neural networks',
        'Model evaluation & validation',
        'Feature engineering',
        'Data preprocessing'
      ]
    },
    {
      title: 'ML Frameworks & Libraries',
      items: [
        'PyTorch',
        'TensorFlow',
        'NumPy',
        'pandas',
        'matplotlib',
        'scikit-learn',
        'Streamlit'
      ]
    },
    {
      title: 'Mathematics & Quantitative',
      items: [
        'Linear algebra',
        'Discrete mathematics',
        'Calculus',
        'Probability and Statistics',
      ]
    },
    {
      title: 'MLOps and DevOps',
      items: [
        'CI/CD (GitHub Actions, Azure Pipelines)',
        'Cloud computing (Azure)',
        'Version control (Git, Azure DevOps)',
        'System design',
        'Linux',
        'Bash',
        'Unix'
      ]
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container text-gray-900">
        <motion.h2 
          className="section-title text-teal-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Who Am I Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-teal-800">Who Am I?</h3>
            <p className="mb-4 text-gray-900">
              2nd year Computer Engineering student at the University of Waterloo with strong experience 
              in machine learning, data analysis, and quantitative modeling. 
            </p>
            <p className="text-gray-900">
              Built and evaluated models across computer vision and time-series prediction, with hands-on experience 
              in data preprocessing, feature engineering, and model evaluation. 
              Strong foundation in Python, C++, and statistics, with a focus on building interpretable, 
              data-driven systems.
            </p>
            <Link 
              to="/experience"
              className="inline-block mt-6 px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              View My Experience
            </Link>
          </motion.div>
          
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-end relative"
          >
            <div className="relative overflow-hidden rounded-xl aspect-square max-w-md mx-auto shadow-xl border-4 border-teal-100">
                <img 
                src="/src/assets/images/profile.jpg"  // Update this path to match your image filename
                alt="Sophie Yuen"
                className="w-full h-full object-cover"
                />
            </div>
          </motion.div>
        </div>
        
        {/* Skills Section */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-left text-teal-800">Skills & Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index}
                className="bg-white border border-teal-100 p-6 rounded-lg shadow-md text-left hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <h4 className="text-lg font-semibold mb-3 text-teal-800">
                  {category.title}
                </h4>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
