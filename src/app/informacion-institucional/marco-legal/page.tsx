
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const regulations = [
    { id: 'N-OAX-01', name: 'Ley de Transparencia y Acceso a la Información de Oaxaca', published: '2024-01-10', status: 'Vigente' },
    { id: 'N-OAX-02', name: 'Reglamento de Obras Públicas del Estado', published: '2024-03-15', status: 'Vigente' },
    { id: 'N-OAX-03', name: 'Ley de Participación Ciudadana para el Estado de Oaxaca', published: '2023-11-20', status: 'Vigente' },
    { id: 'N-OAX-04', name: 'Decreto de Austeridad y Ahorro Gubernamental', published: '2025-02-01', status: 'Propuesta' },
];

export default function MarcoLegalPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-primary">Marco Legal</h1>
      <p className="text-muted-foreground max-w-3xl">
        Consulte las normativas vigentes que rigen la acción pública y la transparencia en el estado.
      </p>

      <Card>
        <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-primary">Listado de Normativas Vigentes</h2>
            <div className="border rounded-lg">
                <Table>
                <TableHeader>
                <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Nombre de la Normativa</TableHead>
                    <TableHead>Publicación</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead className="text-right">Acción</TableHead>
                </TableRow>
                </TableHeader>
                <TableBody>
                {regulations.map((reg) => (
                    <TableRow key={reg.id}>
                    <TableCell className="font-mono text-xs">{reg.id}</TableCell>
                    <TableCell className="font-medium">{reg.name}</TableCell>
                    <TableCell>{reg.published}</TableCell>
                    <TableCell>
                        <Badge 
                            variant={reg.status === 'Vigente' ? 'outline' : 'secondary'}
                            className={reg.status === 'Vigente' ? 'text-accent-foreground border-accent bg-accent' : ''}
                        >
                            {reg.status}
                        </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                        <Button variant="ghost" size="icon"><Download className="h-4 w-4" /></Button>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}

