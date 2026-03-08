import { test, expect } from '@playwright/test';

const API_URL = 'https://jsonplaceholder.typicode.com';

test.describe('REST API Tests', () => {
    test('should GET list of users and validate schema', async ({ request }) => {
        const response = await request.get(`${API_URL}/users`);
        expect(response.status()).toBe(200);

        const body = await response.json();
        expect(body).toBeInstanceOf(Array);
        expect(body.length).toBeGreaterThan(0);
        expect(body[0]).toHaveProperty('id');
        expect(body[0]).toHaveProperty('email');
        expect(body[0]).toHaveProperty('name');
    });

    test('should POST new post successfully', async ({ request }) => {
        const newPost = {
            title: 'Playwright API Test',
            body: 'Testing REST API with Playwright',
            userId: 1,
        };

        const response = await request.post(`${API_URL}/posts`, {
            data: newPost,
        });

        expect(response.status()).toBe(201);
        const body = await response.json();
        expect(body).toHaveProperty('id');
        expect(body.title).toBe(newPost.title);
        expect(body.userId).toBe(newPost.userId);
    });
});
