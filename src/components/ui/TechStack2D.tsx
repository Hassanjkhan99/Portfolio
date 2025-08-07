import React from 'react';
import { motion } from 'framer-motion';
import { getRandomTechStack } from '../../constants/techStack';

const TechStack2D: React.FC = () => {
  const selectedTech = getRandomTechStack(12);

  return (
    <div className="w-full">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {selectedTech.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              scale: 1.1,
              y: -5,
              transition: { duration: 0.2 }
            }}
            className="group relative"
          >
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <div 
                  className="w-8 h-8 rounded"
                  style={{ backgroundColor: tech.color }}
                />
              </div>
              <p className="text-xs text-center text-gray-300 font-medium">
                {tech.name}
              </p>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStack2D; 