"use client";

import { Bar, BarChart, CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

const budgetAllocationData = [
  { area: "Educación", budget: 500 },
  { area: "Salud", budget: 850 },
  { area: "Seguridad", budget: 620 },
  { area: "Infraestructura", budget: 1200 },
  { area: "Cultura", budget: 300 },
];

const spendingOverTimeData = [
  { month: "Enero", spending: 210 },
  { month: "Febrero", spending: 250 },
  { month: "Marzo", spending: 290 },
  { month: "Abril", spending: 340 },
  { month: "Mayo", spending: 400 },
  { month: "Junio", spending: 420 },
];

const chartConfig: ChartConfig = {
  budget: {
    label: "Presupuesto (Millones €)",
    color: "hsl(var(--primary))",
  },
  spending: {
    label: "Gasto (Millones €)",
    color: "hsl(var(--accent))",
  },
};

const datasets = [
    { name: "Presupuesto Anual 2024", format: "CSV", size: "1.2 MB" },
    { name: "Contratos Públicos 2023", format: "JSON", size: "5.8 MB" },
    { name: "Subsidios Otorgados Q1 2024", format: "XLSX", size: "850 KB" },
    { name: "Estadísticas Demográficas", format: "CSV", size: "12.3 MB" },
];

export default function TransparenciaActivaPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-primary">Transparencia Activa</h1>
      <p className="text-muted-foreground">
        Acciones públicas documentadas y visibles. Explore datos a través de visualizaciones y descargue datasets.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Asignación Presupuestaria por Área</CardTitle>
            <CardDescription>Millones de euros asignados para el año fiscal actual</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px] w-full">
              <BarChart data={budgetAllocationData} accessibilityLayer>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="area" tickLine={false} tickMargin={10} axisLine={false} />
                <YAxis />
                <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
                <Bar dataKey="budget" fill="var(--color-budget)" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Evolución del Gasto Público</CardTitle>
            <CardDescription>Gasto mensual acumulado durante el primer semestre</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px] w-full">
              <LineChart data={spendingOverTimeData} accessibilityLayer>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} />
                <YAxis />
                <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
                <Line type="monotone" dataKey="spending" stroke="var(--color-spending)" strokeWidth={2} dot={true} />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Descarga de Datasets</CardTitle>
          <CardDescription>Acceda a los datos brutos en diferentes formatos.</CardDescription>
        </CardHeader>
        <CardContent>
            <ul className="space-y-4">
                {datasets.map(dataset => (
                    <li key={dataset.name} className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                        <div>
                            <p className="font-semibold text-primary">{dataset.name}</p>
                            <p className="text-sm text-muted-foreground">{dataset.format} - {dataset.size}</p>
                        </div>
                        <Button>
                            <FileDown className="mr-2 h-4 w-4" />
                            Descargar
                        </Button>
                    </li>
                ))}
            </ul>
        </CardContent>
      </Card>
    </div>
  );
}
