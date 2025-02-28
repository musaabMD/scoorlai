"use client"
import React, { useState } from 'react';
import { ArrowLeft, Search, Book, Filter, FileText, ChevronDown, ChevronUp, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const DemoQuizHeader = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedFile, setSelectedFile] = useState('all');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Dummy data with question counts
  const subjects = [
    { label: 'All Subjects', value: 'all', count: 340 },
    { label: 'Cardiology', value: 'cardio', count: 82 },
    { label: 'Neurology', value: 'neuro', count: 65 },
    { label: 'Pediatrics', value: 'peds', count: 73 },
    { label: 'Surgery', value: 'surgery', count: 44 },
    { label: 'Psychiatry', value: 'psych', count: 76 }
  ];

  const files = [
    { label: 'All Files', value: 'all', count: 340 },
    { label: 'UWorld 2024', value: 'uworld24', count: 120 },
    { label: 'Amboss 2024', value: 'amboss24', count: 95 },
    { label: 'NBMEs', value: 'nbme', count: 75 },
    { label: 'First Aid', value: 'fa', count: 50 }
  ];

  const filters = [
    { label: 'All Questions', value: 'all', count: 340 },
    { label: 'Incorrect', value: 'incorrect', count: 86 },
    { label: 'Bookmarked', value: 'bookmark', count: 45 },
    { label: 'Correct', value: 'correct', count: 254 }
  ];

  const SelectFilter = ({ icon: Icon, value, onChange, options, placeholder }) => (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[180px] bg-white">
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4" />
          <SelectValue placeholder={placeholder} />
        </div>
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );

  const MobileFilterButton = () => (
    <button
      onClick={() => setIsFilterOpen(!isFilterOpen)}
      className="w-full flex items-center justify-between px-4 py-3 bg-white rounded-lg border border-gray-200 text-left"
    >
      <div className="flex items-center gap-2">
        <Filter className="w-5 h-5 text-gray-600" />
        <span className="text-gray-900">Filters</span>
      </div>
      {isFilterOpen ? (
        <ChevronUp className="w-4 h-4 text-gray-400" />
      ) : (
        <ChevronDown className="w-4 h-4 text-gray-400" />
      )}
    </button>
  );

  const MobileFilterOption = ({ icon: Icon, label, onClick }) => (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between px-4 py-3 bg-white rounded-lg border border-gray-200"
    >
      <div className="flex items-center gap-2">
        <Icon className="w-5 h-5 text-gray-600" />
        <span className="text-gray-900">{label}</span>
      </div>
      <ChevronDown className="w-4 h-4 text-gray-400" />
    </button>
  );

  return (
    <>
      <style>{`
        .gradient-button {
          background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      <div className="w-full bg-white shadow-md">
        <div className="flex items-center justify-between px-4 py-4 bg-white border-b">
          <div className="flex items-center gap-2">
            <button className="hover:bg-gray-100 p-1.5 rounded-full transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-white">D</span>
              </div>
              <span className="text-xl font-bold text-gray-800 ml-2">DrNote</span>
              <span className="text-sm font-medium text-gray-600 ml-2">USMLE Step 1</span>
            </div>
          </div>

          <Button 
            className="gradient-button text-white font-medium hover:opacity-90"
            size="sm"
          >
            Upgrade
          </Button>
        </div>

        <div className="px-4 py-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {/* Desktop View */}
            <div className="hidden md:flex items-center gap-4">
              <div className="flex gap-2">
                <SelectFilter
                  icon={Book}
                  value={selectedSubject}
                  onChange={setSelectedSubject}
                  options={subjects}
                  placeholder="All Subjects"
                />

                <SelectFilter
                  icon={FileText}
                  value={selectedFile}
                  onChange={setSelectedFile}
                  options={files}
                  placeholder="All Files"
                />

                <SelectFilter
                  icon={Filter}
                  value={selectedFilter}
                  onChange={setSelectedFilter}
                  options={filters}
                  placeholder="All Questions"
                />
              </div>

              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-white border border-gray-200"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <Button className="bg-green-600 hover:bg-green-700">
                Start Simulation
              </Button>
            </div>

            {/* Mobile View */}
            <div className="block md:hidden space-y-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white border border-gray-200"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            
              <MobileFilterButton />
              {isFilterOpen && (
                <div className="space-y-2">
                  <MobileFilterOption 
                    icon={Book} 
                    label="All Subjects" 
                    onClick={() => {}}
                  />
                  <MobileFilterOption 
                    icon={FileText} 
                    label="All Files" 
                    onClick={() => {}}
                  />
                  <MobileFilterOption 
                    icon={Filter} 
                    label="All Questions" 
                    onClick={() => {}}
                  />
                </div>
              )}

              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium">
                <Clock className="w-5 h-5" />
                <span>Start Simulation (Soon)</span>
              </button>
            </div>

            <div className="mt-3 text-sm text-gray-600">
              Showing 340 questions
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoQuizHeader;