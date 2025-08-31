import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Building, Archive, ArrowRight, Rss, ShieldCheck, HardDrive } from "lucide-react";

const features = [
  {
    title: "Imagen Pública",
    description: "Representación visual legítima, validada institucionalmente.",
    icon: Building,
    href: "/perfiles-institucionales",
  },
  {
    title: "Comunicación Ética",
    description: "Canales y mensajes con propósito público y claridad simbólica.",
    icon: Rss,
    href: "/participacion-ciudadana",
  },
  {
    title: "Documentación Modular",
    description: "Archivos con rutas claras, accesibles y reutilizables.",
    icon: Archive,
    href: "/repositorio-documental",
  },
  {
    title: "Validación Institucional",
    description: "Verificación técnica y simbólica de cada componente.",
    icon: ShieldCheck,
    href: "/informacion-publica",
  },
  {
    title: "Transparencia Activa",
    description: "Acciones públicas documentadas y visibles.",
    icon: FileText,
    href: "/datos-abiertos",
  },
  {
      title: "Memoria Institucional",
      description: "Historial y seguimiento de la actividad pública.",
      icon: HardDrive,
      href: "/calendario-civico",
  }
];

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="relative text-center bg-card p-10 py-16 rounded-lg shadow-sm overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10"></div>
        <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Plataforma Voz Ciudadana
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Una estructura ética, modular y pública que amplifica la voz legítima de los ciudadanos.
            </p>
            <div className="mt-8">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="#features">
                        Explorar Módulos
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
        </div>
      </section>

      <section id="about" className="space-y-8">
        <div className="text-center">
            <h2 className="text-3xl font-bold text-primary">Manifiesto Institucional</h2>
        </div>
        <Card className="col-span-1 bg-transparent border-0 shadow-none">
            <CardContent className="p-8 text-center">
                 <blockquote className="text-xl italic text-muted-foreground border-l-4 border-accent pl-6">
                    "La Voz Ciudadana no se delega ni se representa: se documenta, se valida y se comunica con dignidad. Esta plataforma nace para sostener la transparencia como acto cotidiano, donde cada componente técnico responde a una necesidad pública, y cada imagen institucional refleja una verdad compartida. Aquí, la documentación no es archivo: es memoria viva. La comunicación no es difusión: es presencia legítima. La Voz Ciudadana es modular, ética y poética. Y su propósito es claro: dignificar la acción pública desde la raíz."
                </blockquote>
            </CardContent>
        </Card>
      </section>

      <section id="features">
        <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary">Derivaciones Modulares</h2>
            <p className="mt-2 text-muted-foreground">Cada módulo responde a un propósito claro y a una necesidad pública.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Link href={feature.href} key={feature.title} className="group">
              <Card className="h-full hover:shadow-lg hover:border-accent transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-primary">{feature.title}</CardTitle>
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
