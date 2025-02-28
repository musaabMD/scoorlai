"use client";

import React, { useState } from 'react';
import { Star } from 'lucide-react';
import Options from './Options';
import Explanation from './Explanation';
import Actions from './Actions';
import Comments from './Comments';
import Feedback from './Feedback';

// You can move this to a separate data file later
const sampleMCQ = {
  qid: "Q1",
  exam: "USMLE Step 1",
  subject: "Endocrinology",
  tags: ["thyroid", "metabolism", "clinical-presentation"],
  question: "A 45-year-old woman presents with fatigue, weight gain, and cold intolerance. Which of the following is the most likely diagnosis?",
  options: [
    "Hyperthyroidism",
    "Hypothyroidism",
    "Diabetes Mellitus",
    "Adrenal Insufficiency"
  ],
  optionStats: [
    { count: 245, percentage: 15 },
    { count: 982, percentage: 60 },
    { count: 245, percentage: 15 },
    { count: 164, percentage: 10 }
  ],
  correctAnswer: 1,
  isHighYield: true,
  explanation: "The patient's symptoms of fatigue, weight gain, and cold intolerance are classic presentations of hypothyroidism. These symptoms occur due to decreased metabolic rate caused by insufficient thyroid hormone.",
  educationalObjective: {
    keyPoint: "Recognize the clinical presentation of hypothyroidism",
    clinicalPearls: [
      "Common symptoms include fatigue, weight gain, cold intolerance, and dry skin",
      "TSH is typically elevated in primary hypothyroidism",
      "Levothyroxine is the standard treatment"
    ]
  },
  comments: [
    {
      id: 1,
      content: "Great explanation, helped a lot! 🎯",
      upvotes: 12,
      downvotes: 2,
      timestamp: "2h"
    },
    {
      id: 2,
      content: "The clinical pearls are gold ⭐",
      upvotes: 8,
      downvotes: 1,
      timestamp: "4h"
    }
  ]
};

const MCQCard = ({ mcq = sampleMCQ }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isPinned, setIsPinned] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);
  const [commentInput, setCommentInput] = useState('');
  const [selectedIssueTypes, setSelectedIssueTypes] = useState(new Set());
  const [feedbackRating, setFeedbackRating] = useState({ up: 0, down: 0 });
  const [showAnswer, setShowAnswer] = useState(false);

  const handleChoiceSelect = (index) => {
    if (selectedAnswer === index) {
      // If clicking the same answer, reset
      setSelectedAnswer(null);
      setShowAnswer(false);
    } else {
      // If clicking a different answer
      setSelectedAnswer(index);
      setShowAnswer(true);
    }
  };

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

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleFeedbackRating = (type) => {
    setFeedbackRating(prev => ({
      ...prev,
      [type]: prev[type] + 1
    }));
  };

  const handleCommentVote = (id, type) => {
    console.log('Vote:', id, type);
  };

  const handleSubmitFeedback = () => {
    console.log('Submitting feedback:', {
      issueTypes: Array.from(selectedIssueTypes),
      rating: feedbackRating
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="w-full mb-8 bg-white rounded-xl border border-gray-200 shadow-sm">
        <div className="pb-2 pt-6 px-6">
          <div className="flex justify-between items-start mb-4">
            <div className="px-3 py-1 border rounded-full text-lg font-medium text-gray-600 border-gray-200">
              {mcq.qid}
            </div>
            <button className="p-1">
              <Star 
                className={mcq.isHighYield ? "w-7 h-7 text-yellow-500 fill-current" : "w-7 h-7 text-gray-400"}
              />
            </button>
          </div>

          <h2 className="text-2xl font-semibold leading-tight mb-8 text-gray-900">
            {mcq.question}
          </h2>
        </div>

        <div className="space-y-8 px-6 pb-6">
          {/* Options Component */}
          <Options 
            options={mcq.options}
            optionStats={mcq.optionStats}
            selectedAnswer={selectedAnswer}
            correctAnswer={mcq.correctAnswer}
            showAnswer={showAnswer}
            onSelect={handleChoiceSelect}
          />

          {/* Explanation Component */}
          {showAnswer && selectedAnswer !== null && (
            <Explanation 
              exam={mcq.exam}
              subject={mcq.subject}
              tags={mcq.tags}
              explanation={mcq.explanation}
              educationalObjective={mcq.educationalObjective}
            />
          )}

          {/* Actions Component */}
          <Actions 
            commentsCount={mcq.comments.length}
            expandedSection={expandedSection}
            isPinned={isPinned}
            onToggleSection={toggleSection}
            onTogglePin={() => setIsPinned(!isPinned)}
          />

          {/* Comments Component */}
          {expandedSection === 'comments' && (
            <Comments 
              comments={mcq.comments}
              commentInput={commentInput}
              onCommentChange={(e) => setCommentInput(e.target.value)}
              onVote={handleCommentVote}
            />
          )}

          {/* Feedback Component */}
          {expandedSection === 'feedback' && (
            <Feedback 
              selectedIssueTypes={selectedIssueTypes}
              feedbackRating={feedbackRating}
              onToggleIssueType={toggleIssueType}
              onFeedbackRating={handleFeedbackRating}
              onSubmit={handleSubmitFeedback}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MCQCard;