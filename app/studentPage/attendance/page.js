'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import StudentSidebar from "@/components/student/sidebar";
import { Button } from "@/components/ui/button";

const Attendance = () => {
  const courses = ['CL2005', 'CS2005', 'CS2009', 'CS3004', 'CS3006', 'MT3001'];
  const attendanceData = [
    { lectureNo: 1, date: '28-Aug-2024', duration: 1, presence: 'P' },
    { lectureNo: 2, date: '29-Aug-2024', duration: 1, presence: 'P' },
    { lectureNo: 3, date: '04-Sep-2024', duration: 1, presence: 'P' },
    { lectureNo: 4, date: '11-Sep-2024', duration: 1, presence: 'P' },
    { lectureNo: 5, date: '18-Sep-2024', duration: 1, presence: 'A' },
  ];

  return (
      <div className="min-h-screen bg-[#121212] text-white grid grid-cols-[auto_1fr]">
        {/* Sidebar */}
        <div className="bg-[#1C2C4A]">
          <StudentSidebar />
        </div>

        {/* Main Content */}
        <div className="flex flex-col">
          <nav className="bg-[#1C2C4A] text-white p-4 flex justify-between items-center">
            <h2 className="text-lg">Attendance</h2>
          </nav>

          <main className="p-6 space-y-6">
            {/* Semester Select */}
            <Card className="bg-[#1C2C4A] border-blue-500">
              <CardHeader>
                <CardTitle className="text-white">Semester</CardTitle>
              </CardHeader>
              <CardContent>
                <Select>
                  <SelectTrigger className="w-full text-white bg-[#1E2A3A] border-blue-500">
                    <SelectValue placeholder="Fall 2024" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1E2A3A]">
                    <SelectItem value="fall2024">Fall 2024</SelectItem>
                    <SelectItem value="spring2025">Spring 2024</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Registered Courses */}
            <Card className="bg-[#1C2C4A] border-blue-500">
              <CardHeader>
                <CardTitle className="text-white">Registered Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {courses.map((course) => (
                      <Button key={course} variant="outline" className="w-full bg-[#1E2A3A] text-white hover:bg-blue-700 border-blue-700">
                        {course}
                      </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Attendance Table */}
            <Card className="bg-[#1C2C4A] border-blue-500 max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-white">CL2005-Database Systems - Lab</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Attendance Percentage */}
                <div className="mb-4">
                  <p className="text-sm text-gray-300 mb-1">Attendance Percentage:</p>
                  <div className="w-full bg-blue-800 rounded-full h-2.5">
                    <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '89%' }}></div>
                  </div>
                  <p className="text-right text-sm text-gray-300 mt-1">89.00%</p>
                </div>

                {/* Attendance Data Table */}
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-white">Lecture No</TableHead>
                      <TableHead className="text-white">Date</TableHead>
                      <TableHead className="text-white">Duration (In Hours)</TableHead>
                      <TableHead className="text-white">Presence</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {attendanceData.map((row) => (
                        <TableRow key={row.lectureNo}>
                          <TableCell className="text-gray-300">{row.lectureNo}</TableCell>
                          <TableCell className="text-gray-300">{row.date}</TableCell>
                          <TableCell className="text-gray-300">{row.duration}</TableCell>
                          <TableCell className={row.presence === 'P' ? 'text-green-500' : 'text-red-500'}>
                            {row.presence}
                          </TableCell>
                        </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
  );
}

export default Attendance;