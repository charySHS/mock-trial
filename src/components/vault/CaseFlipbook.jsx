import React from 'react';
import { motion } from 'framer-motion';
import caseData from '../data/cases/people-v-fromholz.json';

export default function CaseFlipbook() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {caseData.map((url, idx) => (
        <motion.div
          key={idx}
          className="rounded-card overflow-hidden hover-scale"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <img src={url} alt={`Page ${idx + 1}`} className="w-full h-auto" />
        </motion.div>
      ))}
    </div>
  );
}
