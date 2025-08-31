
import {z} from 'zod';

/**
 * @fileOverview Schemas for the analyze-proposal-flow.
 *
 * - AnalyzeProposalInputSchema - The Zod schema for the input of the analyzeProposal function.
 * - AnalyzeProposalInput - The TS type for the input of the analyzeProposal function.
 * - AnalyzeProposalOutputSchema - The Zod schema for the output of the analyzeProposal function.
 * - AnalyzeProposalOutput - The TS type for the output of the analyzeProposal function.
 */

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
