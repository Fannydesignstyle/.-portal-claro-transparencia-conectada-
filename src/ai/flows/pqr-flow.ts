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

/**
 * Submits a PQR (Petición, Queja, Reclamo) form
 * 
 * This function processes a PQR submission using a Genkit flow.
 * It currently simulates successful submission but would typically
 * save the data to a database like Firestore.
 * 
 * @param input - The PQR form data to submit
 * @returns A promise that resolves to the submission result
 * 
 * @example
 * ```typescript
 * const result = await submitPQR({
 *   type: "Petición",
 *   fullName: "Juan Pérez",
 *   email: "juan.perez@example.com",
 *   message: "Solicito información sobre el programa de becas"
 * });
 * 
 * console.log(result.success); // true
 * console.log(result.message); // "Su PQR ha sido recibida y registrada con éxito."
 * ```
 */
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
