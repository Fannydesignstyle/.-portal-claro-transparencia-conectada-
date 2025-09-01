
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const posts = [
  {
    slug: "lanzamiento-plataforma-transparencia",
    title: "Lanzamiento de la Nueva Plataforma 'Transparencia Conectada'",
    date: "2025-09-01",
    category: "Anuncio",
    excerpt: "Hoy marca un hito en nuestro compromiso con la apertura gubernamental con el lanzamiento de nuestra nueva plataforma digital...",
    imageUrl: "https://picsum.photos/800/600?q=10",
    dataAiHint: "digital platform launch"
  },
  {
    slug: "consulta-publica-presupuesto-2026",
    title: "Se Abre Consulta Pública para el Presupuesto 2026",
    date: "2025-08-28",
    category: "Participación",
    excerpt: "Invitamos a todos los ciudadanos a participar en la consulta pública para la elaboración del presupuesto del próximo año fiscal.",
    imageUrl: "https://picsum.photos/800/600?q=11",
    dataAiHint: "public consultation meeting"
  },
  {
    slug: "resultados-encuesta-movilidad",
    title: "Resultados de la Encuesta de Movilidad Urbana",
    date: "2025-08-25",
    category: "Resultados",
    excerpt: "Agradecemos la participación de más de 5,000 ciudadanos. Los resultados completos ya están disponibles en la sección de datos abiertos.",
    imageUrl: "https://picsum.photos/800/600?q=12",
    dataAiHint: "urban mobility survey"
  },
   {
    slug: "nuevo-portal-datos-abiertos",
    title: "Presentamos el Nuevo Portal de Datos Abiertos",
    date: "2025-08-15",
    category: "Tecnología",
    excerpt: "Para facilitar el acceso a la información, hemos rediseñado completamente nuestro portal de datos abiertos con nuevas herramientas de visualización.",
    imageUrl: "https://picsum.photos/800/600?q=13",
    dataAiHint: "data visualization dashboard"
  },
];

export default function NoticiasPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-primary tracking-tighter sm:text-5xl">
          Noticias y Anuncios
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
          Manténgase informado sobre las últimas actualizaciones, comunicados y eventos importantes.
        </p>
      </div>
      
      <div className="grid gap-8 lg:grid-cols-2">
        {posts.map((post, index) => (
          <Card key={post.slug} className={`flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${index === 0 ? 'lg:col-span-2' : ''}`}>
             <div className="relative">
                <Image
                    src={post.imageUrl}
                    alt={post.title}
                    width={800}
                    height={index === 0 ? 400 : 300}
                    data-ai-hint={post.dataAiHint}
                    className={`object-cover ${index === 0 ? 'aspect-[2/1]' : 'aspect-video'}`}
                />
                <div className="absolute top-4 left-4">
                    <Badge>{post.category}</Badge>
                </div>
            </div>
            <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-primary">{post.title}</h2>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 mb-4">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                </div>
                <Button asChild variant="outline" className="self-start">
                    <Link href="#">
                        Leer Más <ArrowRight className="ml-2" />
                    </Link>
                </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
