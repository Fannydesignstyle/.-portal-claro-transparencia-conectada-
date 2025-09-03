import {NextResponse} from 'next/server';
import {submitPQR} from '@/ai/flows/pqr-flow';
import {PQRFormInputSchema} from '@/ai/schemas/pqr-schema';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validation = PQRFormInputSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json({error: validation.error.format()}, {status: 400});
    }

    const result = await submitPQR(validation.data);

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error en la API de PQR:', error);
    return NextResponse.json(
      {error: 'Ocurrió un error al procesar la solicitud.'},
      {status: 500}
    );
  }
}
