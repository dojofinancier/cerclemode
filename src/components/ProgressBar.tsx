import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-white opacity-80">
          Question {current}/{total}
        </span>
        <span className="text-sm font-medium text-white">
          {percentage}%
        </span>
      </div>
      <div className="w-full bg-white bg-opacity-30 rounded-full h-3">
        <div 
          className="bg-white h-3 rounded-full transition-all duration-500 ease-out shadow-sm"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};