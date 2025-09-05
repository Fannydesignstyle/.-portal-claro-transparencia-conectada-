import {z} from 'zod';

/**
 * Zod schema for validating PQR form input
 * 
 * This schema validates the data submitted through the PQR (Petición, Queja, Reclamo) form,
 * ensuring all required fields meet the specified criteria.
 */
export const PQRFormInputSchema = z.object({
  /** Full name of the person submitting the PQR */
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  /** Email address for follow-up communication */
  email: z.string().email({ message: "Por favor, ingrese un correo electrónico válido." }),
  /** Subject or title of the PQR */
  subject: z.string().min(5, { message: "El asunto debe tener al menos 5 caracteres." }),
  /** Detailed message content of the PQR */
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

/**
 * Zod schema for PQR form output
 * 
 * This schema defines the structure of the response returned after
 * processing a PQR form submission.
 */
export const PQRFormOutputSchema = z.object({
    /** Indicates if the PQR submission was successful */
    success: z.boolean(),
    /** Message providing feedback about the submission */
    message: z.string(),
});

/**
 * TypeScript type for PQR form input, derived from the Zod schema
 */
export type PQRFormInput = z.infer<typeof PQRFormInputSchema>;

/**
 * TypeScript type for PQR form output, derived from the Zod schema
 */
export type PQRFormOutput = z.infer<typeof PQRFormOutputSchema>;
