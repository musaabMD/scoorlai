"use client";

import { MessageCircle, Flag, Pin } from 'lucide-react';

const Actions = ({ 
  commentsCount, 
  expandedSection, 
  isPinned, 
  onToggleSection, 
  onTogglePin 
}) => {
  return (
    <div className="flex justify-between items-center pt-4 border-t">
      <div className="flex space-x-2">
        <button
          onClick={() => onToggleSection('comments')}
          className={`p-2 rounded-full hover:bg-gray-100 transition-colors flex items-center ${
            expandedSection === 'comments' ? 'text-blue-500 bg-blue-50' : 'text-gray-400'
          }`}
        >
          <MessageCircle className="w-6 h-6" />
          <span className="ml-1 text-sm font-medium">
            {commentsCount}
          </span>
        </button>
        <button
          onClick={() => onToggleSection('feedback')}
          className={`p-2 rounded-full hover:bg-gray-100 transition-colors ${
            expandedSection === 'feedback' ? 'text-orange-500 bg-orange-50' : 'text-gray-400'
          }`}
        >
          <Flag className="w-6 h-6" />
        </button>
      </div>
      <button
        className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-100"
        onClick={onTogglePin}
      >
        <Pin className={isPinned ? "w-7 h-7 fill-current text-gray-600" : "w-7 h-7 text-gray-400"} />
      </button>
    </div>
  );
};

export default Actions;