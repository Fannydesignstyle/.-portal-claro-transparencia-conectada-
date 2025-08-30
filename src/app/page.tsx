import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, BarChart3, Users, Building, CalendarDays, Archive, ArrowRight } from "lucide-react";
import Image from 'next/image';

const features = [
  {
    title: "Información Pública",
    description: "Contratos, presupuestos, normativas y más.",
    icon: FileText,
    href: "/informacion-publica",
  },
  {
    title: "Datos Abiertos",
    description: "Visualizaciones y datasets para análisis.",
    icon: BarChart3,
    href: "/datos-abiertos",
  },
  {
    title: "Participación Ciudadana",
    description: "Encuestas, propuestas y votaciones.",
    icon: Users,
    href: "/participacion-ciudadana",
  },
  {
    title: "Perfiles Institucionales",
    description: "Organigrama y directorio de responsables.",
    icon: Building,
    href: "/perfiles-institucionales",
  },
  {
    title: "Calendario Cívico",
    description: "Audiencias públicas y sesiones informativas.",
    icon: CalendarDays,
    href: "/calendario-civico",
  },
  {
    title: "Repositorio Documental",
    description: "Actas, minutas y historial de documentos.",
    icon: Archive,
    href: "/repositorio-documental",
  },
];

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="relative text-center bg-card p-10 rounded-lg shadow-lg overflow-hidden">
        <div className="absolute inset-0">
            <Image 
                src="https://picsum.photos/1200/400?q=6" 
                alt="Palacio de Gobierno de Oaxaca"
                layout="fill"
                objectFit="cover"
                className="opacity-20"
                data-ai-hint="Oaxaca government"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        </div>
        <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Bienvenido al Portal de Funcionarios Públicos de Oaxaca
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Una plataforma integral para la gestión, comunicación y transparencia de los servidores públicos del estado.
            </p>
            <div className="mt-8">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="#features">
                        Explorar Plataforma
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
        </div>
      </section>

      <section id="features">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Link href={feature.href} key={feature.title} className="group">
              <Card className="h-full hover:shadow-lg hover:border-primary transition-all duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
