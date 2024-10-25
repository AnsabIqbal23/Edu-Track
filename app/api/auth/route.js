export async function POST(request) {
    const { email, password } = await request.json();

    // Simulating user authentication (replace with actual logic)
    if (email === 'test@example.com' && password === 'ansab') {
        // const role = 'student';  // For example, role could be 'admin', 'teacher', etc.
        // const status = 'approved';  // Only applicable for students

        const role = 'admin';
        // const role = 'parent';
        // const role = 'teacher';
        // const role = 'librarian';

        return new Response(
            JSON.stringify({
                token: 'mock-jwt-token',
                // user: { email: 'test@example.com', name: 'Test User', role, status }
                user: { email: 'test@example.com', name: 'Test User', role}
            }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    }
    else {
        return new Response(
            JSON.stringify({ error: 'Invalid credentials' }),
            { status: 401, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
