export async function GET(request) {
    const authHeader = request.headers.get('authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return new Response(
            JSON.stringify({ error: 'Unauthorized' }),
            { status: 401, headers: { 'Content-Type': 'application/json' } }
        );
    }

    const token = authHeader.split(' ')[1];

    // Simulate token verification and fetching user role and status from the backend
    if (token === 'mock-jwt-token') {
        const user = {
            role: 'student',  // Example role, replace with actual data from your backend
            status: 'approved'  // Example status

            // role: 'admin',
            // role: 'parent',
            // role: 'teacher',
            // role: 'librarian',
        };

        return new Response(
            JSON.stringify({ user }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } else {
        return new Response(
            JSON.stringify({ error: 'Invalid token' }),
            { status: 401, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
