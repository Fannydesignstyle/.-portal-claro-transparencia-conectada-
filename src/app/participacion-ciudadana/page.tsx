"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { Loader, Sparkles, AlertTriangle, CheckCircle, BrainCircuit } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { AnalyzeProposalOutput } from "@/ai/flows/analyze-proposal-flow";
import { analyzeProposal } from "@/ai/flows/analyze-proposal-flow";

export default function ComunicacionEticaPage() {
    const { toast } = useToast();
    const [proposalText, setProposalText] = useState("");
    const [analysisResult, setAnalysisResult] = useState<AnalyzeProposalOutput | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSurveySubmit = (event: React.FormEvent) => {
        event.preventDefault();
        toast({
            title: "Voto Registrado",
            description: "Gracias por su participación.",
        });
    };
    
    const handleProposalSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        
        setAnalysisResult(null);
        setError(null);
        setProposalText("");

        toast({
            title: "Propuesta Recibida",
            description: "Su idea ha sido enviada para revisión. ¡Gracias por contribuir!",
        });
    };

    const handleAnalyzeClick = async () => {
        if (!proposalText.trim()) {
            setError("Por favor, escriba una propuesta antes de analizarla.");
            return;
        }

        setIsLoading(true);
        setError(null);
        setAnalysisResult(null);

        try {
            const result = await analyzeProposal({ proposal: proposalText });
            setAnalysisResult(result);
        } catch (e) {
            console.error(e);
            setError("Hubo un error al analizar la propuesta. Por favor, intente de nuevo.");
        } finally {
            setIsLoading(false);
        }
    };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-primary">Comunicación Ética</h1>
      <p className="text-muted-foreground">
        Canales y mensajes con propósito público y claridad simbólica. Participe y haga oír su voz.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <Card>
          <CardHeader>
            <CardTitle>Consulta Activa: Espacios Públicos (Sep 2025)</CardTitle>
            <CardDescription>¿Cuál considera que es la principal prioridad para los nuevos parques en la ciudad?</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSurveySubmit} className="space-y-6">
              <RadioGroup defaultValue="option-one" className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label htmlFor="option-one">Más áreas verdes y jardines</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two">Zonas de juegos infantiles modernos</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-three" id="option-three" />
                  <Label htmlFor="option-three">Instalaciones deportivas de acceso libre</Label>
                </div>
              </RadioGroup>
              <Button type="submit" className="w-full">Enviar Voto</Button>
            </form>
          </CardContent>
        </Card>
        
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Buzón de Propuestas Ciudadanas</CardTitle>
              <CardDescription>¿Tiene una idea para mejorar nuestra comunidad? ¡Compártala con nosotros!</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleProposalSubmit} className="space-y-4">
                <Label htmlFor="proposal">Su Propuesta</Label>
                <Textarea 
                    id="proposal" 
                    placeholder="Describa su idea aquí..." 
                    rows={5}
                    value={proposalText}
                    onChange={(e) => setProposalText(e.target.value)}
                />
                <div className="flex flex-col sm:flex-row gap-2">
                    <Button type="submit" className="w-full" variant="outline">Enviar Propuesta</Button>
                    <Button type="button" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" onClick={handleAnalyzeClick} disabled={isLoading}>
                       {isLoading ? <Loader className="animate-spin" /> : <Sparkles />}
                       Analizar con IA
                    </Button>
                </div>
              </form>
            </CardContent>
          </Card>

           {isLoading && (
              <Card className="animate-pulse">
                <CardHeader>
                    <div className="h-5 w-2/4 rounded-md bg-muted" />
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="h-4 w-full rounded-md bg-muted" />
                    <div className="h-4 w-5/6 rounded-md bg-muted" />
                    <div className="flex gap-2">
                        <div className="h-6 w-20 rounded-full bg-muted" />
                        <div className="h-6 w-24 rounded-full bg-muted" />
                    </div>
                </CardContent>
              </Card>
           )}

           {error && (
             <Card className="border-destructive">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-destructive">
                        <AlertTriangle />
                        Error en el Análisis
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-destructive">{error}</p>
                </CardContent>
             </Card>
           )}

           {analysisResult && (
             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-accent">
                        <BrainCircuit />
                        Análisis de la Propuesta
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <Label className="text-sm font-semibold">Resumen</Label>
                        <p className="text-muted-foreground text-sm mt-1">{analysisResult.summary}</p>
                    </div>
                     <div>
                        <Label className="text-sm font-semibold">Áreas Clave</Label>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {analysisResult.keyAreas.map(area => (
                                <Badge key={area} variant="secondary">{area}</Badge>
                            ))}
                        </div>
                    </div>
                     <div className="grid grid-cols-2 gap-4">
                         <div>
                            <Label className="text-sm font-semibold">Impacto Potencial</Label>
                            <p className="text-sm flex items-center gap-2 mt-1">
                                {analysisResult.impact === "Alto" && <CheckCircle className="text-green-500" />}
                                {analysisResult.impact === "Medio" && <CheckCircle className="text-yellow-500" />}
                                {analysisResult.impact === "Bajo" && <CheckCircle className="text-gray-400" />}
                                <span className="font-medium">{analysisResult.impact}</span>
                            </p>
                        </div>
                         <div>
                            <Label className="text-sm font-semibold">Sentimiento</Label>
                             <p className="text-sm flex items-center gap-2 mt-1">
                                {analysisResult.sentiment === "Positivo" && "😊"}
                                {analysisResult.sentiment === "Neutral" && "😐"}
                                {analysisResult.sentiment === "Negativo" && "😞"}
                                <span className="font-medium">{analysisResult.sentiment}</span>
                            </p>
                        </div>
                    </div>
                </CardContent>
             </Card>
           )}
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Resultados de Consultas Anteriores</CardTitle>
          <CardDescription>Consulta sobre "Movilidad Urbana" (Agosto 2025)</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <div>
                <div className="flex justify-between mb-1 text-sm">
                    <Label>Mejorar frecuencia del transporte público</Label>
                    <span className="font-medium text-primary">58%</span>
                </div>
                <Progress value={58} className="h-3 bg-primary/20" indicatorClassName="bg-primary" />
            </div>
            <div>
                <div className="flex justify-between mb-1 text-sm">
                    <Label>Ampliar la red de carriles bici</Label>
                    <span className="font-medium text-primary">32%</span>
                </div>
                <Progress value={32} className="h-3 bg-primary/20" indicatorClassName="bg-primary" />
            </div>
            <div>
                <div className="flex justify-between mb-1 text-sm">
                    <Label>Crear más zonas peatonales</Label>
                    <span className="font-medium text-primary">10%</span>
                </div>
                <Progress value={10} className="h-3 bg-primary/20" indicatorClassName="bg-primary" />
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
