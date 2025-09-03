"use server";
import {z} from 'zod';

export const PQRFormInputSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, ingrese un correo electrónico válido." }),
  subject: z.string().min(5, { message: "El asunto debe tener al menos 5 caracteres." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

export const PQRFormOutputSchema = z.object({
    success: z.boolean(),
    message: z.string(),
});

export type PQRFormInput = z.infer<typeof PQRFormInputSchema>;
export type PQRFormOutput = z.infer<typeof PQRFormOutputSchema>;
