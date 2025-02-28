"use client"

import { useState } from "react"
import { Pin, BookOpen } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const exams = [
  {
    id: 1,
    name: "Advanced AI",
    category: "AI",
    numberOfQuestions: 50,
    color: "bg-blue-500",
  },
  {
    id: 2,
    name: "Machine Learning",
    category: "ML",
    numberOfQuestions: 40,
    color: "bg-green-500",
  },
  {
    id: 3,
    name: "Neural Networks",
    category: "DL",
    numberOfQuestions: 60,
    color: "bg-purple-500",
  },
  {
    id: 4,
    name: "NLP",
    category: "NLP",
    numberOfQuestions: 45,
    color: "bg-yellow-500",
  }, {
    id: 1,
    name: "Advanced AI",
    category: "AI",
    numberOfQuestions: 50,
    color: "bg-blue-500",
  },
  {
    id: 2,
    name: "Machine Learning",
    category: "ML",
    numberOfQuestions: 40,
    color: "bg-green-500",
  },
  {
    id: 3,
    name: "Neural Networks",
    category: "DL",
    numberOfQuestions: 60,
    color: "bg-purple-500",
  },
  {
    id: 4,
    name: "NLP",
    category: "NLP",
    numberOfQuestions: 45,
    color: "bg-yellow-500",
  }, {
    id: 1,
    name: "Advanced AI",
    category: "AI",
    numberOfQuestions: 50,
    color: "bg-blue-500",
  },
  {
    id: 2,
    name: "Machine Learning",
    category: "ML",
    numberOfQuestions: 40,
    color: "bg-green-500",
  },
  {
    id: 3,
    name: "Neural Networks",
    category: "DL",
    numberOfQuestions: 60,
    color: "bg-purple-500",
  },
  {
    id: 4,
    name: "NLP",
    category: "NLP",
    numberOfQuestions: 45,
    color: "bg-yellow-500",
  }, {
    id: 1,
    name: "Advanced AI",
    category: "AI",
    numberOfQuestions: 50,
    color: "bg-blue-500",
  },
  {
    id: 2,
    name: "Machine Learning",
    category: "ML",
    numberOfQuestions: 40,
    color: "bg-green-500",
  },
  {
    id: 3,
    name: "Neural Networks",
    category: "DL",
    numberOfQuestions: 60,
    color: "bg-purple-500",
  },
  {
    id: 4,
    name: "NLP",
    category: "NLP",
    numberOfQuestions: 45,
    color: "bg-yellow-500",
  }, {
    id: 1,
    name: "Advanced AI",
    category: "AI",
    numberOfQuestions: 50,
    color: "bg-blue-500",
  },
  {
    id: 2,
    name: "Machine Learning",
    category: "ML",
    numberOfQuestions: 40,
    color: "bg-green-500",
  },
  {
    id: 3,
    name: "musab",
    category: "DL",
    numberOfQuestions: 60,
    color: "bg-purple-500",
  },
  {
    id: 4,
    name: "NLP",
    category: "NLP",
    numberOfQuestions: 45,
    color: "bg-yellow-500",
  },
]

const categories = ["AI", "ML", "DL", "NLP"]

export default function ExamList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [pinnedExams, setPinnedExams] = useState([])

  const filteredExams = exams.filter((exam) => {
    const matchesSearch = exam.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || exam.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const togglePin = (id) => {
    setPinnedExams((prev) => (prev.includes(id) ? prev.filter((examId) => examId !== id) : [...prev, id]))
  }

  return (
    <div className="w-full">
      <div className=" py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <BookOpen className="h-12 w-12 mx-auto mb-2 text-blue-500" />
            <h1 className="text-3xl font-semibold mb-2">AI Test Prep Exams</h1>
            <p className="text-gray-600">Master AI concepts with our curated exam list</p>
          </div>
          <div className="flex gap-2 mb-4 max-w-2xl mx-auto">
            <Input
              type="text"
              placeholder="Search exams..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow"
            />
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredExams.map((exam) => (
            <div
              key={exam.id}
              className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 flex items-center space-x-4"
            >
              <div
                className={`w-12 h-12 ${exam.color} rounded-sm flex items-center justify-center text-white font-bold`}
              >
                {exam.category}
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-medium">{exam.name}</h3>
                <p className="text-sm text-gray-500">{exam.numberOfQuestions} Questions</p>
              </div>
              <button onClick={() => togglePin(exam.id)} className="focus:outline-none">
                <Pin
                  className={`h-6 w-6 ${pinnedExams.includes(exam.id) ? "text-red-500 fill-current" : "text-gray-400"}`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

