"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import axios from 'axios';

const ProtectedPage = () => {
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = Cookies.get('token');

                if (!token) {
                    throw new Error('No token found');
                }

                // Send the token to the backend to get role and status
                const response = await axios.get('/api/auth/protected', {
                    headers: { Authorization: `Bearer ${token}` }
                });

                const { role, status } = response.data.user;  // Get role and status from backend

                // Redirect logic based on role and status
                if (role === 'admin') {
                    await router.push('/adminPage');
                } else if (role === 'teacher') {
                    await router.push('/teacherPage');
                } else if (role === 'librarian') {
                    await router.push('/librarianPage');
                }else if (role === 'parent') {
                    await router.push('/parentPage');
                }else if (role === 'student') {
                    if (status === 'pending') {
                        setMessage('Your account is pending approval. Please contact admin for more information.');
                    } else if (status === 'approved') {
                        await router.push('/studentPage/dashboard');
                    }
                }
            } catch (err) {
                setError('You are not authorized to view this page');
                router.push('/auth/login');
            }
        };

        fetchData();
    }, [router]);

    if (error) return <p>{error}</p>;

    if (message) {
        return (
            <div style={styles.messageContainer}>
                <h2 style={styles.title}>Account Approval Pending</h2>
                <p style={styles.message}>{message}</p>
                <p style={styles.note}>Thank you for your patience!</p>
            </div>
        );
    }
};

const styles = {
    messageContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        margin: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    },
    title: {
        color: '#e67e22',
        marginBottom: '10px',
    },
    message: {
        color: '#333',
        fontSize: '16px',
        margin: '10px 0',
    },
    note: {
        color: '#555',
        fontSize: '14px',
    },
};

export default ProtectedPage;
