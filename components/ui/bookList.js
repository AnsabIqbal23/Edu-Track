'use client'

import { useState, useEffect } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export function BookList({ initialBooks = [] }) {
    const [books, setBooks] = useState([])
    const [filter, setFilter] = useState('all')

    useEffect(() => {
        setBooks(initialBooks)
    }, [initialBooks])

    const filteredBooks = books.filter(book =>
        filter === 'all' || book.status === filter
    )

    return (
        <div>
            <div className="mb-4">
                <Select onValueChange={setFilter} defaultValue={filter}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 text-white"> {/* Apply background color here */}
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="Available">Available</SelectItem>
                        <SelectItem value="Checked_Out">Checked Out</SelectItem>
                        <SelectItem value="In_Repair">In Repair</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Author</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredBooks.map((book) => (
                        <TableRow key={book.id}>
                            <TableCell>{book.title}</TableCell>
                            <TableCell>{book.author}</TableCell>
                            <TableCell>{book.status.replace('_', ' ')}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
