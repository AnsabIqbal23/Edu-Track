// // app/studentPage/attendance/page.js
// 'use client';

// import { CheckCircle } from "lucide-react"; // Importing an icon
// import { Button } from "@/components/ui/button"; // Ensure you have a Button component
// import StudentSidebar from "@/components/student/sidebar";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Ensure you have Card components

// const Attendance = () => {
//   return (
//     <div className="h-screen w-full bg-[#121212] text-gray-200 grid grid-cols-[auto_1fr] items-center justify-center">
//         <StudentSidebar />
//       <Card className="bg-[#1E1E1E] border-gray-800 w-96">
//         <CardHeader>
//           <CardTitle className="text-white text-center">Attendance Status</CardTitle>
//         </CardHeader>
//         <CardContent className="flex flex-col items-center justify-center text-center space-y-4">
//           <CheckCircle className="h-16 w-16 text-green-500" /> {/* Icon for full attendance */}
//           <h2 className="text-xl font-bold text-white">Your Attendance is Full!</h2>
//           <p className="text-gray-300">You have attended all your classes this semester.</p>
//           <Button variant="outline" className="mt-4" onClick={() => window.history.back()}>Go Back</Button>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// export default Attendance;


'use client';

import { CheckCircle } from "lucide-react"; // Importing an icon
import { Button } from "@/components/ui/button"; // Ensure you have a Button component
import StudentSidebar from "@/components/student/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Ensure you have Card components

const Attendance = () => {
  return (
    <div className="h-screen w-full bg-[#121212] text-gray-200 grid grid-cols-[auto_1fr] place-items-center">
      {/* Sidebar */}
      <StudentSidebar />

      {/* Attendance Card */}
      <Card className="bg-[#1E1E1E] border-gray-800 w-96">
        <CardHeader>
          <CardTitle className="text-white text-center">Attendance Status</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center text-center space-y-4">
          <CheckCircle className="h-16 w-16 text-green-500" /> {/* Icon for full attendance */}
          <h2 className="text-xl font-bold text-white">Your Attendance is Full!</h2>
          <p className="text-gray-300">You have attended all your classes this semester.</p>
          <Button variant="outline" className="mt-4" onClick={() => window.history.back()}>Go Back</Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Attendance;
