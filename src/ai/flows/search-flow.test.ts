import { searchPlatform } from './search-flow';

describe('Search Flow', () => {
  it('should return relevant results for a given query', async () => {
    const input = { query: 'manifiesto' };
    const result = await searchPlatform(input);

    expect(result.results).toEqual([
      {
        title: 'Manifiesto de Transparencia Conectada',
        url: '/informacion-institucional/manifiesto',
        description: 'Nuestros principios y valores fundamentales.',
      },
    ]);
  });

  it('should return multiple results for a broad query', async () => {
    const input = { query: 'institucional' };
    const result = await searchPlatform(input);

    expect(result.results.length).toBe(5);
  });

  it('should be case-insensitive', async () => {
    const input = { query: 'MANIFIESTO' };
    const result = await searchPlatform(input);

    expect(result.results).toEqual([
      {
        title: 'Manifiesto de Transparencia Conectada',
        url: '/informacion-institucional/manifiesto',
        description: 'Nuestros principios y valores fundamentales.',
      },
    ]);
  });

  it('should return an empty array for a query with no results', async () => {
    const input = { query: 'nonexistent' };
    const result = await searchPlatform(input);

    expect(result.results).toEqual([]);
  });
});
