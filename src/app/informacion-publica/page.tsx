"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const contracts = [
  { id: 'C25-008', name: 'Mantenimiento de Infraestructura Vial', department: 'Secretaría de las Infraestructuras', date: '2025-08-10', amount: '€2,500,000' },
  { id: 'C25-009', name: 'Adquisición de Insumos Médicos', department: 'Servicios de Salud de Oaxaca', date: '2025-08-22', amount: '€1,800,000' },
  { id: 'C25-010', name: 'Consultoría para Plan de Desarrollo Turístico', department: 'Secretaría de Turismo', date: '2025-09-05', amount: '€350,000' },
  { id: 'C25-011', name: 'Programa de Becas Escolares 2025', department: 'Instituto Estatal de Educación Pública', date: '2025-09-15', amount: '€5,000,000' },
];

const budgets = [
  { department: 'Secretaría de las Infraestructuras', assigned: '€30,000,000', spent: '€18,500,000', remaining: '€11,500,000' },
  { department: 'Servicios de Salud de Oaxaca', assigned: '€25,000,000', spent: '€15,200,000', remaining: '€9,800,000' },
  { department: 'Secretaría de Finanzas', assigned: '€15,000,000', spent: '€9,750,000', remaining: '€5,250,000' },
  { department: 'Secretaría de Seguridad y Protección', assigned: '€22,000,000', spent: '€14,800,000', remaining: '€7,200,000' },
];

const regulations = [
    { id: 'N-OAX-01', name: 'Ley de Transparencia y Acceso a la Información de Oaxaca', published: '2024-01-10', status: 'Vigente' },
    { id: 'N-OAX-02', name: 'Reglamento de Obras Públicas del Estado', published: '2024-03-15', status: 'Vigente' },
    { id: 'N-OAX-03', name: 'Ley de Participación Ciudadana para el Estado de Oaxaca', published: '2023-11-20', status: 'Vigente' },
    { id: 'N-OAX-04', name: 'Decreto de Austeridad y Ahorro Gubernamental', published: '2025-02-01', status: 'Propuesta' },
];

export default function ValidacionInstitucionalPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-primary">Validación Institucional</h1>
      <p className="text-muted-foreground max-w-3xl">
        Verificación técnica y simbólica de cada componente. Consulte contratos, presupuestos y normativas para validar la gestión.
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
                        <TableHead>Dependencia</TableHead>
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
                <h2 className="text-xl font-semibold mb-4 text-primary">Resumen de Presupuestos y Gastos (Año Fiscal 2025)</h2>
                <div className="border rounded-lg">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Dependencia</TableHead>
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
                        <TableCell>
                            <Badge 
                                variant={reg.status === 'Vigente' ? 'outline' : 'secondary'}
                                className={reg.status === 'Vigente' ? 'text-accent-foreground border-accent' : ''}
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
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
