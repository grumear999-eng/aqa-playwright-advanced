import { test, expect } from '@playwright/test';

const GRAPHQL_ENDPOINT = 'https://countries.trevorblades.com/';

test.describe('GraphQL API Tests (Advanced)', () => {
  test('should fetch country info using GraphQL query', async ({ request }) => {
    const query = `
      query {
        country(code: "BR") {
          name
          native
          capital
          emoji
          currency
          languages {
            code
            name
          }
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

    expect(responseBody.data).toBeDefined();
    expect(responseBody.data.country).toBeDefined();
    expect(responseBody.data.country.name).toBe('Brazil');
    expect(responseBody.data.country.capital).toBe('Brasília');
  });

  test('should fetch countries by continent with variables', async ({ request }) => {
    const query = `
      query getCountriesByContinent($continentCode: ID!) {
        continent(code: $continentCode) {
          name
          countries {
            name
            code
          }
        }
      }
    `;

    const response = await request.post(GRAPHQL_ENDPOINT, {
      data: {
        query: query,
        variables: {
          continentCode: "EU"
        }
      }
    });

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.data.continent.name).toBe('Europe');
    expect(body.data.continent.countries.length).toBeGreaterThan(0);
    expect(body.data.continent.countries[0]).toHaveProperty('name');
  });
});
