import {z} from 'zod';

/**
 * Zod schema for search input
 * 
 * This schema validates the search query input.
 */
export const SearchInputSchema = z.object({
  /** The search query string */
  query: z.string(),
});

/**
 * Zod schema for a search result item
 * 
 * This schema defines the structure of an individual search result.
 */
export const SearchResultItemSchema = z.object({
  /** Title of the search result */
  title: z.string(),
  /** URL path to the search result */
  url: z.string(),
  /** Description or summary of the search result */
  description: z.string(),
});

/**
 * Zod schema for search output
 * 
 * This schema defines the structure of the search results response.
 */
export const SearchOutputSchema = z.object({
  /** Array of search result items */
  results: z.array(SearchResultItemSchema),
});

/**
 * TypeScript type for search input, derived from the Zod schema
 */
export type SearchInput = z.infer<typeof SearchInputSchema>;

/**
 * TypeScript type for a search result item, derived from the Zod schema
 */
export type SearchResultItem = z.infer<typeof SearchResultItemSchema>;

/**
 * TypeScript type for search output, derived from the Zod schema
 */
export type SearchOutput = z.infer<typeof SearchOutputSchema>;
