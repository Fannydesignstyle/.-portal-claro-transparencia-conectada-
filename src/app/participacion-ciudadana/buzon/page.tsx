
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader, Sparkles, AlertTriangle, BrainCircuit } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { AnalyzeProposalOutput } from "@/ai/schemas/analyze-proposal-schemas";
import { analyzeProposal } from "@/ai/flows/analyze-proposal-flow";

export default function BuzonDePropuestasPage() {
    const { toast } = useToast();
    const [proposalText, setProposalText] = useState("");
    const [analysisResult, setAnalysisResult] = useState<AnalyzeProposalOutput | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleProposalSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        
        if (!proposalText.trim()) {
            toast({
                title: "Error",
                description: "Por favor, escriba una propuesta antes de enviarla.",
                variant: "destructive"
            });
            return;
        }
        
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
      <h1 className="text-3xl font-bold text-primary">Buzón de Propuestas Ciudadanas</h1>
      <p className="text-muted-foreground">
        ¿Tiene una idea para mejorar nuestra comunidad? ¡Compártala con nosotros y analícela con IA!
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Envíe su Propuesta</CardTitle>
              <CardDescription>Describa su idea en el siguiente campo de texto.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleProposalSubmit} className="space-y-4">
                <Label htmlFor="proposal" className="sr-only">Su Propuesta</Label>
                <Textarea 
                    id="proposal" 
                    placeholder="Ej: Construir un nuevo parque en el centro de la ciudad con áreas verdes, juegos para niños y un espacio para eventos culturales..." 
                    rows={8}
                    value={proposalText}
                    onChange={(e) => setProposalText(e.target.value)}
                />
                <div className="flex flex-col sm:flex-row gap-2">
                    <Button type="submit" className="w-full" variant="outline">Enviar Propuesta</Button>
                    <Button type="button" className="w-full" onClick={handleAnalyzeClick} disabled={isLoading}>
                       {isLoading ? <Loader className="animate-spin" /> : <Sparkles />}
                       Analizar con IA
                    </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
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
                    <p>{error}</p>
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
                                <Badge key={area} variant="secondary" className="bg-secondary text-secondary-foreground">{area}</Badge>
                            ))}
                        </div>
                    </div>
                     <div className="grid grid-cols-2 gap-4">
                         <div>
                            <Label className="text-sm font-semibold">Impacto Potencial</Label>
                             <p className="font-medium">{analysisResult.impact}</p>
                        </div>
                         <div>
                            <Label className="text-sm font-semibold">Sentimiento</Label>
                             <p className="font-medium">{analysisResult.sentiment}</p>
                        </div>
                    </div>
                </CardContent>
             </Card>
           )}

           {!isLoading && !analysisResult && !error && (
            <Card className="h-full flex items-center justify-center">
                 <CardContent className="text-center text-muted-foreground">
                     <BrainCircuit className="mx-auto h-12 w-12 opacity-50 mb-4"/>
                     <p>Los resultados del análisis de la IA aparecerán aquí.</p>
                 </CardContent>
             </Card>
           )}
        </div>
      </div>
    </div>
  );
}
