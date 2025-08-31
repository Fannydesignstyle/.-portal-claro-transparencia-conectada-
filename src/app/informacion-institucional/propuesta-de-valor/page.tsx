
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Gem, Layers, Users } from "lucide-react";

const valuePropositions = [
  {
    icon: <Gem className="h-8 w-8 text-accent" />,
    title: "Estructura Ética y Transparente",
    description: "Nuestra plataforma se basa en principios de honestidad y claridad. Cada interacción es trazable y cada dato es público por diseño, eliminando la opacidad y fomentando la confianza.",
    tags: ["Transparencia Radical", "Trazabilidad", "Confianza"]
  },
  {
    icon: <Layers className="h-8 w-8 text-accent" />,
    title: "Diseño Modular y Escalable",
    description: "Construida con una arquitectura modular, la plataforma puede adaptarse y crecer. Los componentes son reutilizables y las funcionalidades pueden expandirse sin comprometer la integridad del sistema.",
    tags: ["Modularidad", "Escalabilidad", "Flexibilidad"]
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: "Pública y de Código Abierto",
    description: "Creemos en el poder de la comunidad. La plataforma es de código abierto, permitiendo la auditoría, colaboración y mejora continua por parte de la ciudadanía y otras instituciones.",
    tags: ["Código Abierto", "Comunidad", "Auditoría Pública"]
  }
];

export default function PropuestaDeValorPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-primary tracking-tighter sm:text-5xl md:text-6xl">
          Nuestra Propuesta de Valor
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
          Ofrecemos una estructura ética, modular y pública que amplifica la voz legítima de los ciudadanos, transformando la manera en que gobierno y sociedad colaboran.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3 items-start">
        {valuePropositions.map((prop, index) => (
          <Card key={index} className="h-full flex flex-col shadow-lg hover:border-primary/50 transition-all">
            <CardHeader className="flex flex-row items-start gap-4">
              {prop.icon}
              <div className="space-y-1">
                <CardTitle className="text-xl text-primary">{prop.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{prop.description}</p>
            </CardContent>
            <div className="p-6 pt-0">
               <div className="flex flex-wrap gap-2">
                {prop.tags.map(tag => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>

       <Card className="bg-primary text-primary-foreground">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldCheck className="h-8 w-8" />
            El Resultado: Un Ecosistema de Confianza
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-primary-foreground/90">
            Al combinar estos pilares, creamos más que una simple plataforma; construimos un ecosistema digital donde la participación ciudadana es valorada, la gestión pública es más eficiente y la confianza entre ambos se fortalece día con día.
          </p>
        </CardContent>
      </Card>

    </div>
  );
}
