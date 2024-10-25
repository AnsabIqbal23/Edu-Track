'use client'

import { useState, useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Upload, Printer, Check } from 'lucide-react'
import Sidebar from "@/components/student/sidebar" // Import your Sidebar component

// Mock data for the fee challan
const feeChallan = {
  studentName: "Ali Yahya Amer",
  rollNumber: "22K-4417",
  semester: "Fall 2023",
  dueDate: "2023-12-31",
  items: [
    { description: "Tuition Fee", amount: 50000 },
    { description: "Library Fee", amount: 2000 },
    { description: "Computer Lab Fee", amount: 3000 },
    { description: "Examination Fee", amount: 5000 },
  ]
}

export default function Fees() {
  const [uploadedFile, setUploadedFile] = useState(null)
  const fileInputRef = useRef(null)

  const totalAmount = feeChallan.items.reduce((sum, item) => sum + item.amount, 0)

  const handleFileUpload = (event) => {
    const file = event.target.files?.[0]
    if (file && file.type === "image/png") {
      setUploadedFile(file)
    } else {
      alert("Please upload a PNG file.")
    }
  }

  const handlePrint = () => {
    window.print()
  }

  return (
      <div className="h-screen bg-[#121212] text-gray-200 grid grid-cols-[auto_1fr]">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content area */}
        <div className="p-6 bg-black w-full">
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Fee Challan Card */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center text-gray-100">Fee Challan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Student Info */}
                <div className="grid grid-cols-2 gap-4 text-gray-200">
                  <div><span className="font-semibold">Student Name:</span> {feeChallan.studentName}</div>
                  <div><span className="font-semibold">Roll Number:</span> {feeChallan.rollNumber}</div>
                  <div><span className="font-semibold">Semester:</span> {feeChallan.semester}</div>
                  <div><span className="font-semibold">Due Date:</span> {feeChallan.dueDate}</div>
                </div>

                {/* Fee Table */}
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-gray-300">Description</TableHead>
                      <TableHead className="text-right text-gray-300">Amount (PKR)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {feeChallan.items.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium text-gray-200">{item.description}</TableCell>
                          <TableCell className="text-right text-gray-200">{item.amount.toLocaleString()}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                      <TableCell className="font-semibold text-gray-100">Total</TableCell>
                      <TableCell className="text-right font-semibold text-gray-100">{totalAmount.toLocaleString()}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>

                {/* File Upload */}
                <div className="print:hidden">
                  <Label htmlFor="png-upload" className="block text-sm font-medium text-gray-200 mb-2">
                    Upload Payment Proof (PNG only)
                  </Label>
                  <div className="flex items-center space-x-2">
                    <Input
                        id="png-upload"
                        type="file"
                        accept=".png"
                        onChange={handleFileUpload}
                        ref={fileInputRef}
                        className="hidden"
                    />
                    <Button onClick={() => fileInputRef.current?.click()} variant="secondary" className="w-full">
                      <Upload className="mr-2 h-4 w-4" /> Upload PNG
                    </Button>
                    {uploadedFile && (
                        <span className="text-green-500 flex items-center">
                      <Check className="mr-1 h-4 w-4" /> Uploaded
                    </span>
                    )}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between print:hidden">
                <Button onClick={handlePrint} variant="outline">
                  <Printer className="mr-2 h-4 w-4" /> Print Challan
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
  )
}