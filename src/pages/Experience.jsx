import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

// Import images
import projectHumanoid from '../assets/images/project humanoid.jpg';
import landingPad from '../assets/images/landing_pad.jpg';

const experiences = [
  {
    title: 'Machine Learning Engineer (co-op)',
    company: 'AGF Investments',
    period: 'Sept 2025 - Dec 2025',
    points: [
      'Designed, built and deployed a <strong>cloud-native, horizontally scalable ML pipeline</strong> capable of processing <strong>900 documents/hour with 7 million annual document capacity</strong>',
      '<strong>Reduced manual labor by 90%</strong> and projected <strong>80% cost savings</strong>',
      'Led a team of 3 for initial POC with <strong>97% model accuracy</strong> and <strong>60s end-to-end processing per file</strong>',
      'Built custom evaluation metrics, logging systems, and CI/CD pipelines with PyTest and Azure DevOps'
    ],
    tags: ['Python', 'Azure AI', 'Data preprocessing', 'Feature engineering', 'Model evaluation & validation', 'MLOps', 'Version control (Azure DevOps)', 'CI/CD', 'Cloud computing (Azure)', 'PyTest']
  },
  {
    title: 'ML/CV Project Manager',
    company: 'Waterloo Aerial Robotics Group',
    period: 'Jan 2026 - Present',
    points: [
      'Leading ML/CV related projects in the team',
      'Developing a target tracking system where the drone follows a moving target',
      'Training and optimizing YOLO models for target detection in competition settings'
    ],
    image: landingPad,
    imageAlt: 'Drone landing pad',
    tags: ['Python', 'Data preprocessing', 'YOLO', 'Computer Vision', 'Team Leadership']
  },
  {
    title: 'Autonomy Team Member',
    company: 'Waterloo Aerial Robotics Group',
    period: 'May 2025 - Dec 2025',
    points: [
      'Researched and selected YOLOv11n as an upgrade from YOLOv8n',
      'Trained and fine-tuned the model, achieving a 10% boost in accuracy',
      'Implemented the model for autonomous drone landing systems'
    ],
    tags: ['Computer Vision', 'YOLO', 'Python']
  },
  {
    title: 'VR Developer',
    company: 'Waterloo Reality Labs',
    period: 'Sept 2025 - Present',
    points: [
      'Designing and implementing the UI for Project Humanoid',
      'Developing VR interactions for a robotic arm control system',
      'Creating intuitive user experiences in virtual reality environment'
    ],
    image: projectHumanoid,
    imageAlt: 'Project Humanoid VR Interface',
    tags: ['Unity', 'C#', 'VR Development', 'UI/UX']
  },
  {
    title: 'STEM Mentor',
    company: 'Self-Employed',
    period: 'Sept 2022 - Present',
    points: [
      'Improved students\' grades by 50% (from 60s to 90s average)',
      'Provided personal coaching through weekly lessons',
      'Fostered positive learning attitudes through encouragement and effective communication'
    ],
    tags: ['Communication', 'Leadership', 'Science', 'Mathematics']
  }
];

const Experience = () => {
  return (
    <section className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold text-navy-800 mb-8">Experience</h2>
          </div>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-navy-600 hover:shadow-xl hover:shadow-blue-600/20 transition-all duration-300 border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    <h4 className="text-lg font-semibold text-navy-800">{exp.company}</h4>
                  </div>
                  <span className="text-sm text-navy-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">{exp.period}</span>
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
                <ul className="list-disc pl-6 text-gray-800 space-y-2 mb-4">
                  {exp.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="text-gray-800" dangerouslySetInnerHTML={{ __html: point }} />
                  ))}
                </ul>
                {exp.tags && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="text-xs font-medium px-3 py-1 bg-blue-50 text-navy-700 rounded-full border border-blue-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;