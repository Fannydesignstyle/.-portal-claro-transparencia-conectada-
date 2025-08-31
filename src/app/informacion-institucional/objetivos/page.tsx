
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Target, Users, Zap } from "lucide-react";

export default function ObjetivosPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-primary tracking-tighter sm:text-5xl md:text-6xl">
          Nuestra Misión y Objetivos
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
          Estamos comprometidos a fortalecer la democracia, la confianza y la participación ciudadana a través de la tecnología cívica y la transparencia radical.
        </p>
      </div>

      <Card className="shadow-lg border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-primary">
            <Target className="h-8 w-8 text-accent" />
            Misión Principal
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-foreground">
            Ser la plataforma de referencia que conecta de manera efectiva, transparente y ética a la ciudadanía con su gobierno, transformando la participación cívica en acciones públicas concretas y medibles. Dignificamos la acción pública desde la raíz, construyendo puentes de confianza y colaboración.
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="text-accent" />
              Empoderar a la Ciudadanía
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Proveer herramientas intuitivas para que los ciudadanos presenten, discutan y sigan sus propuestas.</span>
            </p>
             <p className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Facilitar el acceso a información pública clara, comprensible y en formatos abiertos.</span>
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="text-accent" />
              Fortalecer la Gestión Pública
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Ofrecer a los funcionarios un canal directo para entender las necesidades y prioridades de la comunidad.</span>
            </p>
            <p className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Implementar mecanismos de seguimiento y rendición de cuentas que sean visibles para todos.</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="text-accent" />
              Fomentar la Confianza
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Garantizar la trazabilidad y la transparencia en cada etapa del proceso participativo.</span>
            </p>
             <p className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Construir una memoria histórica de la acción pública, accesible y permanente.</span>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
