'use server';
/**
 * @fileOverview Flujo para la búsqueda de contenido en la plataforma.
 */

import { ai } from '@/ai/genkit';
import {
    SearchInputSchema,
    SearchOutputSchema,
    type SearchInput,
    type SearchOutput
} from '@/ai/schemas/search-schema';

// En una aplicación real, estos datos vendrían de una base de datos o un índice de búsqueda.
const searchableData = [
    { title: "Manifiesto de Transparencia Conectada", url: "/informacion-institucional/manifiesto", description: "Nuestros principios y valores fundamentales." },
    { title: "Marco Legal y Normativo", url: "/informacion-institucional/marco-legal", description: "Las leyes y regulaciones que nos rigen." },
    { title: "Objetivos de la Plataforma", url: "/informacion-institucional/objetivos", description: "Lo que buscamos lograr para la ciudadanía." },
    { title: "Organigrama Institucional", url: "/informacion-institucional/organigrama", description: "Conozca a nuestro equipo directivo." },
    { title: "Propuesta de Valor", url: "/informacion-institucional/propuesta-de-valor", description: "Los beneficios que ofrecemos a la sociedad." },
    { title: "Buzón de Participación Ciudadana", url: "/participacion-ciudadana/buzon", description: "Envíe sus propuestas para mejorar la comunidad." },
    { title: "Encuestas Públicas", url: "/participacion-ciudadana/encuestas", description: "Participe en nuestras encuestas y dé su opinión." },
    { title: "Preguntas Frecuentes (FAQ)", url: "/prensa-y-multimedia/faq", description: "Respuestas a las preguntas más comunes." },
    { title: "Galería Multimedia", url: "/prensa-y-multimedia/galeria", description: "Fotos y videos de nuestros eventos." },
    { title: "Últimas Noticias", url: "/prensa-y-multimedia/noticias", description: "Manténgase informado con nuestros comunicados." },
    { title: "Informes de Transparencia", url: "/transparencia/informes", description: "Consulte los informes de gestión y resultados." },
    { title: "Presupuesto Abierto", url: "/transparencia/presupuesto-abierto", description: "Explore cómo se invierten los recursos públicos." },
    { title: "Formulario de PQR", url: "/pqr", description: "Registre sus peticiones, quejas o reclamos." },
];

const searchFlow = ai.defineFlow(
  {
    name: 'searchFlow',
    inputSchema: SearchInputSchema,
    outputSchema: SearchOutputSchema,
  },
  async (input) => {
    console.log('Búsqueda recibida:', input);

    const query = input.query.toLowerCase();
    const results = searchableData.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query) ||
        item.url.toLowerCase().includes(query)
    );

    return {
        results,
    };
  }
);

export async function searchPlatform(input: SearchInput): Promise<SearchOutput> {
  return searchFlow(input);
}
