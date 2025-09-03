'use server';
/**
 * @fileOverview Flujo para la gestión de Peticiones, Quejas y Reclamos (PQR).
 */

import { ai } from '@/ai/genkit';
import {
    PQRFormInputSchema,
    PQRFormOutputSchema,
    type PQRFormInput,
    type PQRFormOutput
} from '@/ai/schemas/pqr-schema';

const pqrFlow = ai.defineFlow(
  {
    name: 'pqrFlow',
    inputSchema: PQRFormInputSchema,
    outputSchema: PQRFormOutputSchema,
  },
  async (input) => {
    console.log('PQR Recibida:', input);
    
    // Aquí es donde se guardaría la PQR en una base de datos como Firestore.
    // Por ahora, solo simulamos el éxito.

    return {
        success: true,
        message: "Su PQR ha sido recibida y registrada con éxito."
    };
  }
);

export async function submitPQR(input: PQRFormInput): Promise<PQRFormOutput> {
  return pqrFlow(input);
}
