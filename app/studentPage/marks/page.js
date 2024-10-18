'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import StudentSidebar from "@/components/student/sidebar";

// Mock data - replace with actual data fetching logic
const studentData = {
  name: "John Doe",
  courses: [
    {
      id: "COMP101",
      name: "Introduction to Programming",
      marks: {
        quiz: 85,
        midterm: 78,
        assignment: 92,
        final: 88
      }
    },
    {
      id: "MATH201",
      name: "Linear Algebra",
      marks: {
        quiz: 92,
        midterm: 85,
        assignment: 88,
        final: 90
      }
    },
    {
      id: "PHYS301",
      name: "Quantum Mechanics",
      marks: {
        quiz: 75,
        midterm: 82,
        assignment: 79,
        final: 85
      }
    }
  ]
}

const Marks = () => {
  const [selectedCourse, setSelectedCourse] = useState(studentData.courses[0].id)

  return (
      <div className="min-h-screen bg-[#121212] text-gray-200 grid grid-cols-[auto_1fr]">
        <StudentSidebar />
        <main className="container mx-auto p-6 h-full">
          <Card className="bg-[#1E1E1E] border-gray-800 mb-6">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white text-center">
                 Marks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Select onValueChange={setSelectedCourse} defaultValue={selectedCourse}>
                <SelectTrigger className="w-full bg-gray-800 text-gray-200 border-gray-700">
                  <SelectValue placeholder="Select a course" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 text-gray-200 border-gray-700">
                  {studentData.courses.map((course) => (
                      <SelectItem key={course.id} value={course.id} className="focus:bg-gray-700">
                        {course.name}
                      </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
          {studentData.courses.map((course) => (
              course.id === selectedCourse && (
                  <Card key={course.id} className="bg-[#1E1E1E] border-gray-800">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-white">{course.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="w-full">
                        {Object.entries(course.marks).map(([type, mark]) => (
                            <AccordionItem key={type} value={type} className="border-gray-700">
                              <AccordionTrigger className="text-gray-200 hover:text-gray-300">
                                {type.charAt(0).toUpperCase() + type.slice(1)} Marks
                              </AccordionTrigger>
                              <AccordionContent className="text-gray-300">
                                Your {type} mark is: {mark}
                              </AccordionContent>
                            </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
              )
          ))}
        </main>
      </div>
  );
}

export default Marks;
