// "use server"

// use POST to create user in the database.
export async function createUser(request) {
    const { email, password, fullName, dob, childrenCount, termsAccepted } = await request.json();

    if (!email || !password || !fullName || !dob || childrenCount === undefined || !termsAccepted) {
        return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    for (const child of children) {
        if (!child.firstName || !child.lastName || !child.email) {
            return NextResponse.json({ error: 'All child fields are required' }, { status: 400 });
        }
    }

    const newUser = { email, password, fullName, dob, children, termsAccepted };
    users.push(newUser);

    return NextResponse.json({ message: 'User created successfully', user: newUser }, { status: 201 });
}