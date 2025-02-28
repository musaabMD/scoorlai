'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";

const ISSUE_TYPES = [
  { id: 'typo', label: 'Typo/Grammar', emoji: '📝' },
  { id: 'explanation', label: 'Incorrect Explanation', emoji: '❌' },
  { id: 'answer', label: 'Wrong Answer', emoji: '⚠️' },
  { id: 'unclear', label: 'Unclear Question', emoji: '🤔' },
  { id: 'outdated', label: 'Outdated Information', emoji: '📅' }
];

const Feedback = ({ onClose }) => {
  const [selectedIssueTypes, setSelectedIssueTypes] = useState(new Set());
  const [feedbackRating, setFeedbackRating] = useState({ up: 0, down: 0 });

  const toggleIssueType = (typeId) => {
    setSelectedIssueTypes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(typeId)) {
        newSet.delete(typeId);
      } else {
        newSet.add(typeId);
      }
      return newSet;
    });
  };

  const handleFeedbackRating = (type) => {
    setFeedbackRating(prev => ({
      ...prev,
      [type]: prev[type] + 1
    }));
  };

  const handleSubmit = () => {
    console.log('Submitting feedback:', {
      issueTypes: Array.from(selectedIssueTypes),
      rating: feedbackRating
    });
    onClose?.();
  };

  return (
    <div className="mt-4 space-y-4">
      <div className="flex flex-wrap gap-2">
        {ISSUE_TYPES.map((type) => (
          <button
            key={type.id}
            onClick={() => toggleIssueType(type.id)}
            className={`p-3 rounded-lg bg-white border text-left flex items-center space-x-2 transition-colors
              ${selectedIssueTypes.has(type.id)
                ? 'border-blue-500 ring-2 ring-blue-200'
                : 'border-gray-200 hover:border-gray-300'}`}
          >
            <span className="text-xl">{type.emoji}</span>
            <span className="font-medium">{type.label}</span>
          </button>
        ))}
      </div>

      <textarea
        placeholder="Describe the issue..."
        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
      />

      <div className="flex justify-center space-x-6 py-4">
        <div className="flex items-center bg-white rounded-lg border border-gray-200">
          <button
            onClick={() => handleFeedbackRating('up')}
            className="p-3 hover:bg-gray-50 rounded-l-lg border-r"
          >
            👍
          </button>
          <span className="px-3 py-2 font-medium text-gray-600">
            {feedbackRating.up}
          </span>
        </div>
        <div className="flex items-center bg-white rounded-lg border border-gray-200">
          <button
            onClick={() => handleFeedbackRating('down')}
            className="p-3 hover:bg-gray-50 rounded-l-lg border-r"
          >
            👎
          </button>
          <span className="px-3 py-2 font-medium text-gray-600">
            {feedbackRating.down}
          </span>
        </div>
      </div>

      <div className="flex justify-end">
        <Button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          onClick={handleSubmit}
        >
          Submit Report
        </Button>
      </div>
    </div>
  );
};

export default Feedback;