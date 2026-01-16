import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

// Import images
import agfLogo from '../assets/images/AGF_logo.png';
import projectHumanoid from '../assets/images/project humanoid.jpg';
import landingPad from '../assets/images/landing_pad.jpg';

const experiences = [
  {
    title: 'Upcoming: Quant Investment Intern',
    company: 'AGF Investments',
    period: 'May 2026 - Aug 2026',
    description: 'Coming Soon!',
  },
  {
    title: 'Machine Learning Engineer (co-op)',
    company: 'AGF Investments',
    period: 'Sept 2025 - Dec 2025',
    description: 'Designed and built a cloud-native ML pipeline, capable of processing 300,000+ financial documents yearly and 900 documents per hour, reducing manual labor by 90% and projecting 80% cost savings. Led a team of 3 to develop the POC, achieving 97% model accuracy and 60s end-to-end processing per file. Built custom evaluation metrics, logging systems, and CI/CD pipelines with PyTest and Azure DevOps.',
    image: agfLogo,
    imageAlt: 'AGF Investments Logo',
    tags: ['Python', 'Azure AI', 'Data preprocessing', 'Feature engineering', 'Model evaluation & validation', 'MLOps', 'Version control (Azure DevOps)', 'CI/CD', 'Cloud computing (Azure)', 'PyTest']
  },
  {
    title: 'ML/CV Project Manager',
    company: 'Waterloo Aerial Robotics Group',
    period: 'Jan 2026 - Present',
    description: 'Leading ML/CV related projects in the team, including a target tracking project where the drone follows a target. Training and optimizing YOLO model for target detection for competition.',
    image: landingPad,
    imageAlt: 'Drone landing pad',
    tags: ['Python', 'Data preprocessing', 'YOLO', 'Computer Vision', 'Team Leadership']
  },
  {
    title: 'Autonomy Team Member',
    company: 'Waterloo Aerial Robotics Group',
    period: 'May 2025 - Dec 2025',
    description: 'Researched, selected, trained and upgraded the CV model from YOLOv8n to YOLOv11n, achieving a 10% boost in accuracy for autonomous drone landing after fine-tuning. ',
    tags: ['Computer Vision', 'YOLO', 'Python']
  },
  {
    title: 'VR Developer',
    company: 'Waterloo Reality Labs',
    period: 'Sept 2025 - Present',
    description: 'Designing and implementing the UI for Project Humanoid, a VR-controlled robotic arm system.',
    image: projectHumanoid,
    imageAlt: 'Project Humanoid VR Interface',
    tags: ['Unity', 'C#', 'VR Development', 'UI/UX']
  },
  {
    title: 'STEM Mentor',
    company: 'Self-Employed',
    period: 'Sept 2022 - Present',
    description: 'Improved students’ grade by 50% (from 60s to 90s) and transformed their attitudes by personal coaching in weekly lessons, cultivating growth with encouragement and effective communication. ',
    tags: ['Communication', 'Leadership', 'Science', 'Mathematics']
  }
];

const Experience = () => {
  return (
    <section className="bg-white">
      <section id="experience" className="pt-24 pb-16 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 text-green-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>
          
          <div className="relative">
            <div className="absolute left-1/2 h-full w-1 bg-green-400 -translate-x-1/2"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative mx-auto max-w-2xl w-full ${
                  index === 0 ? 'mt-0' : 
                  index === 1 ? 'mt-20' : 'mt-12'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white p-6 rounded-lg shadow-md relative border-2 border-green-100 hover:border-green-300 hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                      <h4 className="text-lg font-semibold text-green-700">{exp.company}</h4>
                    </div>
                    <span className="text-sm text-green-800 bg-green-100 px-3 py-1 rounded-full border border-green-200">{exp.period}</span>
                  </div>
                  {exp.image && (
                    <div className="mb-4 rounded-lg overflow-hidden flex justify-center">
                      <img 
                        src={exp.image} 
                        alt={exp.imageAlt || 'Project image'}
                        className="max-w-full max-h-64 object-contain"
                      />
                    </div>
                  )}
                  <p className="text-gray-800 mb-4">{exp.description}</p>
                  {exp.tags && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="text-xs font-medium px-3 py-1 bg-green-100 text-green-800 rounded-full border border-green-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Experience;
// Color scheme: white background, green accents, black text