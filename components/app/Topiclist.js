import React, { useState } from 'react';
import { ChevronRight, Pin, Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const getRandomColor = (index) => {
  const colors = [
    'bg-blue-100 text-blue-600',
    'bg-green-100 text-green-600',
    'bg-purple-100 text-purple-600',
    'bg-orange-100 text-orange-600',
    'bg-pink-100 text-pink-600',
  ];
  return colors[index % colors.length];
};

const getScoreLabel = (percentage) => {
  if (percentage >= 85) return 'good';
  if (percentage >= 61) return 'average';
  return 'poor';
};

const getProgressColor = (percentage) => {
  if (percentage >= 85) return 'bg-emerald-500';
  if (percentage >= 61) return 'bg-amber-500';
  return 'bg-red-500';
};

const medicalData = {
  'Internal Medicine': {
    'Cardiology': {
      'Heart Failure': { total: 50, completed: 30, correct: 25 },
      'Congenital Heart Disease': { total: 40, completed: 20, correct: 15 },
      'Coronary Artery Disease': { total: 45, completed: 35, correct: 28 },
      'Arrhythmias': { total: 35, completed: 15, correct: 12 }
    },
    'Pulmonology': {
      'Asthma': { total: 30, completed: 25, correct: 20 },
      'COPD': { total: 40, completed: 30, correct: 25 },
      'Pneumonia': { total: 35, completed: 20, correct: 15 }
    }
  },
  'Surgery': {
    'General Surgery': {
      'Appendectomy': { total: 25, completed: 20, correct: 18 },
      'Cholecystectomy': { total: 30, completed: 25, correct: 22 },
      'Hernia Repair': { total: 28, completed: 22, correct: 20 }
    },
    'Orthopedics': {
      'Joint Replacement': { total: 35, completed: 30, correct: 25 },
      'Fracture Management': { total: 40, completed: 35, correct: 30 },
      'Spine Surgery': { total: 45, completed: 35, correct: 28 }
    }
  }
};

const MedicalTopics = () => {
  const [navigationStack, setNavigationStack] = useState(['main']);
  const [pinnedItems, setPinnedItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentTab, setCurrentTab] = useState('topics');

  const renderProgressSection = (correct, total) => {
    const percentage = Math.round((correct / total) * 100);
    const progressColor = getProgressColor(percentage);
    const scoreLabel = getScoreLabel(percentage);
    const scoreLabelColor = {
      good: 'bg-emerald-100 text-emerald-700',
      average: 'bg-amber-100 text-amber-700',
      poor: 'bg-red-100 text-red-700'
    }[scoreLabel];

    return (
      <div className="space-y-1">
        <div className="flex items-center justify-end text-sm space-x-2">
          <span className="text-gray-600">{correct}/{total} Correct • {percentage}%</span>
          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${scoreLabelColor}`}>
            {scoreLabel}
          </span>
        </div>
        <div className="relative bg-gray-100 rounded-full h-2 overflow-hidden">
          <div 
            className={`h-full ${progressColor}`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  };

  const calculateProgress = (obj) => {
    if (!obj || typeof obj !== 'object') return { total: 0, correct: 0 };
    if ('total' in obj) return { total: obj.total, correct: obj.correct };
    return Object.values(obj).reduce((acc, value) => {
      const stats = calculateProgress(value);
      return {
        total: acc.total + stats.total,
        correct: acc.correct + stats.correct
      };
    }, { total: 0, correct: 0 });
  };

  const getCurrentView = () => {
    let current = medicalData;
    for (let i = 1; i < navigationStack.length; i++) {
      current = current[navigationStack[i]];
    }
    return current;
  };

  const navigate = (item) => {
    setNavigationStack(prev => [...prev, item]);
    setSearchQuery('');
  };

  const goBack = () => {
    setNavigationStack(prev => prev.slice(0, -1));
    setSearchQuery('');
  };

  const togglePin = (item) => {
    setPinnedItems(prev => 
      prev.includes(item) 
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  };

  const filterItems = (items) => {
    if (!searchQuery) return items;
    const filtered = {};
    Object.entries(items).forEach(([key, value]) => {
      if (key.toLowerCase().includes(searchQuery.toLowerCase())) {
        filtered[key] = value;
      }
    });
    return filtered;
  };

  const renderListItem = (label, data, index) => {
    const isLeafNode = typeof data === 'object' && 'total' in data;
    const stats = isLeafNode ? data : calculateProgress(data);
    const colorClass = getRandomColor(index);
    
    return (
      <div 
        key={label}
        onClick={() => !isLeafNode && navigate(label)}
        className="flex flex-col px-4 py-3 bg-gray-50 border-b border-gray-200 last:border-b-0"
      >
        <div className="flex items-center space-x-3 mb-2">
          <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-medium ${colorClass}`}>
            {index + 1}
          </div>
          <span className="text-base text-gray-900 flex-1">{label}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              togglePin(label);
            }}
          >
            <Pin 
              size={16} 
              className={pinnedItems.includes(label) ? 'fill-red-500 text-red-500' : 'text-gray-400'} 
            />
          </button>
          {!isLeafNode && <ChevronRight size={16} className="text-gray-400" />}
        </div>
        {renderProgressSection(stats.correct, stats.total)}
      </div>
    );
  };

  const currentView = getCurrentView();
  const filteredView = filterItems(currentView);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white px-4 py-3 sticky top-0 z-10 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            {navigationStack.length > 1 && (
              <button
                onClick={goBack}
                className="text-blue-600 text-sm"
              >
                Back
              </button>
            )}
            <h1 className="text-2xl font-bold text-center text-gray-900">
              {navigationStack[navigationStack.length - 1] === 'main' 
                ? '**Medical Topics**' 
                : navigationStack[navigationStack.length - 1]}
            </h1>
            <div className="w-10"></div>
          </div>

          <div className="relative my-3">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 bg-white border border-gray-200"
            />
          </div>

          <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="topics">Topics</TabsTrigger>
              <TabsTrigger value="questions">Questions</TabsTrigger>
              <TabsTrigger value="pinned">Bookmarked {pinnedItems.length}</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="bg-white shadow-sm mt-2">
          {currentTab === 'topics' && (
            Object.entries(filteredView).map(([key, value], index) => 
              renderListItem(key, value, index)
            )
          )}
          
          {currentTab === 'questions' && (
            <div className="divide-y divide-gray-200">
              {Object.entries(medicalData).flatMap(([subject, subjectData]) =>
                Object.entries(subjectData).flatMap(([subspecialty, subspecialtyData]) =>
                  Object.entries(subspecialtyData)
                    .filter(([topic, data]) => 'total' in data)
                    .map(([topic, data], index) => (
                      <div key={topic} className="p-4">
                        <div className="flex flex-col">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <div className="font-medium text-gray-900">{topic}</div>
                              <div className="text-sm text-gray-500">{subspecialty} • {subject}</div>
                            </div>
                            <button
                              onClick={() => togglePin(topic)}
                            >
                              <Pin 
                                size={16} 
                                className={pinnedItems.includes(topic) ? 'fill-red-500 text-red-500' : 'text-gray-400'} 
                              />
                            </button>
                          </div>
                          {renderProgressSection(data.correct, data.total)}
                        </div>
                      </div>
                    ))
                )
              )}
            </div>
          )}
          
          {currentTab === 'pinned' && (
            <div className="divide-y divide-gray-200">
              {pinnedItems.length > 0 ? (
                pinnedItems.map((item, index) => {
                  let itemData;
                  Object.values(medicalData).forEach(subject => {
                    Object.values(subject).forEach(subspecialty => {
                      if (item in subspecialty) {
                        itemData = subspecialty[item];
                      }
                    });
                  });
                  return itemData && (
                    <div key={item} className="p-4">
                      <div className="flex flex-col">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-gray-900">{item}</span>
                          <button onClick={() => togglePin(item)}>
                            <Pin size={16} className="fill-red-500 text-red-500" />
                          </button>
                        </div>
                        {renderProgressSection(itemData.correct, itemData.total)}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="px-4 py-8 text-center text-gray-500">
                  No pinned items
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MedicalTopics;