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
      title: 'Machine Learning and Data',
      items: [
        'Transformer-based sequential models',
        'Computer vision',
        'Data engineering'
      ]
    },
    {
      title: 'ML Frameworks and Libraries',
      items: [
        'PyTorch',
        'TensorFlow',
        'NumPy',
        'Pandas',
        'Scikit-learn'
      ]
    },
    {
      title: 'MLOps and DevOps',
      items: [
        'CI/CD (GitHub Actions, Azure Pipelines)',
        'Cloud computing (Azure)',
        'Version control (Git, Azure DevOps)',
        'System design',
        'Linux/Unix',
        'Bash',
      ]
    }
  ];

  return (
    <section className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-navy-800 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Who Am I Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-navy-600"
          >
            <h3 className="text-2xl font-bold mb-4 text-navy-800">Who Am I?</h3>
            <p className="mb-4 text-gray-800">
              2nd year Computer Engineering student at the University of Waterloo with strong experience 
              in machine learning, data analysis, and quantitative modeling. 
            </p>
            <Link 
              to="/experience"
              className="inline-block mt-6 px-6 py-2 bg-navy-700 text-white rounded-lg hover:bg-navy-800 transition-colors duration-300 shadow-md hover:shadow-lg"
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
            <div className="relative overflow-hidden rounded-xl aspect-square max-w-md mx-auto shadow-xl border-4 border-blue-50">
                <img 
                src="/src/assets/images/profile.jpg"
                alt="Sophie Yuen"
                className="w-full h-full object-cover"
                />
            </div>
          </motion.div>
        </div>
        
        {/* Skills Section */}
        <motion.div 
          className="mt-16 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-navy-800">SKILLS & EXPERTISE</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index}
                className="bg-white border border-blue-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <h4 className="text-lg font-semibold mb-3 text-navy-800 border-b border-blue-100 pb-2">
                  {category.title}
                </h4>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-gray-800">
                        {item}
                      </span>
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
