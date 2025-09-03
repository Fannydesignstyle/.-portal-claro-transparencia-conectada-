import {NextResponse} from 'next/server';
import {searchPlatform} from '@/ai/flows/search-flow';

export async function GET(req: Request) {
  try {
    const {searchParams} = new URL(req.url);
    const query = searchParams.get('q');

    if (!query) {
      return NextResponse.json({error: 'El parámetro de búsqueda "q" es requerido.'}, {status: 400});
    }

    const result = await searchPlatform({query});

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error en la API de búsqueda:', error);
    return NextResponse.json(
      {error: 'Ocurrió un error al procesar la búsqueda.'},
      {status: 500}
    );
  }
}
