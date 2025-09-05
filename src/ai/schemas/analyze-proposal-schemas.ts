
import {z} from 'zod';

/**
 * @fileOverview Schemas for the analyze-proposal-flow.
 *
 * - AnalyzeProposalInputSchema - The Zod schema for the input of the analyzeProposal function.
 * - AnalyzeProposalInput - The TS type for the input of the analyzeProposal function.
 * - AnalyzeProposalOutputSchema - The Zod schema for the output of the analyzeProposal function.
 * - AnalyzeProposalOutput - The TS type for the output of the analyzeProposal function.
 */

/**
 * Zod schema for the input of the analyzeProposal function
 * 
 * This schema validates the input for the AI-powered proposal analysis.
 */
export const AnalyzeProposalInputSchema = z.object({
  /** The citizen proposal text to be analyzed */
  proposal: z.string().describe('La propuesta ciudadana a ser analizada.'),
});
/** TypeScript type for the input of the analyzeProposal function */
export type AnalyzeProposalInput = z.infer<typeof AnalyzeProposalInputSchema>;

/**
 * Zod schema for the output of the analyzeProposal function
 * 
 * This schema defines the structure of the AI-generated analysis of a citizen proposal.
 */
export const AnalyzeProposalOutputSchema = z.object({
  /** Concise summary of the proposal in no more than two sentences */
  summary: z.string().describe('Un resumen conciso de la propuesta en no más de dos oraciones.'),
  /** List of key thematic areas addressed by the proposal */
  keyAreas: z.array(z.string()).describe('Una lista de las áreas temáticas clave que aborda la propuesta (ej. "Medio Ambiente", "Seguridad", "Salud").'),
  /** Estimated potential impact of the proposal */
  impact: z.enum(['Bajo', 'Medio', 'Alto']).describe('Una estimación del impacto potencial de la propuesta.'),
  /** General sentiment of the proposal text */
  sentiment: z.enum(['Positivo', 'Neutral', 'Negativo']).describe('El sentimiento general del texto de la propuesta.'),
});
/** TypeScript type for the output of the analyzeProposal function */
export type AnalyzeProposalOutput = z.infer<typeof AnalyzeProposalOutputSchema>;
