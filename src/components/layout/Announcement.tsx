import React, { useState } from 'react';
import { X } from 'lucide-react';

const Announcement: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-primary-900 text-primary-100 py-2 border-b border-primary-800 text-xs sm:text-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center space-x-4 flex-grow text-center">
            <span className="hidden sm:inline font-medium text-accent-300">🌿 Professional Landscaping & Garden Care</span>
            <span className="text-white/90">Free consultation & project estimates for homeowners</span>
            <a href="#contact" className="underline font-semibold text-white hover:text-accent-300 transition-colors">
              Claim Free Estimate &rarr;
            </a>
          </div>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-primary-300 hover:text-white transition-colors p-1"
            aria-label="Close announcement"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Announcement;