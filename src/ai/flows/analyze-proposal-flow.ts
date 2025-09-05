
'use server';
/**
 * @fileOverview Un agente de IA para analizar propuestas ciudadanas.
 *
 * - analyzeProposal - Una función que procesa y analiza el texto de una propuesta.
 */

import {ai} from '@/ai/genkit';
import {
    AnalyzeProposalInputSchema, 
    type AnalyzeProposalInput, 
    AnalyzeProposalOutputSchema,
    type AnalyzeProposalOutput
} from '@/ai/schemas/analyze-proposal-schemas';


/**
 * Genkit prompt for analyzing citizen proposals
 * 
 * This prompt defines how the AI should analyze citizen proposals,
 * providing instructions for generating structured output with
 * summary, key areas, impact assessment, and sentiment analysis.
 */
const analyzeProposalPrompt = ai.definePrompt({
  name: 'analyzeProposalPrompt',
  input: {schema: AnalyzeProposalInputSchema},
  output: {schema: AnalyzeProposalOutputSchema},
  prompt: `Eres un experto en políticas públicas y análisis de propuestas ciudadanas. Tu tarea es analizar la siguiente propuesta de un ciudadano para el gobierno de Oaxaca.

  Propuesta:
  {{{proposal}}}

  Analiza la propuesta y proporciona una respuesta estructurada en formato JSON con los siguientes campos:
  - summary: Un resumen conciso de la propuesta en no más de dos oraciones.
  - keyAreas: Una lista de las áreas temáticas clave que aborda la propuesta (ej. "Medio Ambiente", "Seguridad", "Salud", "Infraestructura").
  - impact: Una estimación del impacto potencial (Bajo, Medio, Alto) que la propuesta podría tener si se implementara.
  - sentiment: El sentimiento general del texto de la propuesta (Positivo, Neutral, Negativo).`,
});

/**
 * Genkit flow for analyzing citizen proposals
 * 
 * This flow orchestrates the analysis of citizen proposals using the
 * analyzeProposalPrompt to generate structured insights from unstructured text.
 */
const analyzeProposalFlow = ai.defineFlow(
  {
    name: 'analyzeProposalFlow',
    inputSchema: AnalyzeProposalInputSchema,
    outputSchema: AnalyzeProposalOutputSchema,
  },
  async (input) => {
    const {output} = await analyzeProposalPrompt(input);
    return output!;
  }
);

/**
 * Analyzes a citizen proposal using AI
 * 
 * This function processes a citizen proposal text and returns a structured analysis
 * including summary, key areas, impact assessment, and sentiment analysis.
 * 
 * @param input - The proposal text to analyze
 * @returns Structured analysis of the proposal
 * 
 * @example
 * ```typescript
 * const analysis = await analyzeProposal({
 *   proposal: "Me gustaría que se instalaran más luminarias en la calle principal de mi colonia para mejorar la seguridad."
 * });
 * 
 * console.log(analysis.summary); // "Propuesta para instalar más luminarias en la calle principal para mejorar la seguridad"
 * console.log(analysis.keyAreas); // ["Seguridad", "Infraestructura"]
 * console.log(analysis.impact); // "Medio"
 * console.log(analysis.sentiment); // "Positivo"
 * ```
 */
export async function analyzeProposal(input: AnalyzeProposalInput): Promise<AnalyzeProposalOutput> {
  return analyzeProposalFlow(input);
}
