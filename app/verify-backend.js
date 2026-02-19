const http = require('http');

async function testBackend() {
    const baseUrl = 'http://localhost:3000/api';
    let cookie = '';

    console.log('--- Starting Backend Verification ---');

    // Helper for requests
    const request = (method, path, body = null, headers = {}) => {
        return new Promise((resolve, reject) => {
            const options = {
                hostname: 'localhost',
                port: 3000,
                path: '/api' + path,
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'Cookie': cookie,
                    ...headers
                }
            };

            const req = http.request(options, (res) => {
                let data = '';
                res.on('data', (chunk) => data += chunk);
                res.on('end', () => {
                    // Capture cookie
                    if (res.headers['set-cookie']) {
                        cookie = res.headers['set-cookie'].map(c => c.split(';')[0]).join('; ');
                    }
                    resolve({ status: res.statusCode, body: data ? JSON.parse(data) : {} });
                });
            });

            req.on('error', reject);
            if (body) req.write(JSON.stringify(body));
            req.end();
        });
    };

    try {
        // 1. Check User (New)
        console.log('1. Checking non-existent user...');
        // Generate random phone to ensure new user
        const phone = '99999' + Math.floor(Math.random() * 100000);
        const checkRes = await request('POST', '/auth/check-user', { phone });
        console.log('Check User:', checkRes.body);

        if (checkRes.body.exists) {
            console.log('User unexpectedly exists. Skipping registration test with this number.');
        } else {
            // 2. Register
            console.log('2. Registering new user...');
            const regRes = await request('POST', '/auth/register', {
                phone,
                firstName: 'Test',
                lastName: 'User',
                email: 'test@example.com'
            });
            console.log('Register:', regRes.status, regRes.body.success);
        }

        // 3. Get Me
        console.log('3. Getting current user (Me)...');
        const meRes = await request('GET', '/auth/me');
        console.log('Me:', meRes.body.user ? meRes.body.user.firstName : 'No User');

        // 4. Add to Cart
        console.log('4. Adding to Cart...');
        const addCartRes = await request('POST', '/cart', {
            productId: 101,
            quantity: 2,
            name: 'Test Guitar',
            price: 5000,
            image: '/test.jpg'
        });
        console.log('Add Cart:', addCartRes.status, 'Items:', addCartRes.body.items?.length);

        // 5. Get Cart
        console.log('5. Viewing Cart...');
        const getCartRes = await request('GET', '/cart');
        console.log('View Cart:', getCartRes.body.items?.length === 1 ? 'Success' : 'Fail');

        // 6. Logout
        console.log('6. Logging out...');
        await request('POST', '/auth/logout');

        cookie = ''; // Clear client cookie
        const meRes2 = await request('GET', '/auth/me');
        console.log('Me after logout:', meRes2.body.user);

    } catch (e) {
        console.error('Test Failed:', e);
    }
}

testBackend();
