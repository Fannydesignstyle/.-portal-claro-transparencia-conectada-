
"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Camera, AlertTriangle } from "lucide-react";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  dataAiHint: string;
}

const initialGalleryItems: GalleryItem[] = [
  {
    id: "event1",
    title: "Sesión Inaugural del Comité de Transparencia",
    description: "Miembros del comité en la primera sesión oficial.",
    imageUrl: "https://picsum.photos/seed/event1/600/400",
    dataAiHint: "official committee meeting"
  },
  {
    id: "event2",
    title: "Taller de Datos Abiertos con la Comunidad",
    description: "Ciudadanos aprendiendo a usar las herramientas de la plataforma.",
    imageUrl: "https://picsum.photos/seed/event2/600/400",
    dataAiHint: "community workshop people"
  },
  {
    id: "event3",
    title: "Presentación del Presupuesto Anual",
    description: "El Secretario de Finanzas presenta el presupuesto 2025.",
    imageUrl: "https://picsum.photos/seed/event3/600/400",
    dataAiHint: "press conference presentation"
  },
  {
    id: "event4",
    title: "Firma de Convenio por la Movilidad Sostenible",
    description: "Autoridades firman el acuerdo para nuevas ciclovías.",
    imageUrl: "https://picsum.photos/seed/event4/600/400",
    dataAiHint: "agreement signing ceremony"
  },
  {
    id: "event5",
    title: "Visita a Obras Públicas en Progreso",
    description: "Supervisión del avance en la construcción del nuevo centro cívico.",
    imageUrl: "https://picsum.photos/seed/event5/600/400",
    dataAiHint: "construction site visit"
  },
  {
    id: "event6",
    title: "Celebración del Día de la Participación Ciudadana",
    description: "Evento conmemorativo en la plaza principal.",
    imageUrl: "https://picsum.photos/seed/event6/600/400",
    dataAiHint: "public square event"
  }
];


export default function GalleryPage() {
    const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        try {
            const storedItems = localStorage.getItem("galleryItems");
            if (storedItems) {
                setGalleryItems(JSON.parse(storedItems));
            } else {
                // If no items in storage, use initial items and save them
                setGalleryItems(initialGalleryItems);
                localStorage.setItem("galleryItems", JSON.stringify(initialGalleryItems));
            }
        } catch (error) {
            console.error("Failed to load gallery items from localStorage", error);
            setGalleryItems(initialGalleryItems);
        } finally {
            setIsLoading(false);
        }
    }, []);

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

        {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                    <Card key={i} className="overflow-hidden">
                        <Skeleton className="w-full aspect-video" />
                        <CardFooter className="p-4 flex flex-col items-start space-y-2">
                           <Skeleton className="h-5 w-3/4" />
                           <Skeleton className="h-4 w-1/2" />
                        </CardFooter>
                    </Card>
                ))}
            </div>
        ) : galleryItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryItems.map((item) => (
                <Card key={item.id} className="overflow-hidden group">
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
        ) : (
            <Alert>
                <Camera className="h-4 w-4" />
                <AlertTitle>Galería Vacía</AlertTitle>
                <AlertDescription>
                    Actualmente no hay imágenes en la galería. El administrador puede añadirlas desde el panel de control.
                </AlertDescription>
            </Alert>
        )}
    </div>
  );
}
