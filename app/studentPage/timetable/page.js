'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import StudentSidebar from "@/components/student/sidebar";

const timetableData = {
  MONDAY: [
    { code: 'E-5 CS', name: 'DB BCS-5J', instructor: 'Javeria Farooq', startTime: '08:00 AM', endTime: '08:55 AM' },
    { code: 'E-5 CS', name: 'DAA BCS-5J', instructor: 'Dr. Fahad Sherwani', startTime: '09:00 AM', endTime: '09:55 AM' },
    { code: 'E-5 CS', name: 'PDC BCS-5J', instructor: 'Dr. Nausheen Shoaib', startTime: '11:00 AM', endTime: '11:55 AM' },
    { code: 'E-5 CS', name: 'GT BCS-5J', instructor: 'Abdul Basit', startTime: '12:00 PM', endTime: '12:55 PM' },
    { code: 'E-5 CS', name: 'SDA BCS-5J', instructor: 'Engr. Abdul Rahman', startTime: '01:00 PM', endTime: '01:55 PM' },
  ],
  TUESDAY: [
    { code: 'E-5 CS', name: 'DAA BCS-5J', instructor: 'Dr. Fahad Sherwani', startTime: '09:00 AM', endTime: '09:55 AM' },
    { code: 'E-5 CS', name: 'GT BCS-5J', instructor: 'Abdul Basit', startTime: '12:00 PM', endTime: '12:55 PM' },
  ],
  WEDNESDAY: [
    { code: 'E-5 CS', name: 'DAA BCS-5J', instructor: 'Dr. Fahad Sherwani', startTime: '09:00 AM', endTime: '09:55 AM' },
    { code: 'E-5 CS', name: 'PDC BCS-5J', instructor: 'Dr. Nausheen Shoaib', startTime: '11:00 AM', endTime: '11:55 AM' },
    { code: 'E-5 CS', name: 'GT BCS-5J', instructor: 'Abdul Basit', startTime: '12:00 PM', endTime: '12:55 PM' },
  ],
}

const Timetable = () => {
  const [activeDay, setActiveDay] = useState('MONDAY')

  return (
      <div className="h-screen w-full bg-[#121212] text-gray-200 grid grid-cols-[auto_1fr]">
        <StudentSidebar />
        <div className="p-6 bg-black">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white text-center text-2xl">Timetable</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Tabs defaultValue="MONDAY" onValueChange={setActiveDay} className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-gray-800 mb-4">
                  {Object.keys(timetableData).map((day) => (
                      <TabsTrigger
                          key={day}
                          value={day}
                          className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-gray-400 py-2">
                        {day}
                      </TabsTrigger>
                  ))}
                </TabsList>
                {Object.entries(timetableData).map(([day, schedule]) => (
                    <TabsContent key={day} value={day} className="mt-0">
                      <div className="mb-4">
                        <h3 className="text-lg font-bold text-white bg-gray-700 p-2 rounded">
                          {day}
                        </h3>
                        {schedule.map((class_, index) => (
                            <div key={index} className="flex items-center mb-2 last:mb-0 bg-gray-800 rounded-lg overflow-hidden">
                              <div className="flex-grow p-3">
                                <div className="font-bold text-white">{class_.code}</div>
                                <div className="text-gray-300">{class_.name}</div>
                                <div className="text-sm text-gray-400">{class_.instructor}</div>
                              </div>
                              <div className="flex items-center bg-gray-900 p-3 text-white space-x-2">
                                <div className="text-lg font-semibold">{class_.startTime}</div>
                                <div className="text-sm text-gray-400">To</div>
                                <div className="text-lg font-semibold">{class_.endTime}</div>
                              </div>
                            </div>
                        ))}
                      </div>
                    </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
  );
}

export default Timetable;
