"use client";

import { BookOpen, Target, Hash } from 'lucide-react';

const Explanation = ({ exam, subject, tags, explanation, educationalObjective }) => {
  return (
    <div className="space-y-6">
      {/* Tags Section */}
      <div className="flex flex-wrap gap-2">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
          <Hash className="w-4 h-4 mr-1" />
          {exam}
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
          <Hash className="w-4 h-4 mr-1" />
          {subject}
        </span>
        {tags.map((tag, index) => (
          <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
            <Hash className="w-4 h-4 mr-1" />
            {tag}
          </span>
        ))}
      </div>

      <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">
        <div className="flex flex-row items-center gap-3 mb-4">
          <BookOpen className="w-6 h-6 text-blue-700" />
          <h3 className="text-xl font-semibold text-blue-700">
            Explanation
          </h3>
        </div>
        <div className="text-blue-900 text-lg">
          {explanation}
        </div>
      </div>

      <div className="bg-green-50 rounded-xl border border-green-200 p-6">
        <div className="flex flex-row items-center gap-3 mb-4">
          <Target className="w-6 h-6 text-green-700" />
          <h3 className="text-xl font-semibold text-green-700">
            Educational Objective
          </h3>
        </div>
        <div className="text-green-900 text-lg">
          <p className="font-medium mb-4">{educationalObjective.keyPoint}</p>
          <ul className="list-disc pl-6 space-y-2">
            {educationalObjective.clinicalPearls.map((pearl, index) => (
              <li key={index}>{pearl}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Explanation;