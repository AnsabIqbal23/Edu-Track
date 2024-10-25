'use client';

import { Bell, Users, UserPlus, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import AdminSidebar from "@/components/admin/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const adminInfo = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+92 300 1234567",
  address: "123 Admin Street, Karachi, Pakistan",
  department: "Information Technology",
  employeeId: "ADM-001",
  joinDate: "2020-01-15",
  role: "System Administrator"
};

const Dashboard = () => {
  return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="grid grid-cols-[auto_1fr]">
          <AdminSidebar />
          <main className="p-8">
            <header className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-white mb-1">Welcome back, {adminInfo.name.split(' ')[0]}!</h1>
                <p className="text-gray-400"> Here is what happening in your dashboard today.</p>
              </div>
            </header>

            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm mb-8">
              <CardContent className="p-6">
                <div className="flex items-start gap-6">
                  <Avatar className="h-24 w-24 border-2 border-blue-500">
                    <AvatarImage src="/placeholder.svg?height=96&width=96" alt={adminInfo.name} />
                    <AvatarFallback className="text-2xl bg-blue-600">
                      {adminInfo.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-1">{adminInfo.name}</h2>
                        <p className="text-blue-400">{adminInfo.role}</p>
                      </div>
                      <Button className="bg-blue-600 hover:bg-blue-700">Edit Profile</Button>
                    </div>
                    <div className="grid grid-cols-3 gap-8">
                      {[
                        { label: 'Email', value: adminInfo.email, icon: '@' },
                        { label: 'Department', value: adminInfo.department, icon: '🏢' },
                        { label: 'Join Date', value: adminInfo.joinDate, icon: '📅' },
                      ].map((item, index) => (
                          <div key={index} className="space-y-1">
                            <p className="text-sm text-gray-400 flex items-center gap-2">
                              <span>{item.icon}</span>
                              {item.label}
                            </p>
                            <p className="text-gray-100">{item.value}</p>
                          </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Total Students",
                  value: "250",
                  icon: Users,
                  color: "bg-blue-600",
                  increase: "+12% from last month"
                },
                {
                  title: "New Registrations",
                  value: "15",
                  icon: UserPlus,
                  color: "bg-green-600",
                  increase: "+5% from last week"
                },
                {
                  title: "Upcoming Events",
                  value: "3",
                  icon: Calendar,
                  color: "bg-purple-600",
                  increase: "Next event in 2 days"
                }
              ].map((item, index) => (
                  <Card key={index} className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-white font-medium">{item.title}</CardTitle>
                      <item.icon className={`h-5 w-5 ${item.color} rounded p-1 text-white`} />
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <p className="text-2xl font-bold text-white">{item.value}</p>
                        <p className="text-sm text-gray-400">{item.increase}</p>
                        <Progress value={75} className={`h-1 ${item.color}`} />
                      </div>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </main>
        </div>
      </div>
  );
}

export default Dashboard;
