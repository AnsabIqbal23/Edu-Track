"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import LibrarianSidebar from "@/components/librarian/sidebar";

export default function AddBook() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            title: "",
            author: "",
            isbn: "",
            publisher: "",
        },
    });

    const [successMessage, setSuccessMessage] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
        setSuccessMessage(true);
        setTimeout(() => setSuccessMessage(false), 3000);  // Hide after 3 seconds
        reset();
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
            <div className="grid grid-cols-[auto_1fr]">
                <LibrarianSidebar />

                <main className="p-8">
                    <header className="mb-8">
                        <h1 className="text-3xl font-bold text-white mb-2">Add New Book</h1>
                        <p className="text-gray-400">Fill out the form to add a new book to the library.</p>
                    </header>

                    <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                        <CardHeader className="p-6">
                            <h2 className="text-2xl font-bold text-white">Book Information</h2>
                        </CardHeader>
                        <CardContent className="p-6">
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                {/* Book Title */}
                                <div className="space-y-2">
                                    <Label htmlFor="title" className="text-white">Title</Label>
                                    <Input
                                        id="title"
                                        {...register("title", { required: "Title is required" })}
                                        className="bg-gray-700 text-white border-gray-600"
                                    />
                                    {errors.title && <p className="text-sm text-red-500">{errors.title.message}</p>}
                                </div>

                                {/* Author */}
                                <div className="space-y-2">
                                    <Label htmlFor="author" className="text-white">Author</Label>
                                    <Input
                                        id="author"
                                        {...register("author", { required: "Author is required" })}
                                        className="bg-gray-700 text-white border-gray-600"
                                    />
                                    {errors.author && <p className="text-sm text-red-500">{errors.author.message}</p>}
                                </div>

                                {/* ISBN */}
                                <div className="space-y-2">
                                    <Label htmlFor="isbn" className="text-white">ISBN</Label>
                                    <Input
                                        id="isbn"
                                        {...register("isbn", {
                                            required: "ISBN is required",
                                            minLength: { value: 10, message: "ISBN must be at least 10 characters" },
                                            maxLength: { value: 13, message: "ISBN must not exceed 13 characters" },
                                        })}
                                        className="bg-gray-700 text-white border-gray-600"
                                    />
                                    {errors.isbn && <p className="text-sm text-red-500">{errors.isbn.message}</p>}
                                </div>

                                {/* Publisher */}
                                <div className="space-y-2">
                                    <Label htmlFor="publisher" className="text-white">Publisher</Label>
                                    <Input
                                        id="publisher"
                                        {...register("publisher", { required: "Publisher is required" })}
                                        className="bg-gray-700 text-white border-gray-600"
                                    />
                                    {errors.publisher && <p className="text-sm text-red-500">{errors.publisher.message}</p>}
                                </div>

                                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                                    Add Book
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    {/* Success Message Popup */}
                    {successMessage && (
                        <div className="fixed bottom-5 right-5 bg-green-600 text-white p-3 rounded-md shadow-md transition-opacity duration-300">
                            Book added successfully!
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}
