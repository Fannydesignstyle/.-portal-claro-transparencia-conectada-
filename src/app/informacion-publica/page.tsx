"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const contracts = [
  { id: 'C001', name: 'Suministro de material de oficina', department: 'Administración', date: '2024-05-20', amount: '€15,000' },
  { id: 'C002', name: 'Servicio de limpieza', department: 'Servicios Generales', date: '2024-05-18', amount: '€50,000' },
  { id: 'C003', name: 'Desarrollo de software', department: 'Tecnología', date: '2024-05-15', amount: '€120,000' },
];

const budgets = [
  { department: 'Educación', assigned: '€5,000,000', spent: '€2,100,000', remaining: '€2,900,000' },
  { department: 'Salud', assigned: '€8,500,000', spent: '€4,500,000', remaining: '€4,000,000' },
  { department: 'Obras Públicas', assigned: '€12,000,000', spent: '€7,250,000', remaining: '€4,750,000' },
];

const regulations = [
    { id: 'N001', name: 'Ley de Transparencia Local', published: '2023-01-15', status: 'Vigente' },
    { id: 'N002', name: 'Reglamento de Participación Ciudadana', published: '2023-07-22', status: 'Vigente' },
    { id: 'N003', name: 'Decreto de Contratación Pública', published: '2022-11-01', status: 'Vigente' },
];

export default function InformacionPublicaPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-primary">Información Pública</h1>
      <p className="text-muted-foreground max-w-3xl">
        Consulte la información clave sobre el funcionamiento y la gestión de la entidad. Navegue por las pestañas para ver contratos, presupuestos y normativas vigentes.
      </p>

      <Card>
        <CardContent className="p-6">
          <Tabs defaultValue="contracts" className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3">
              <TabsTrigger value="contracts">Contratos y Convenios</TabsTrigger>
              <TabsTrigger value="budgets">Presupuestos y Gastos</TabsTrigger>
              <TabsTrigger value="regulations">Normativas Vigentes</TabsTrigger>
            </TabsList>
            <TabsContent value="contracts" className="mt-6">
                <h2 className="text-xl font-semibold mb-4 text-primary">Detalle de Contratos y Convenios</h2>
                <div className="border rounded-lg">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Departamento</TableHead>
                        <TableHead>Fecha</TableHead>
                        <TableHead>Monto</TableHead>
                        <TableHead className="text-right">Acción</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {contracts.map((contract) => (
                        <TableRow key={contract.id}>
                          <TableCell className="font-mono text-xs">{contract.id}</TableCell>
                          <TableCell className="font-medium">{contract.name}</TableCell>
                          <TableCell>{contract.department}</TableCell>
                          <TableCell>{contract.date}</TableCell>
                          <TableCell>{contract.amount}</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="icon"><Download className="h-4 w-4" /></Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
            </TabsContent>
            <TabsContent value="budgets" className="mt-6">
                <h2 className="text-xl font-semibold mb-4 text-primary">Resumen de Presupuestos y Gastos</h2>
                <div className="border rounded-lg">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Departamento</TableHead>
                        <TableHead>Asignado</TableHead>
                        <TableHead>Gastado</TableHead>
                        <TableHead>Restante</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {budgets.map((budget) => (
                        <TableRow key={budget.department}>
                          <TableCell className="font-medium">{budget.department}</TableCell>
                          <TableCell>{budget.assigned}</TableCell>
                          <TableCell>{budget.spent}</TableCell>
                          <TableCell>{budget.remaining}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
            </TabsContent>
            <TabsContent value="regulations" className="mt-6">
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
                        <TableCell><Badge variant="outline" className="text-accent-foreground border-accent">{reg.status}</Badge></TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon"><Download className="h-4 w-4" /></Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
