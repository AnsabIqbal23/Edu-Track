'use client';
import { useState } from 'react';
import { Trash2, AlertCircle } from 'lucide-react'; // Add the missing import for AlertCircle
import LibrarianSidebar from '@/components/librarian/sidebar';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"; // Added CardFooter import
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog"; // Added DialogDescription import
import { Label } from "@/components/ui/label";

// Mock book data
const mockBooks = [
    { id: '1', title: 'To Kill a Mockingbird', author: 'Harper Lee', status: 'Available' },
    { id: '2', title: '1984', author: 'George Orwell', status: 'Checked Out' },
    { id: '3', title: 'Pride and Prejudice', author: 'Jane Austen', status: 'Available' },
    { id: '4', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', status: 'In Repair' },
    { id: '5', title: 'Moby Dick', author: 'Herman Melville', status: 'Available' },
];

const BookDeleteFormComponent = () => {
    const [selectedBook, setSelectedBook] = useState(null);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [deleteError, setDeleteError] = useState(null);

    const handleBookSelect = (bookId) => {
        const book = mockBooks.find(b => b.id === bookId);
        setSelectedBook(book || null);
        setDeleteError(null);
    };

    const handleDelete = async () => {
        if (!selectedBook) return;

        try {
            // Simulating an API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            console.log(`Deleted book: ${selectedBook.title}`);
            setIsDeleteDialogOpen(false);
            setSelectedBook(null);
        } catch (error) {
            setDeleteError('An error occurred while deleting the book. Please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
            <div className="grid grid-cols-[auto_1fr]">
                <LibrarianSidebar />
                <main className="p-8">
                    <div className="max-w-2xl mx-auto">
                        <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="text-white">Delete Book</CardTitle>
                                <CardDescription className="text-gray-400">Remove a book from the library collection</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="bookSelect">Select Book</Label>
                                        <Select onValueChange={handleBookSelect}>
                                            <SelectTrigger id="bookSelect">
                                                <SelectValue placeholder="Select a book" />
                                            </SelectTrigger>
                                            <SelectContent position="popper" className="bg-gray-700 text-white rounded-md shadow-lg">
                                                {mockBooks.map((book) => (
                                                    <SelectItem key={book.id} value={book.id} className="hover:bg-gray-600"     >
                                                        {book.title} by {book.author}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                {deleteError && (
                                    <Alert variant="destructive" className="mt-4">
                                        <AlertCircle className="h-4 w-4" />
                                        <AlertTitle>Error</AlertTitle>
                                        <AlertDescription>{deleteError}</AlertDescription>
                                    </Alert>
                                )}
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <Button variant="outline">Cancel</Button>
                                <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
                                    <DialogTrigger asChild>
                                        <Button
                                            variant="destructive"
                                            disabled={!selectedBook}
                                            onClick={() => setIsDeleteDialogOpen(true)}
                                        >
                                            <Trash2 className="mr-2 h-4 w-4" />
                                            Delete Book
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Are you sure you want to delete this book?</DialogTitle>
                                            <DialogDescription>
                                                This action cannot be undone. This will permanently delete the book &amp;apos;{selectedBook?.title}&amp;apos; by {selectedBook?.author} and remove it from the library collection.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <DialogFooter>
                                            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
                                                Cancel
                                            </Button>
                                            <Button variant="destructive" onClick={handleDelete}>
                                                Delete
                                            </Button>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            </CardFooter>
                        </Card>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default BookDeleteFormComponent;
