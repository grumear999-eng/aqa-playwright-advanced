import { test, expect } from '@playwright/test';

// We use the publicly available SpaceX GraphQL API for demonstration
const GRAPHQL_ENDPOINT = 'https://spacex-production.up.railway.app/';

test.describe('GraphQL API Tests (Advanced)', () => {
    test('should fetch company info using GraphQL query', async ({ request }) => {
        const query = `
      query {
        company {
          ceo
          employees
          founded
          founder
          name
        }
      }
    `;

        const response = await request.post(GRAPHQL_ENDPOINT, {
            data: {
                query: query,
            }
        });

        expect(response.ok()).toBeTruthy();
        const responseBody = await response.json();

        // Assertions
        expect(responseBody.data).toBeDefined();
        expect(responseBody.data.company).toBeDefined();
        expect(responseBody.data.company.name).toBe('SpaceX');
        expect(responseBody.data.company.founder).toBe('Elon Musk');
    });

    test('should fetch launches with variables', async ({ request }) => {
        const query = `
      query getLaunches($limit: Int!) {
        launchesPast(limit: $limit) {
          mission_name
          launch_date_local
          rocket {
            rocket_name
          }
        }
      }
    `;

        const response = await request.post(GRAPHQL_ENDPOINT, {
            data: {
                query: query,
                variables: {
                    limit: 2
                }
            }
        });

        expect(response.status()).toBe(200);
        const body = await response.json();
        expect(body.data.launchesPast).toHaveLength(2);
        expect(body.data.launchesPast[0]).toHaveProperty('mission_name');
    });
});
