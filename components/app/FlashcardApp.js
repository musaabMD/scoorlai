import React, { useState } from 'react';
import { 
  FolderOpen, Search, Brain, Activity, Book, Folder, 
  FileText, Library, GraduationCap, Timer, XCircle, 
  Zap, BarChart, Pin, Clock, ChevronDown, Star
} from 'lucide-react';

// Define helper functions first
const getTypeIcon = (type) => {
  switch(type) {
    case 'subject': return <Library className="w-5 h-5 text-purple-500" />;
    case 'system': return <Brain className="w-5 h-5 text-blue-500" />;
    case 'region': return <Book className="w-5 h-5 text-green-500" />;
    case 'folder': return <Folder className="w-5 h-5 text-orange-500" />;
    case 'flashcards': return <FileText className="w-5 h-5 text-gray-500" />;
    default: return <FileText className="w-5 h-5 text-gray-500" />;
  }
};

const getStatus = (data) => {
  if (data.mastered > data.learning && data.mastered > data.notStarted) {
    return 'mastered';
  } else if (data.learning > data.notStarted) {
    return 'learning';
  }
  return 'notStarted';
};

const sampleData = {
  name: 'USMLE Step 1',
  type: 'subject',
  totalCards: 2500,
  mastered: 1000,
  learning: 1000,
  notStarted: 500,
  progress: 60,
  children: [
    {
      name: 'Anatomy',
      type: 'system',
      totalCards: 800,
      mastered: 300,
      learning: 300,
      notStarted: 200,
      progress: 45,
      children: [/* Previous data structure */]
    }, {
        name: 'Anatomy',
        type: 'system',
        totalCards: 800,
        mastered: 300,
        learning: 300,
        notStarted: 200,
        progress: 45,
        children: [/* Previous data structure */]
      }
  ]
};

const FlashcardApp = () => {
  const [activeTab, setActiveTab] = useState('list');
  const [contentSearch, setContentSearch] = useState('');
  const [pinnedItems, setPinnedItems] = useState([]);

  const StatCard = ({ icon: Icon, title, value, color }) => (
    <div className="border border-gray-200 rounded-lg p-6 bg-white">
      <div className="flex flex-col items-center space-y-2">
        <div className={`text-${color}-500 p-3 rounded-full bg-${color}-50`}>
          <Icon className="w-6 h-6" />
        </div>
        <p className={`text-3xl font-bold text-${color}-500`}>{value}</p>
        <p className="text-sm text-gray-600">{title}</p>
      </div>
    </div>
  );

  const ProgressBar = ({ progress, className = '' }) => (
    <div className={`h-2 bg-gray-200 rounded-full overflow-hidden ${className}`}>
      <div 
        className="h-full bg-blue-500 transition-all"
        style={{ width: `${progress}%` }}
      />
    </div>
  );

  const StatusBadge = ({ status }) => {
    const statusConfig = {
      mastered: { color: "bg-green-100 text-green-700", icon: GraduationCap, text: "Mastered" },
      learning: { color: "bg-yellow-100 text-yellow-700", icon: Clock, text: "Learning" },
      notStarted: { color: "bg-gray-100 text-gray-700", icon: Timer, text: "Not Started" }
    };
    const config = statusConfig[status];
    
    return (
      <span className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs ${config.color}`}>
        <config.icon className="w-3 h-3" />
        {config.text}
      </span>
    );
  };

  const FolderView = ({ data, level = 0 }) => {
    const [isOpen, setIsOpen] = useState(level < 2);
    const isVisible = !contentSearch || 
      data.name.toLowerCase().includes(contentSearch.toLowerCase());

    if (!isVisible) {
      return null;
    }

    return (
      <div className="mb-2">
        <div 
          className={`flex items-center cursor-pointer p-4 hover:bg-gray-50 rounded-lg transition-all
            border ${level === 0 ? 'bg-blue-50 border-blue-200' : 'border-gray-200'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center flex-1">
            {getTypeIcon(data.type)}
            <span className="ml-2 font-medium">{data.name}</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FileText className="w-4 h-4 text-gray-500" />
              <span>{data.totalCards}</span>
            </div>
            <button
              className={`p-1 rounded-full hover:bg-gray-100 ${
                pinnedItems.includes(data.name) ? 'text-yellow-500' : 'text-gray-400'
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setPinnedItems(
                  pinnedItems.includes(data.name)
                    ? pinnedItems.filter(item => item !== data.name)
                    : [...pinnedItems, data.name]
                );
              }}
            >
              <Star className="w-4 h-4" />
            </button>
            <StatusBadge status={getStatus(data)} />
          </div>
        </div>
        
        {isOpen && data.children && (
          <div className="ml-6 mt-2 space-y-2">
            {data.children.map((child, index) => (
              <FolderView 
                key={`${child.name}-${index}`}
                data={child}
                level={level + 1}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Hero Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">USMLE Step 1</h1>
        <p className="text-xl text-gray-600 mb-6">Track your medical knowledge progress</p>
        
        <div className="grid grid-cols-4 gap-4 mb-6">
          <StatCard 
            icon={FileText}
            title="Total Cards"
            value={sampleData.totalCards}
            color="blue"
          />
          <StatCard 
            icon={GraduationCap}
            title="Mastered"
            value={sampleData.mastered}
            color="green"
          />
          <StatCard 
            icon={Clock}
            title="Learning"
            value={sampleData.learning}
            color="yellow"
          />
          <StatCard 
            icon={Timer}
            title="Not Started"
            value={sampleData.notStarted}
            color="gray"
          />
        </div>

        <div className="max-w-md mx-auto">
          <ProgressBar progress={sampleData.progress} className="h-3" />
          <p className="text-gray-600 mt-2">{sampleData.progress}% of total content covered</p>
        </div>
      </div>

      {/* Navigation and Search */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <button
            className={`px-4 py-2 rounded-lg flex items-center ${
              activeTab === 'list'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
            onClick={() => setActiveTab('list')}
          >
            <FolderOpen className="w-4 h-4 mr-2" />
            Content Structure
          </button>
          <button
            className={`px-4 py-2 rounded-lg flex items-center ${
              activeTab === 'browse'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
            onClick={() => setActiveTab('browse')}
          >
            <Search className="w-4 h-4 mr-2" />
            Browse All
          </button>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search content..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={contentSearch}
              onChange={(e) => setContentSearch(e.target.value)}
            />
          </div>
          <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="all">All Status</option>
            <option value="mastered">Mastered</option>
            <option value="learning">Learning</option>
            <option value="not-started">Not Started</option>
          </select>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-xl shadow-sm p-6 border">
        <div className="space-y-4">
          {pinnedItems.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-500 mb-2">
                <Pin className="w-4 h-4 inline-block mr-1" />
                Pinned Items
              </h3>
              <div className="space-y-2">
                {/* Render pinned items here */}
              </div>
            </div>
          )}
          <FolderView data={sampleData} />
        </div>
      </div>
    </div>
  );
};

export default FlashcardApp;