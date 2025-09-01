
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Camera } from "lucide-react";

const galleryItems = [
  {
    title: "Sesión Inaugural del Comité de Transparencia",
    description: "Miembros del comité en la primera sesión oficial.",
    imageUrl: "https://picsum.photos/seed/event1/600/400",
    dataAiHint: "official committee meeting"
  },
  {
    title: "Taller de Datos Abiertos con la Comunidad",
    description: "Ciudadanos aprendiendo a usar las herramientas de la plataforma.",
    imageUrl: "https://picsum.photos/seed/event2/600/400",
    dataAiHint: "community workshop people"
  },
  {
    title: "Presentación del Presupuesto Anual",
    description: "El Secretario de Finanzas presenta el presupuesto 2025.",
    imageUrl: "https://picsum.photos/seed/event3/600/400",
    dataAiHint: "press conference presentation"
  },
  {
    title: "Firma de Convenio por la Movilidad Sostenible",
    description: "Autoridades firman el acuerdo para nuevas ciclovías.",
    imageUrl: "https://picsum.photos/seed/event4/600/400",
    dataAiHint: "agreement signing ceremony"
  },
  {
    title: "Visita a Obras Públicas en Progreso",
    description: "Supervisión del avance en la construcción del nuevo centro cívico.",
    imageUrl: "https://picsum.photos/seed/event5/600/400",
    dataAiHint: "construction site visit"
  },
  {
    title: "Celebración del Día de la Participación Ciudadana",
    description: "Evento conmemorativo en la plaza principal.",
    imageUrl: "https://picsum.photos/seed/event6/600/400",
    dataAiHint: "public square event"
  }
];

export default function GalleryPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <Camera className="h-16 w-16 mx-auto text-accent" />
        <h1 className="text-4xl font-extrabold text-primary tracking-tighter sm:text-5xl">
          Galería Multimedia
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
          Un recorrido visual por los eventos, proyectos y momentos clave de nuestra comunidad.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item, index) => (
          <Card key={index} className="overflow-hidden group">
            <CardContent className="p-0">
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={600}
                height={400}
                data-ai-hint={item.dataAiHint}
                className="w-full h-full object-cover aspect-video transition-transform duration-300 group-hover:scale-105"
              />
            </CardContent>
            <CardFooter className="p-4 bg-card flex flex-col items-start">
              <h3 className="font-bold text-primary">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
