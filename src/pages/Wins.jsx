import React from 'react';
import { motion } from 'framer-motion';
import { TrophyIcon, StarIcon, LightBulbIcon, ChartBarIcon, TrophyIcon as TrophySolid } from '@heroicons/react/24/solid';

const wins = [
  {
    title: 'Academic Excellence',
    icon: <TrophySolid className="w-8 h-8 text-amber-600" />, // Gold
    items: [
      { text: 'Excellent Academic Standing (2025)', medal: 'gold' },
      { text: 'Honour Roll (2024)', medal: 'gold' },
      { text: 'President\'s Scholarship of Distinction (2024)', medal: 'gold' },
      { text: 'Certificate of Distinction - Canadian Senior Mathematics Competition (2023): Scored Top 4%', medal: 'gold' },
    ]
  },
  {
    title: 'Hackathon Wins',
    icon: <LightBulbIcon className="w-8 h-8 text-amber-600" />,
    items: [
      { text: 'Anthropic AI Hackathon Winner: Scholarly (2025)', medal: 'gold' },
      { text: 'Hack the Valley X CSE Track Prize Winner: Retail Trauma (2025)', medal: 'silver' }
    ]
  }
];

const Wins = () => {
  return (
    <section className="py-16 bg-white text-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-amber-600 mb-2">Notable Wins</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-700 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Celebrating key achievements and milestones throughout my journey</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {wins.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-amber-500 hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-4 pb-2 border-b border-gray-200">
                <div className="p-2 rounded-full bg-gradient-to-br from-amber-400 to-amber-500">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-amber-600">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.items.map((item, idx) => {
                  const medalColor = {
                    gold: 'text-amber-600',
                    silver: 'text-gray-500',
                    bronze: 'text-amber-700'
                  }[item.medal];
                  
                  const medalIcon = {
                    gold: <TrophySolid className="w-5 h-5 inline-block mr-2 text-amber-500" />,
                    silver: <TrophySolid className="w-5 h-5 inline-block mr-2 text-gray-400" />,
                    bronze: <TrophySolid className="w-5 h-5 inline-block mr-2 text-amber-700" />
                  }[item.medal];
                  
                  return (
                    <li key={idx} className={`flex items-start group hover:bg-amber-50 p-2 rounded-lg transition-colors ${medalColor}`}>
                      <span className="mt-0.5">
                        {medalIcon}
                      </span>
                      <span className="text-gray-700 group-hover:text-gray-900">{item.text}</span>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wins;
