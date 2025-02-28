// "use client"
// import React, { useState, useMemo } from 'react';
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { 
//   Sheet, 
//   SheetContent, 
//   SheetHeader, 
//   SheetTitle, 
//   SheetTrigger 
// } from "@/components/ui/sheet";
// import { Toggle } from "@/components/ui/toggle";
// import { Filter, BarChart } from 'lucide-react';
// import { Badge } from "@/components/ui/badge";

// export default function ExamHero() {
//   // State Management
//   const [activeTab, setActiveTab] = useState('questions');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filters, setFilters] = useState({
//     subject: '',
//     viewMode: 'page',
//     reviewStatus: []
//   });
//   const [isFilterSheetOpen, setIsFilterSheetOpen] = useState(false);
//   const [isStatsSheetOpen, setIsStatsSheetOpen] = useState(false);

//   // Sample Exam Data (similar to previous implementation)
//   const examData = {
//     name: 'Computer Science Fundamentals',
//     subtitle: 'Comprehensive Exam Preparation',
//     questions: [
//       {
//         id: 1,
//         text: 'What is a closure in JavaScript?',
//         subject: 'JavaScript',
//         difficulty: 'hard',
//         status: 'unanswered',
//         tags: ['programming', 'javascript'],
//         isCorrect: false,
//         isPinned: false
//       },
//       {
//         id: 2,
//         text: 'Explain the difference between let and var',
//         subject: 'JavaScript',
//         difficulty: 'medium',
//         status: 'correct',
//         tags: ['programming', 'javascript'],
//         isCorrect: true,
//         isPinned: false
//       },   {
//         id: 1,
//         text: 'What is a closure in JavaScript?',
//         subject: 'JavaScript',
//         difficulty: 'hard',
//         status: 'unanswered',
//         tags: ['programming', 'javascript'],
//         isCorrect: false,
//         isPinned: false
//       },
//       {
//         id: 2,
//         text: 'Explain the difference between let and var',
//         subject: 'JavaScript',
//         difficulty: 'medium',
//         status: 'correct',
//         tags: ['programming', 'javascript'],
//         isCorrect: true,
//         isPinned: false
//       },   {
//         id: 1,
//         text: 'What is a closure in JavaScript?',
//         subject: 'JavaScript',
//         difficulty: 'hard',
//         status: 'unanswered',
//         tags: ['programming', 'javascript'],
//         isCorrect: false,
//         isPinned: false
//       },
//       {
//         id: 2,
//         text: 'Explain the difference between let and var',
//         subject: 'JavaScript',
//         difficulty: 'medium',
//         status: 'correct',
//         tags: ['programming', 'javascript'],
//         isCorrect: true,
//         isPinned: false
//       },   {
//         id: 1,
//         text: 'What is a closure in JavaScript?',
//         subject: 'JavaScript',
//         difficulty: 'hard',
//         status: 'unanswered',
//         tags: ['programming', 'javascript'],
//         isCorrect: false,
//         isPinned: false
//       },
//       {
//         id: 2,
//         text: 'Explain the difference between let and var',
//         subject: 'JavaScript',
//         difficulty: 'medium',
//         status: 'correct',
//         tags: ['programming', 'javascript'],
//         isCorrect: true,
//         isPinned: false
//       },   {
//         id: 1,
//         text: 'What is a closure in JavaScript?',
//         subject: 'JavaScript',
//         difficulty: 'hard',
//         status: 'unanswered',
//         tags: ['programming', 'javascript'],
//         isCorrect: false,
//         isPinned: false
//       },
//       {
//         id: 2,
//         text: 'Explain the difference between let and var',
//         subject: 'JavaScript',
//         difficulty: 'medium',
//         status: 'correct',
//         tags: ['programming', 'javascript'],
//         isCorrect: true,
//         isPinned: false
//       },   {
//         id: 1,
//         text: 'What is a closure in JavaScript?',
//         subject: 'JavaScript',
//         difficulty: 'hard',
//         status: 'unanswered',
//         tags: ['programming', 'javascript'],
//         isCorrect: false,
//         isPinned: false
//       },
//       {
//         id: 2,
//         text: 'Explain the difference between let and var',
//         subject: 'JavaScript',
//         difficulty: 'medium',
//         status: 'correct',
//         tags: ['programming', 'javascript'],
//         isCorrect: true,
//         isPinned: false
//       },   {
//         id: 1,
//         text: 'What is a closure in JavaScript?',
//         subject: 'JavaScript',
//         difficulty: 'hard',
//         status: 'unanswered',
//         tags: ['programming', 'javascript'],
//         isCorrect: false,
//         isPinned: false
//       },
//       {
//         id: 2,
//         text: 'Explain the difference between let and var',
//         subject: 'JavaScript',
//         difficulty: 'medium',
//         status: 'correct',
//         tags: ['programming', 'javascript'],
//         isCorrect: true,
//         isPinned: false
//       },   {
//         id: 1,
//         text: 'What is a closure in JavaScript?',
//         subject: 'JavaScript',
//         difficulty: 'hard',
//         status: 'unanswered',
//         tags: ['programming', 'javascript'],
//         isCorrect: false,
//         isPinned: false
//       },
//       {
//         id: 2,
//         text: 'Explain the difference between let and var',
//         subject: 'JavaScript',
//         difficulty: 'medium',
//         status: 'correct',
//         tags: ['programming', 'javascript'],
//         isCorrect: true,
//         isPinned: false
//       },   {
//         id: 1,
//         text: 'What is a closure in JavaScript?',
//         subject: 'JavaScript',
//         difficulty: 'hard',
//         status: 'unanswered',
//         tags: ['programming', 'javascript'],
//         isCorrect: false,
//         isPinned: false
//       },
//       {
//         id: 2,
//         text: 'Explain the difference between let and var',
//         subject: 'JavaScript',
//         difficulty: 'medium',
//         status: 'correct',
//         tags: ['programming', 'javascript'],
//         isCorrect: true,
//         isPinned: false
//       },   {
//         id: 1,
//         text: 'What is a closure in JavaScript?',
//         subject: 'JavaScript',
//         difficulty: 'hard',
//         status: 'unanswered',
//         tags: ['programming', 'javascript'],
//         isCorrect: false,
//         isPinned: false
//       },
//       {
//         id: 2,
//         text: 'Explain the difference between let and var',
//         subject: 'JavaScript',
//         difficulty: 'medium',
//         status: 'correct',
//         tags: ['programming', 'javascript'],
//         isCorrect: true,
//         isPinned: false
//       },   {
//         id: 1,
//         text: 'What is a closure in JavaScript?',
//         subject: 'JavaScript',
//         difficulty: 'hard',
//         status: 'unanswered',
//         tags: ['programming', 'javascript'],
//         isCorrect: false,
//         isPinned: false
//       },
//       {
//         id: 2,
//         text: 'Explain the difference between let and var',
//         subject: 'JavaScript',
//         difficulty: 'medium',
//         status: 'correct',
//         tags: ['programming', 'javascript'],
//         isCorrect: true,
//         isPinned: false
//       },   {
//         id: 1,
//         text: 'What is a closure in JavaScript?',
//         subject: 'JavaScript',
//         difficulty: 'hard',
//         status: 'unanswered',
//         tags: ['programming', 'javascript'],
//         isCorrect: false,
//         isPinned: false
//       },
//       {
//         id: 2,
//         text: 'Explain the difference between let and var',
//         subject: 'JavaScript',
//         difficulty: 'medium',
//         status: 'correct',
//         tags: ['programming', 'javascript'],
//         isCorrect: true,
//         isPinned: false
//       },   {
//         id: 1,
//         text: 'What is a closure in JavaScript?',
//         subject: 'JavaScript',
//         difficulty: 'hard',
//         status: 'unanswered',
//         tags: ['programming', 'javascript'],
//         isCorrect: false,
//         isPinned: false
//       },
//       {
//         id: 2,
//         text: 'Explain the difference between let and var',
//         subject: 'JavaScript',
//         difficulty: 'medium',
//         status: 'correct',
//         tags: ['programming', 'javascript'],
//         isCorrect: true,
//         isPinned: false
//       },   {
//         id: 1,
//         text: 'What is a closure in JavaScript?',
//         subject: 'JavaScript',
//         difficulty: 'hard',
//         status: 'unanswered',
//         tags: ['programming', 'javascript'],
//         isCorrect: false,
//         isPinned: false
//       },
//       {
//         id: 2,
//         text: 'Explain the difference between let and var',
//         subject: 'JavaScript',
//         difficulty: 'medium',
//         status: 'correct',
//         tags: ['programming', 'javascript'],
//         isCorrect: true,
//         isPinned: false
//       },   {
//         id: 1,
//         text: 'What is a closure in JavaScript?',
//         subject: 'JavaScript',
//         difficulty: 'hard',
//         status: 'unanswered',
//         tags: ['programming', 'javascript'],
//         isCorrect: false,
//         isPinned: false
//       },
//       {
//         id: 2,
//         text: 'Explain the difference between let and var',
//         subject: 'JavaScript',
//         difficulty: 'medium',
//         status: 'correct',
//         tags: ['programming', 'javascript'],
//         isCorrect: true,
//         isPinned: false
//       },   {
//         id: 1,
//         text: 'What is a closure in JavaScript?',
//         subject: 'JavaScript',
//         difficulty: 'hard',
//         status: 'unanswered',
//         tags: ['programming', 'javascript'],
//         isCorrect: false,
//         isPinned: false
//       },
//       {
//         id: 2,
//         text: 'Explain the difference between let and var',
//         subject: 'JavaScript',
//         difficulty: 'medium',
//         status: 'correct',
//         tags: ['programming', 'javascript'],
//         isCorrect: true,
//         isPinned: false
//       }
//       // Add more questions...
//     ],
//     flashcards: [
//       {
//         id: 1,
//         front: 'What is a closure?',
//         back: 'A closure is a function that has access to the parent scope...',
//         subject: 'JavaScript',
//         masteryLevel: 'new'
//       },
//       {
//         id: 2,
//         front: 'Explain prototype inheritance',
//         back: 'Prototype inheritance allows objects to inherit properties...',
//         subject: 'JavaScript',
//         masteryLevel: 'learning' 
//       }
//       // Add more flashcards...
//     ],
//     notes: [
//       {
//         id: 1,
//         title: 'JavaScript Fundamentals',
//         content: 'Key concepts in JavaScript programming...',
//         subject: 'JavaScript',
//         tags: ['programming', 'theory']
//       }
//       // Add more notes...
//     ]
//   };

//   // Filtering Logic
//   const filteredData = useMemo(() => {
//     const filterItems = (items) => {
//       return items.filter(item => {
//         const matchesSearch = 
//           (item.text || item.title || item.front)
//           ?.toLowerCase().includes(searchTerm.toLowerCase());

//         const matchesSubject = !filters.subject || 
//           (item.subject === filters.subject);

//         const matchesReviewStatus = filters.reviewStatus.length === 0 || 
//           (activeTab === 'questions' 
//             ? filters.reviewStatus.some(status => 
//                 (status === 'correct' && item.isCorrect) ||
//                 (status === 'incorrect' && !item.isCorrect) ||
//                 (status === 'pinned' && item.isPinned)
//               )
//             : filters.reviewStatus.includes(item.masteryLevel)
//           );

//         return matchesSearch && matchesSubject && matchesReviewStatus;
//       });
//     };

//     return {
//       questions: filterItems(examData.questions),
//       flashcards: filterItems(examData.flashcards),
//       notes: filterItems(examData.notes)
//     };
//   }, [searchTerm, filters, activeTab]);

//   // Filters Component
//   const FiltersSheet = () => {
//     // Subjects for filtering
//     const subjects = [...new Set(
//       [...examData.questions, ...examData.flashcards, ...examData.notes]
//         .map(item => item.subject)
//     )];

//     // Review status options
//     const reviewStatusOptions = 
//       activeTab === 'questions' 
//         ? ['correct', 'incorrect', 'pinned']
//         : activeTab === 'flashcards'
//           ? ['mastered', 'learning', 'new', 'suspended']
//           : [];

//     return (
//       <Sheet open={isFilterSheetOpen} onOpenChange={setIsFilterSheetOpen}>
//         <SheetTrigger asChild>
//           <Button variant="outline" size="icon" className="mr-2">
//             <Filter className="h-4 w-4" />
//           </Button>
//         </SheetTrigger>
//         <SheetContent side="right" className="w-[400px]">
//           <SheetHeader>
//             <SheetTitle>Filters</SheetTitle>
//           </SheetHeader>
//           <div className="space-y-6 py-4">
//             {/* Subject Filters */}
//             <div>
//               <h3 className="text-lg font-semibold mb-2">Subjects</h3>
//               <div className="flex flex-wrap gap-2">
//                 {subjects.map(subject => (
//                   <Toggle
//                     key={subject}
//                     pressed={filters.subject === subject}
//                     onPressedChange={(pressed) => 
//                       setFilters(prev => ({
//                         ...prev, 
//                         subject: pressed ? subject : ''
//                       }))
//                     }
//                     variant="outline"
//                   >
//                     {subject}
//                   </Toggle>
//                 ))}
//               </div>
//             </div>

//             {/* View Mode */}
//             <div>
//               <h3 className="text-lg font-semibold mb-2">View Mode</h3>
//               <div className="flex gap-2">
//                 <Toggle
//                   pressed={filters.viewMode === 'page'}
//                   onPressedChange={(pressed) => 
//                     setFilters(prev => ({
//                       ...prev, 
//                       viewMode: pressed ? 'page' : 'all'
//                     }))
//                   }
//                   variant="outline"
//                 >
//                   One per Page
//                 </Toggle>
//                 <Toggle
//                   pressed={filters.viewMode === 'all'}
//                   onPressedChange={(pressed) => 
//                     setFilters(prev => ({
//                       ...prev, 
//                       viewMode: pressed ? 'all' : 'page'
//                     }))
//                   }
//                   variant="outline"
//                 >
//                   Show All
//                 </Toggle>
//               </div>
//             </div>

//             {/* Review Status */}
//             {reviewStatusOptions.length > 0 && (
//               <div>
//                 <h3 className="text-lg font-semibold mb-2">Review Status</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {reviewStatusOptions.map(status => (
//                     <Toggle
//                       key={status}
//                       pressed={filters.reviewStatus.includes(status)}
//                       onPressedChange={(pressed) => 
//                         setFilters(prev => ({
//                           ...prev, 
//                           reviewStatus: pressed
//                             ? [...prev.reviewStatus, status]
//                             : prev.reviewStatus.filter(s => s !== status)
//                         }))
//                       }
//                       variant="outline"
//                     >
//                       {status}
//                     </Toggle>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </SheetContent>
//       </Sheet>
//     );
//   };

//   // Stats Component
//   const StatsSheet = () => {
//     const stats = 
//       activeTab === 'questions' 
//         ? (() => {
//             const questions = filteredData.questions;
//             const total = questions.length;
//             const correct = questions.filter(q => q.isCorrect).length;
//             const incorrect = total - correct;
//             const pinned = questions.filter(q => q.isPinned).length;
//             const score = total > 0 ? Math.round((correct / total) * 100) : 0;

//             return [
//               { label: 'Total Questions', value: total },
//               { label: 'Correct', value: `${correct} (${Math.round((correct/total)*100)}%)` },
//               { label: 'Incorrect', value: `${incorrect} (${Math.round((incorrect/total)*100)}%)` }, 
//               { label: 'Pinned', value: pinned },
//               { label: 'Score', value: `${score}%` }
//             ];
//           })()
//         : activeTab === 'flashcards'
//           ? (() => {
//               const flashcards = filteredData.flashcards;
//               const total = flashcards.length;
//               const masteryLevels = ['mastered', 'learning', 'new', 'suspended'];

//               return [
//                 { label: 'Total Flashcards', value: total },
//                 ...masteryLevels.map(level => ({
//                   label: level.charAt(0).toUpperCase() + level.slice(1),
//                   value: flashcards.filter(f => f.masteryLevel === level).length
//                 }))
//               ];
//             })()
//           : [];

//     return (
//       <Sheet open={isStatsSheetOpen} onOpenChange={setIsStatsSheetOpen}>
//         <SheetTrigger asChild>
//           <Button variant="outline" size="icon">
//             <BarChart className="h-4 w-4" />
//           </Button>
//         </SheetTrigger>
//         <SheetContent side="right" className="w-[400px]">
//           <SheetHeader>
//             <SheetTitle>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Stats</SheetTitle>
//           </SheetHeader>
//           <div className="space-y-4 py-4">
//             {stats.map((stat, index) => (
//               <div 
//                 key={stat.label}
//                 className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg"
//               >
//                 <span className="font-medium">{stat.label}</span>
//                 <Badge variant="secondary">{stat.value}</Badge>
//               </div>
//             ))}
//           </div>
//         </SheetContent>
//       </Sheet>
//     );
//   };

//   // Render Content
//   const renderContent = () => {
//     const items = filteredData[activeTab];
//     return (
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {items.map(item => {
//           if (activeTab === 'questions') {
//             return (
//               <Card key={item.id} className="p-4">
//                 <div className="flex flex-col">
//                   <div className="text-sm mb-2">{item.text}</div>
//                   <div className="flex justify-between items-center">
//                     <div className="text-xs text-muted-foreground">
//                       {item.subject} | {item.difficulty}
//                     </div>
//                     <div className={`text-xs font-semibold ${item.isCorrect ? 'text-green-500' : 'text-red-500'}`}>
//                       {item.isCorrect ? 'Correct' : 'Incorrect'}
//                     </div>
//                   </div>
//                 </div>
//               </Card>
//             );
//           }
//           if (activeTab === 'flashcards') {
//             return (
//               <Card key={item.id} className="p-4">
//                 <div className="text-sm mb-2">{item.front}</div>
//                 <div className="text-xs text-muted-foreground">
//                   {item.masteryLevel}  
//                 </div>
//               </Card>
//             );
//           }
//           if (activeTab === 'notes') {
//             return (
//               <Card key={item.id} className="p-4">
//                 <div className="text-sm">{item.title}</div>
//                 <div className="text-xs text-muted-foreground mt-2">
//                   {item.tags.join(', ')}
//                 </div>
//               </Card>
//             );
//           }
//         })}
//       </div>
//     );
//   };

//   return (
//     <div>
//       {/* Sticky Header */}
//       <header className="sticky top-0 left-0 right-0 bg-background z-10 shadow-sm">
//         <div className="container mx-auto px-4 py-6">
//           {/* Header Content */}
//           <div className="text-center mb-6">
//             <h1 className="text-3xl font-bold">{examData.name}</h1>
//             <p className="text-xl text-muted-foreground">{examData.subtitle}</p>
//           </div>

//           {/* Search and Action Bar */}  
//           <div className="flex items-center mb-6">
//             <div className="flex-grow mr-4">
//               <Input 
//                 type="text" 
//                 placeholder={`Search ${activeTab}...`}
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
//             <FiltersSheet />
//             <StatsSheet />
//           </div>

//           {/* Tabs */}
//           <Tabs value={activeTab} onValueChange={setActiveTab}>
//             <TabsList className="grid w-full grid-cols-3">
//               <TabsTrigger value="questions">Questions</TabsTrigger>
//               <TabsTrigger value="flashcards">Flashcards</TabsTrigger>
//               <TabsTrigger value="notes">Notes</TabsTrigger>  
//             </TabsList>
//             <TabsContent value={activeTab} className="container mx-auto px-4 py-6">
//               {renderContent()}
//             </TabsContent>
//           </Tabs>
//         </div>
//       </header>
//     </div>
//   );
// }

"use client"
import React, { useState } from 'react';
import { ChevronRight, BookOpen, Star, BarChart2, Search, Book, Brain, Timer } from 'lucide-react';

const MCQIntroTableView = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const sections = [
    {
      id: 1,
      title: "Browse by Topics",
      count: 450,
      icon: <BookOpen size={20} className="text-white" />,
      bgColor: "bg-blue-500",
      route: "topics"
    },
    {
      id: 2,
      title: "All Questions",
      count: 2500,
      icon: <Book size={20} className="text-white" />,
      bgColor: "bg-green-500",
      route: "questions"
    },
    {
      id: 3,
      title: "Bookmarks",
      count: 24,
      icon: <Star size={20} className="text-white" />,
      bgColor: "bg-yellow-500",
      route: "bookmarks"
    },
    {
      id: 4,
      title: "Statistics",
      count: 4,
      icon: <BarChart2 size={20} className="text-white" />,
      bgColor: "bg-purple-500",
      route: "statistics"
    }
  ];

  const filteredSections = sections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 bg-white border-b border-gray-200">
          <h1 className="text-2xl font-semibold text-gray-900">USMLE Step 2 CK</h1>
        </div>

        {/* Fixed Search Bar */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-3 z-10">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Table View */}
        <div className="bg-white">
          {filteredSections.map((section) => (
            <div 
              key={section.id}
              className="flex items-center px-6 py-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
            >
              <div className={`flex-shrink-0 p-2 rounded-lg ${section.bgColor}`}>
                {section.icon}
              </div>
              <div className="ml-4 flex-1">
                <div className="flex items-center justify-between">
                  <h2 className="text-base font-medium text-gray-900">{section.title}</h2>
                  <span className="bg-gray-100 text-gray-900 text-sm px-2.5 py-0.5 rounded-full font-medium">
                    {section.count}
                  </span>
                </div>
              </div>
              <ChevronRight className="flex-shrink-0 text-gray-400 ml-4" size={20} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TopicView = () => {
  const topics = [
    {
      id: 1,
      title: "Internal Medicine",
      count: 120,
      subtopics: [
        {
          id: 'card',
          title: "Cardiology",
          count: 45,
          subtopics: [
            {
              id: 'hf',
              title: "Heart Failure",
              count: 15,
              modes: true
            }
          ]
        }
      ]
    }
  ];

  const [currentPath, setCurrentPath] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const getCurrentView = () => {
    let current = topics;
    for (const pathId of currentPath) {
      const found = current.find(t => t.id === pathId);
      current = found?.subtopics || [];
    }
    return current;
  };

  const currentView = getCurrentView().filter(topic =>
    topic.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderModes = () => (
    <div className="grid grid-cols-2 gap-6 p-6 bg-white">
      <button className="flex items-center justify-center gap-2 p-6 bg-blue-500 text-white rounded-xl hover:bg-blue-600 shadow-sm">
        <Brain size={24} />
        <span className="text-lg font-medium">Study Mode</span>
      </button>
      <button className="flex items-center justify-center gap-2 p-6 bg-green-500 text-white rounded-xl hover:bg-green-600 shadow-sm">
        <Timer size={24} />
        <span className="text-lg font-medium">Exam Mode</span>
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="px-6 py-4 bg-white border-b border-gray-200">
          <div className="flex items-center gap-2">
            {currentPath.length > 0 && (
              <button
                onClick={() => setCurrentPath(prev => prev.slice(0, -1))}
                className="text-blue-500 font-medium"
              >
                Back
              </button>
            )}
            <h1 className="text-2xl font-semibold text-gray-900">
              {currentPath.length === 0 ? "Topics" : getCurrentView()[0]?.title}
            </h1>
          </div>
        </div>

        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-3 z-10">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search topics"
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {currentPath.length === 3 ? renderModes() : (
          <div className="bg-white">
            {currentView.map((topic) => (
              <div 
                key={topic.id}
                className="flex items-center px-6 py-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                onClick={() => setCurrentPath(prev => [...prev, topic.id])}
              >
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h2 className="text-base font-medium text-gray-900">{topic.title}</h2>
                    <span className="bg-gray-100 text-gray-900 text-sm px-2.5 py-0.5 rounded-full font-medium">
                      {topic.count}
                    </span>
                  </div>
                </div>
                <ChevronRight className="flex-shrink-0 text-gray-400 ml-4" size={20} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export { MCQIntroTableView, TopicView };