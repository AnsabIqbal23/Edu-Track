'use client'
import React, { useState, useEffect } from 'react'
import { BookList } from '@/components/ui/bookList'
import { SearchForm } from '@/components/ui/searchForm'
import LibrarianSidebar from '@/components/librarian/sidebar'

async function getBooks() {
    // Data fetch from api
    return [
        { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', status: 'Available' },
        { id: 2, title: '1984', author: 'George Orwell', status: 'Checked_Out' },
        { id: 3, title: 'Pride and Prejudice', author: 'Jane Austen', status: 'Available' },
        { id: 4, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', status: 'In_Repair' },
        { id: 5, title: 'Moby Dick', author: 'Herman Melville', status: 'Available' },
    ]
}

export default function ViewBooksPage() {
    const [books, setBooks] = useState([])
    const [filteredBooks, setFilteredBooks] = useState([])

    useEffect(() => {
        const fetchBooks = async () => {
            const data = await getBooks()
            setBooks(data)
            setFilteredBooks(data) // Initial filteredBooks is all books
        }
        fetchBooks()
    }, [])

    const handleSearch = (searchTerm) => {
        const filtered = books.filter(book =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setFilteredBooks(filtered)
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
            <div className="grid grid-cols-[auto_1fr]">
                <LibrarianSidebar />
                <main className="p-8">
                    <header className="flex justify-between items-center mb-8">
                        <h1 className="text-3xl font-bold text-white mb-1">Library Book Management</h1>
                    </header>

                    <div className="mb-8">
                        <SearchForm onSearch={handleSearch} />
                    </div>

                    <div className="bg-gray-800/50 border-gray-700 p-6 rounded-lg backdrop-blur-sm">
                        <BookList initialBooks={filteredBooks} />
                    </div>
                </main>
            </div>
        </div>
    )
}