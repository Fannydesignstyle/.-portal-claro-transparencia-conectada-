import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

/**
 * Genkit AI instance configured with Google AI plugin
 * 
 * This instance is configured to use the Gemini 2.5 Flash model
 * for natural language processing tasks throughout the application.
 * 
 * @see https://firebase.google.com/docs/genkit
 * @see https://ai.google.dev/gemini-api/docs/models/gemini
 */
export const ai = genkit({
  plugins: [googleAI()],
  model: 'googleai/gemini-2.5-flash',
});