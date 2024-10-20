'use client'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Sidebar from "@/components/student/sidebar" // Import your Sidebar component

// Sample data for borrowed books
const page = [
  { id: 1, name: "To Kill a Mockingbird", borrowedDate: new Date("2023-10-15"), returnDate: new Date("2023-10-29") },
  { id: 2, name: "1984", borrowedDate: new Date("2023-10-18"), returnDate: new Date("2023-11-01") },
  { id: 3, name: "The Great Gatsby", borrowedDate: new Date("2023-10-20"), returnDate: new Date("2023-11-03") },
  { id: 4, name: "Pride and Prejudice", borrowedDate: new Date("2023-10-22"), returnDate: new Date("2023-11-05") },
  { id: 5, name: "The Catcher in the Rye", borrowedDate: new Date("2023-10-25"), returnDate: new Date("2023-11-08") },
]

// Function to format dates
const formatDate = (date) => {
  return date.toLocaleDateString("en-US", { year: 'numeric', month: 'short', day: 'numeric' });
}

const Books = () => {
  return (
      <div className="min-h-screen bg-[#121212] text-gray-200 grid grid-cols-[auto_1fr]">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content area */}
        <div className="p-6 bg-black">
          <div className="max-w-5xl mx-auto space-y-8">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Borrowed Books</CardTitle>
                <CardDescription>A list of books currently borrowed by students.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {page.map((book) => (
                      <Card key={book.id} className="bg-gray-800 border-gray-700">
                        <CardHeader>
                          <CardTitle className="text-lg font-bold">{book.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-400">
                            <strong>Borrowed Date:</strong> {formatDate(book.borrowedDate)}
                          </p>
                          <p className="text-gray-400">
                            <strong>Return Date:</strong> {formatDate(book.returnDate)}
                          </p>
                        </CardContent>
                      </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
  )
}

export default Books;