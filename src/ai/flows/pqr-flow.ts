/**
 * @fileOverview Flujo para la gestión de Peticiones, Quejas y Reclamos (PQR).
 */

import { ai } from '@/ai/genkit'; // Import ai from genkit
import {
    PQRFormInputSchema,
    PQRFormOutputSchema,
    type PQRFormInput,
    type PQRFormOutput
} from '@/ai/schemas/pqr-schema';

export async function submitPQR(input: PQRFormInput): Promise<PQRFormOutput> {
  const pqrFlow = ai.defineFlow(
    {
      name: 'pqrFlow',
      inputSchema: PQRFormInputSchema,
      outputSchema: PQRFormOutputSchema,
    },
    async (flowInput) => { // Renamed input to flowInput to avoid conflict
      console.log('PQR Recibida:', flowInput);
      
      // Aquí es donde se guardaría la PQR en una base de datos como Firestore.
      // Por ahora, solo simulamos el éxito.

      return {
          success: true,
          message: "Su PQR ha sido recibida y registrada con éxito."
      };
    }
  );
  return pqrFlow(input);
}
