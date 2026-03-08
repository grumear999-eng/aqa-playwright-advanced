import { test, expect } from '@playwright/test';

test.describe('REST API Tests', () => {
    const API_URL = 'https://reqres.in/api';

    test('should GET list of users and validate schema', async ({ request }) => {
        const response = await request.get(`${API_URL}/users?page=2`);
        expect(response.status()).toBe(200);

        const body = await response.json();
        expect(body.page).toBe(2);
        expect(body.data).toBeInstanceOf(Array);
        expect(body.data.length).toBeGreaterThan(0);
        expect(body.data[0]).toHaveProperty('id');
        expect(body.data[0]).toHaveProperty('email');
    });

    test('should POST new user successfully', async ({ request }) => {
        const newUser = {
            name: 'Aleksandr',
            job: 'QA Engineer',
        };

        const response = await request.post(`${API_URL}/users`, {
            data: newUser,
        });

        expect(response.status()).toBe(201);
        const body = await response.json();
        expect(body).toHaveProperty('id');
        expect(body.name).toBe(newUser.name);
        expect(body.job).toBe(newUser.job);
    });
});
