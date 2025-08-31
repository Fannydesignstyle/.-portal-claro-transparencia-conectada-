
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Feather, Mic, Scale, GitBranch } from "lucide-react";

const principles = [
  {
    title: "Creemos en la acción pública dignificada.",
    description: "Cada propuesta, voto y opinión es un acto de compromiso cívico. Nuestra plataforma está diseñada para honrar y dar valor a esa participación, asegurando que cada voz sea escuchada y respetada."
  },
  {
    title: "Creemos en la participación informada.",
    description: "Una ciudadanía bien informada toma mejores decisiones. Proveemos datos claros, contexto y herramientas de análisis para que la participación no se base en opiniones, sino en entendimiento."
  },
  {
    title: "Creemos en la tecnología como puente, no como barrera.",
    description: "La tecnología debe simplificar, no complicar. Desarrollamos una plataforma intuitiva y accesible para todos, independientemente de su nivel de habilidad digital, para conectar a las personas con su gobierno."
  },
  {
    title: "Creemos en la transparencia como principio no negociable.",
    description: "La confianza se construye con honestidad. Todo en nuestra plataforma es abierto por defecto. El código, los datos y los procesos están disponibles para ser examinados por cualquiera, en cualquier momento."
  }
];

export default function ManifiestoPage() {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <BookOpen className="h-16 w-16 mx-auto text-accent" />
        <h1 className="text-4xl font-extrabold text-primary tracking-tighter sm:text-5xl md:text-6xl">
          Manifiesto de la Plataforma
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
          Nuestros principios guía. La filosofía que impulsa cada línea de código y cada decisión que tomamos.
        </p>
      </div>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {principles.map((principle, index) => (
          <Card key={index} className="border-l-4 border-accent">
            <CardHeader>
              <CardTitle className="text-xl text-primary">{principle.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{principle.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
