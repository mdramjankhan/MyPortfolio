// app/api/user/route.js
// export async function GET(request) {
//     return new Response(JSON.stringify({ message: 'Hello, user!' }), { status: 200 });
// }


export async function GET(request) {
    // Handle GET request
    return new Response(JSON.stringify({ message: 'GET request received' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function POST(request) {
    // Handle POST request
    const body = await request.json(); // Parse the request body
    const { name } = body;

    return new Response(JSON.stringify({ message: `Hello, ${name}!` }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}
