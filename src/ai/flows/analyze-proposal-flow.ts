'use server';
/**
 * @fileOverview Un agente de IA para analizar propuestas ciudadanas.
 *
 * - analyzeProposal - Una función que procesa y analiza el texto de una propuesta.
 * - AnalyzeProposalInput - El tipo de entrada para la función analyzeProposal.
 * - AnalyzeProposalOutput - El tipo de retorno para la función analyzeProposal.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

export const AnalyzeProposalInputSchema = z.object({
  proposal: z.string().describe('La propuesta ciudadana a ser analizada.'),
});
export type AnalyzeProposalInput = z.infer<typeof AnalyzeProposalInputSchema>;

export const AnalyzeProposalOutputSchema = z.object({
  summary: z.string().describe('Un resumen conciso de la propuesta en no más de dos oraciones.'),
  keyAreas: z.array(z.string()).describe('Una lista de las áreas temáticas clave que aborda la propuesta (ej. "Medio Ambiente", "Seguridad", "Salud").'),
  impact: z.enum(['Bajo', 'Medio', 'Alto']).describe('Una estimación del impacto potencial de la propuesta.'),
  sentiment: z.enum(['Positivo', 'Neutral', 'Negativo']).describe('El sentimiento general del texto de la propuesta.'),
});
export type AnalyzeProposalOutput = z.infer<typeof AnalyzeProposalOutputSchema>;

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

export async function analyzeProposal(input: AnalyzeProposalInput): Promise<AnalyzeProposalOutput> {
  return analyzeProposalFlow(input);
}
