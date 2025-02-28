"use client";

import { CheckCircle2, XCircle } from 'lucide-react';

const Options = ({ 
  options, 
  optionStats, 
  selectedAnswer, 
  correctAnswer, 
  showAnswer, 
  onSelect 
}) => {
  // Calculate total votes
  const totalVotes = optionStats.reduce((sum, stat) => sum + stat.count, 0);

  return (
    <div className="space-y-4">
      {/* Options */}
      <div className="space-y-2">
        {options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrect = correctAnswer === index;
          const shouldShowAnswer = showAnswer && selectedAnswer !== null;
          const stats = optionStats[index];
          
          // Base styles for container
          let containerClass = "w-full rounded-xl overflow-hidden relative transition-all duration-200 hover:opacity-90 ";
          let progressBarClass = "absolute left-0 top-0 h-full transition-all duration-300 ";
          let textColor = "text-gray-900";

          if (shouldShowAnswer) {
            if (isCorrect) {
              // Correct answer
              containerClass += "bg-[#DEF7EC]";
              progressBarClass += "bg-[#DEF7EC]";
              textColor = "text-gray-900";
            } else if (isSelected) {
              // Wrong selected answer
              containerClass += "bg-red-100";
              progressBarClass += "bg-red-100";
              textColor = "text-gray-900";
            } else {
              // Other unselected options
              containerClass += "bg-gray-100";
              progressBarClass += "bg-gray-100";
            }
          } else {
            // Before showing answer
            if (isSelected) {
              containerClass += "bg-blue-100";
              progressBarClass += "bg-blue-100";
            } else {
              containerClass += "bg-gray-100";
              progressBarClass += "bg-gray-100";
            }
          }
          
          return (
            <div key={index} className={containerClass}>
              {/* Progress bar */}
              <div 
                className={progressBarClass}
                style={{ 
                  width: showAnswer ? `${stats.percentage}%` : '0%'
                }}
              />
              
              {/* Content */}
              <button
                onClick={() => onSelect(index)}
                className="w-full relative flex items-center justify-between py-3 px-4"
              >
                <span className={textColor}>{option}</span>
                
                {/* Percentage and icon display */}
                {showAnswer && (
                  <div className="flex items-center">
                    {isCorrect && <CheckCircle2 className="w-5 h-5 text-green-600 mr-2" />}
                    {isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-600 mr-2" />}
                    <span className="font-medium">{stats.percentage}%</span>
                  </div>
                )}
              </button>
            </div>
          );
        })}
      </div>

      {/* Total votes */}
      {showAnswer && (
        <div className="text-sm text-gray-500">
          {totalVotes} votes
        </div>
      )}
    </div>
  );
};

export default Options;