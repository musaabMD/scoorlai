'use client';

import React, { useState } from 'react';

const MCQQuestion = () => {
  const [showChat, setShowChat] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('b'); // Pre-select for demo
  const [isAnswered, setIsAnswered] = useState(true); // Set to true for demo
  const [questionHelperActive, setQuestionHelperActive] = useState(true); // Set to true for demo
  const [showNotes, setShowNotes] = useState(true); // Set to true for demo
  const [chatMessages, setChatMessages] = useState([
    { user: false, text: "Hello! I can help explain concepts related to this question. You can ask about keywords like \"virtual DOM\" or \"performance\"." },
    { user: true, text: "Can you explain virtual DOM?" },
    { user: false, text: "The Virtual DOM is a lightweight copy of the actual DOM. React uses it to determine what needs to change in the real DOM, making updates more efficient." }
  ]);

  // Sample MCQ data with notes
  const sampleQuestion = {
    text: "Which of the following is a key advantage of using React's virtual DOM?",
    note: "Important question! Remember virtual DOM is about rendering efficiency.",
    options: [
      { 
        id: 'a', 
        text: "It completely eliminates the need for DOM manipulation",
        note: "Too absolute - nothing 'completely eliminates' DOM manipulation"
      },
      { 
        id: 'b', 
        text: "It improves performance by minimizing direct DOM updates",
        note: "This is the core benefit - batch updates instead of individual ones"
      },
      { 
        id: 'c', 
        text: "It allows React to work without JavaScript",
        note: "React relies on JS - this doesn't make sense!"
      },
      { 
        id: 'd', 
        text: "It provides built-in state management without Redux",
        note: "State management and virtual DOM are different concepts"
      }
    ],
    correctAnswer: 'b',
    keywords: ["virtual DOM", "performance", "DOM updates"]
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <style jsx>{`
        .handwritten {
          font-family: 'Comic Sans MS', cursive, sans-serif;
          box-shadow: 1px 1px 3px rgba(0,0,0,0.1);
        }
      `}</style>
      <h1 className="text-3xl font-bold text-center mb-8">Practice Questions</h1>
      <div className="max-w-4xl mx-auto p-4">
        <div className="border rounded-lg shadow-lg p-6 bg-white">
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Question:</h2>
            
            <div className="flex items-center gap-2 mb-2">
              <button
                className={`px-4 py-2 rounded-md transition flex items-center gap-2 ${
                  questionHelperActive ? 'bg-green-600 text-white' : 'bg-blue-600 text-white'
                }`}
                onClick={() => setQuestionHelperActive(!questionHelperActive)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                {questionHelperActive ? 'Hide Question Helper' : 'How to Answer This Question'}
              </button>
              
              <button
                className={`px-4 py-2 rounded-md transition flex items-center gap-2 ${
                  showNotes ? 'bg-amber-600 text-white' : 'bg-purple-600 text-white'
                }`}
                onClick={() => setShowNotes(!showNotes)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
                {showNotes ? 'Hide Study Notes' : 'Show Study Notes'}
              </button>
            </div>
            
            <div className="mb-4">
              <p className="text-lg font-medium">
                Which of the following is a key advantage of using React's {questionHelperActive ? <span className="bg-yellow-200 cursor-pointer">virtual DOM</span> : "virtual DOM"}?
              </p>
              
              {showNotes && (
                <div className="mt-2 p-3 bg-yellow-50 border border-yellow-200 rounded-md text-sm text-yellow-800 handwritten">
                  <strong>Study Note:</strong> {sampleQuestion.note}
                </div>
              )}
            </div>
            
            {questionHelperActive && (
              <div className="p-4 mb-4 bg-blue-50 border border-blue-200 rounded-md">
                <h3 className="font-bold text-blue-800 mb-2">Tips to answer this question:</h3>
                
                <div className="space-y-3">
                  <p className="text-blue-700">
                    <span className="font-medium">Hint:</span> Focus on the highlighted keywords. Understanding
                    the relationship between <span className="bg-yellow-200 cursor-pointer" 
                      onClick={() => setShowChat(true)}>virtual DOM</span> and <span className="bg-yellow-200 cursor-pointer"
                      onClick={() => setShowChat(true)}>performance</span> is key to this question.
                  </p>
                  
                  <p className="text-blue-700">
                    <span className="font-medium">Step 1:</span> Think about why React uses a virtual DOM instead of directly manipulating the actual DOM.
                  </p>
                  
                  <p className="text-blue-700">
                    <span className="font-medium">Step 2:</span> Consider the performance implications of <span className="bg-yellow-200 cursor-pointer"
                      onClick={() => setShowChat(true)}>DOM updates</span> and how the virtual DOM might address these.
                  </p>
                  
                  <p className="text-blue-700">
                    <span className="font-medium">Step 3:</span> Eliminate options that overstate or understate the benefits of the virtual DOM.
                  </p>
                  
                  <div className="mt-3 p-2 bg-blue-100 rounded">
                    <p className="text-blue-800 font-medium">
                      Click on any highlighted keyword for detailed explanation from the AI assistant.
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            <div className="space-y-3">
              {sampleQuestion.options.map(option => (
                <div 
                  key={option.id}
                  className={`p-3 border rounded-md cursor-pointer transition mb-4 ${
                    selectedAnswer === option.id 
                      ? isAnswered 
                        ? option.id === sampleQuestion.correctAnswer 
                          ? 'bg-green-100 border-green-500' 
                          : 'bg-red-100 border-red-500'
                        : 'bg-blue-100 border-blue-500' 
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div>
                    <span className="font-medium">{option.id.toUpperCase()}.</span> {option.text}
                  </div>
                  
                  {showNotes && (
                    <div className="mt-2 p-2 bg-pink-50 border-t border-pink-200 text-sm text-pink-800 handwritten">
                      <strong>Note:</strong> {option.note}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-4 p-3 bg-gray-50 border rounded-md">
              <p className="font-bold">
                ✅ Correct!
              </p>
              <p className="mt-2">
                The virtual DOM improves performance by calculating the most efficient way to update the actual DOM.
              </p>
            </div>
          </div>
          
          {/* AI Assistant Button */}
          <div className="mt-6 relative">
            <button
              className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
              onClick={() => setShowChat(!showChat)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              {showChat ? 'Hide AI Assistant' : 'Ask AI Assistant'}
            </button>
            
            {/* AI Chat Panel */}
            {showChat && (
              <div className="absolute right-0 bottom-12 w-80 bg-white border shadow-xl rounded-md p-4 z-10">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-lg">AI Assistant</h3>
                  <button 
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => setShowChat(false)}
                  >
                    ✕
                  </button>
                </div>
                
                <div className="h-64 flex flex-col">
                  <div className="flex-1 overflow-y-auto mb-4 space-y-3">
                    {/* Chat messages */}
                    {chatMessages.map((msg, index) => (
                      <div 
                        key={index} 
                        className={`p-3 rounded-lg ${
                          msg.user ? 'bg-blue-100 ml-4' : 'bg-purple-50 mr-4'
                        }`}
                      >
                        {msg.text}
                      </div>
                    ))}
                  </div>
                  
                  {/* Input area */}
                  <div className="mt-auto">
                    <div className="flex">
                      <input
                        type="text"
                        className="flex-1 border rounded-l-md p-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
                        placeholder="Ask about the question..."
                        defaultValue=""
                      />
                      <button
                        className="bg-purple-600 text-white px-4 py-2 rounded-r-md hover:bg-purple-700"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function PreviewPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <MCQQuestion />
    </div>
  );
}