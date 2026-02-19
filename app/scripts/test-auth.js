const BASE_URL = 'http://localhost:3000';

async function testAuth() {
    const phone = '9999999999'; // Test phone
    const userDetails = {
        phone,
        firstName: 'Test',
        lastName: 'User',
        email: 'test@example.com'
    };

    console.log('--- Testing Auth Flow ---');

    // 1. Check User (Should not exist initially, or exist if run before)
    try {
        console.log(`Checking user: ${phone}`);
        const checkRes = await fetch(`${BASE_URL}/api/auth/check-user`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ phone })
        });

        if (!checkRes.ok) {
            console.error('Check user failed:', checkRes.status, await checkRes.text());
            return;
        }

        const checkData = await checkRes.json();
        console.log('Check User Response:', checkData);

        if (!checkData.exists) {
            // 2. Register
            console.log('User does not exist. Registering...');
            const regRes = await fetch(`${BASE_URL}/api/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userDetails)
            });

            if (!regRes.ok) {
                console.error('Registration failed:', regRes.status, await regRes.text());
                return;
            }

            const regData = await regRes.json();
            console.log('Registration Successful:', regData);

            // Check for cookie
            const cookie = regRes.headers.get('set-cookie');
            console.log('Set-Cookie Header:', cookie ? 'Present' : 'Missing');

        } else {
            console.log('User exists.');
        }

        // 3. Login
        console.log('Logging in...');
        const loginRes = await fetch(`${BASE_URL}/api/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ phone })
        });

        if (!loginRes.ok) {
            console.error('Login failed:', loginRes.status, await loginRes.text());
            return;
        }

        const loginData = await loginRes.json();
        console.log('Login Successful:', loginData);

        const cookie = loginRes.headers.get('set-cookie');
        console.log('Set-Cookie Header:', cookie ? 'Present' : 'Missing');
        if (cookie) console.log('Cookie value:', cookie.split(';')[0]);

    } catch (err) {
        console.error('Test failed:', err);
    }
}

testAuth();
