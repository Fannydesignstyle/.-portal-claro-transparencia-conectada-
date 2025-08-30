import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileText, BarChart3, Users, Building, CalendarDays, Archive } from "lucide-react";

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
      <section className="text-center bg-card p-10 rounded-lg shadow">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          Bienvenido a PortalClaro
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Un espacio dedicado a la transparencia y el gobierno abierto. Explore, participe y manténgase informado sobre la gestión pública.
        </p>
      </section>

      <section>
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
