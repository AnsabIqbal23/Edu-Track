'use client';

import { Bell, Book, Calendar, GraduationCap, User } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import StudentSidebar from "@/components/student/sidebar";

const Dashboard = () => {
  return (
    <div className="h-screen w-full bg-[#121212] text-gray-200 grid grid-cols-[auto_1fr]">
      <StudentSidebar />
      <main className="container mx-auto p-6 h-full">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">Welcome back, John Doe</h1>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
          </div>
        </header>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Card components with details */}
          <Card className="bg-[#1E1E1E] border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Academic Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-200">GPA</p>
                    <p className="text-sm text-gray-300">3.7 / 4.0</p>
                  </div>
                  <Progress value={92.5} className="mt-2 bg-gray-700" />
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-200">Credits Completed</p>
                    <p className="text-sm text-gray-300">90 / 120</p>
                  </div>
                  <Progress value={75} className="mt-2 bg-gray-700" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-[#1E1E1E] border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Upcoming</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4 text-gray-400" />
                  <div className="ml-2 space-y-1">
                    <p className="text-sm font-medium leading-none text-gray-200">Database Systems Midterm</p>
                    <p className="text-sm text-gray-300">Oct 15, 2023 - 2:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Book className="mr-2 h-4 w-4 text-gray-400" />
                  <div className="ml-2 space-y-1">
                    <p className="text-sm font-medium leading-none text-gray-200">AI Project Submission</p>
                    <p className="text-sm text-gray-300">Oct 20, 2023 - 11:59 PM</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-[#1E1E1E] border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Recent Grades</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-200">Web Development</p>
                    <p className="text-xs text-gray-300">Assignment 3</p>
                  </div>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-100">A</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-200">Data Structures</p>
                    <p className="text-xs text-gray-300">Quiz 2</p>
                  </div>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-100">B+</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-[#1E1E1E] border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-200">Overall Attendance</p>
                    <p className="text-sm text-gray-300">92%</p>
                  </div>
                  <Progress value={92} className="mt-2 bg-gray-700" />
                </div>
                <div className="text-sm text-gray-300">
                  <p>Classes attended: 46/50</p>
                  <p>Last absence: Sep 28, 2023</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-[#1E1E1E] border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Announcements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-200">Campus Career Fair</p>
                  <p className="text-xs text-gray-300">Oct 25, 2023 - Main Hall</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-200">Library Hours Extended</p>
                  <p className="text-xs text-gray-300">Now open until 11 PM on weekdays</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-[#1E1E1E] border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Quick Links</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="w-full bg-gray-800 text-gray-200 hover:bg-gray-700 hover:text-white border-gray-700">
                  <User className="mr-2 h-4 w-4" />
                  My Profile
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-gray-800 text-gray-200 hover:bg-gray-700 hover:text-white border-gray-700">
                  <Calendar className="mr-2 h-4 w-4" />
                  Class Schedule
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-gray-800 text-gray-200 hover:bg-gray-700 hover:text-white border-gray-700">
                  <Book className="mr-2 h-4 w-4" />
                  Course Catalog
                </Button>
                <Button variant="outline" className="w-full bg-gray-800 text-gray-200 hover:bg-gray-700 hover:text-white border-gray-700">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Degree Audit
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
