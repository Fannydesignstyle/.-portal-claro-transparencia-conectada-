import {z} from 'zod';

export const SearchInputSchema = z.object({
  query: z.string(),
});

export const SearchResultItemSchema = z.object({
  title: z.string(),
  url: z.string(),
  description: z.string(),
});

export const SearchOutputSchema = z.object({
  results: z.array(SearchResultItemSchema),
});

export type SearchInput = z.infer<typeof SearchInputSchema>;
export type SearchResultItem = z.infer<typeof SearchResultItemSchema>;
export type SearchOutput = z.infer<typeof SearchOutputSchema>;
