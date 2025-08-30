"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

export default function ParticipacionCiudadanaPage() {
    const { toast } = useToast();

    const handleSurveySubmit = (event: React.FormEvent) => {
        event.preventDefault();
        toast({
            title: "Encuesta Enviada",
            description: "Gracias por su participación.",
            variant: "default",
        });
    };
    
    const handleProposalSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const textarea = form.querySelector('textarea');
        if (textarea) {
            textarea.value = '';
        }
        toast({
            title: "Propuesta Recibida",
            description: "Su idea ha sido enviada para revisión. ¡Gracias por contribuir!",
            variant: "default",
        });
    };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-primary">Participación Ciudadana</h1>
      <p className="text-muted-foreground">
        Su voz es importante. Participe en encuestas, envíe propuestas y sea parte de las decisiones públicas.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <Card>
          <CardHeader>
            <CardTitle>Encuesta Activa: Movilidad Urbana</CardTitle>
            <CardDescription>¿Cuál considera que es la principal prioridad para mejorar el transporte en la ciudad?</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSurveySubmit} className="space-y-6">
              <RadioGroup defaultValue="option-one" className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label htmlFor="option-one">Ampliar la red de carriles bici</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two">Mejorar la frecuencia del transporte público</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-three" id="option-three" />
                  <Label htmlFor="option-three">Crear más zonas peatonales</Label>
                </div>
              </RadioGroup>
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Enviar Voto</Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Buzón de Propuestas</CardTitle>
            <CardDescription>¿Tiene una idea para mejorar nuestra comunidad? ¡Compártala con nosotros!</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleProposalSubmit} className="space-y-4">
              <Label htmlFor="proposal">Su Propuesta</Label>
              <Textarea id="proposal" placeholder="Describa su idea aquí..." rows={5} />
              <Button type="submit" className="w-full">Enviar Propuesta</Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Resultados de Votaciones Públicas Anteriores</CardTitle>
          <CardDescription>Votación sobre el "Nuevo Parque Central"</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <div>
                <div className="flex justify-between mb-1 text-sm">
                    <Label>Diseño A: "Oasis Urbano"</Label>
                    <span className="font-medium text-primary">65%</span>
                </div>
                <Progress value={65} className="h-3" />
            </div>
            <div>
                <div className="flex justify-between mb-1 text-sm">
                    <Label>Diseño B: "Plaza Moderna"</Label>
                    <span className="font-medium text-primary">25%</span>
                </div>
                <Progress value={25} className="h-3" />
            </div>
            <div>
                <div className="flex justify-between mb-1 text-sm">
                    <Label>Diseño C: "Jardín Tradicional"</Label>
                    <span className="font-medium text-primary">10%</span>
                </div>
                <Progress value={10} className="h-3" />
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
