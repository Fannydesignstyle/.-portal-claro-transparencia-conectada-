"use client";

import { Bar, BarChart, CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

const budgetAllocationData = [
  { area: "Educación", budget: 520 },
  { area: "Salud", budget: 870 },
  { area: "Seguridad", budget: 650 },
  { area: "Infraestructura", budget: 1250 },
  { area: "Cultura", budget: 310 },
];

const spendingOverTimeData = [
  { month: "Abr", spending: 1100 },
  { month: "May", spending: 1300 },
  { month: "Jun", spending: 1550 },
  { month: "Jul", spending: 1700 },
  { month: "Ago", spending: 1950 },
  { month: "Sep", spending: 2200 },
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
    { name: "Presupuesto Anual 2025", format: "CSV", size: "1.3 MB" },
    { name: "Contratos Públicos 2025 (Ene-Sep)", format: "JSON", size: "7.2 MB" },
    { name: "Subsidios Otorgados Q3 2025", format: "XLSX", size: "950 KB" },
    { name: "Estadísticas Demográficas 2025", format: "CSV", size: "12.8 MB" },
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
            <CardDescription>Millones de pesos asignados para el año fiscal 2025</CardDescription>
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
            <CardDescription>Gasto mensual acumulado durante el año fiscal 2025</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px] w-full">
              <LineChart data={spendingOverTimeData} accessibilityLayer>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} />
                <YAxis />
                <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
                <Line type="monotone" dataKey="spending" stroke="var(--color-spending)" strokeWidth={3} dot={{ r: 5, fill: "var(--color-spending)" }} activeDot={{ r: 7 }} />
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
                    <li key={dataset.name} className="flex items-center justify-between p-4 bg-card border rounded-lg hover:shadow-md transition-shadow">
                        <div>
                            <p className="font-semibold text-primary">{dataset.name}</p>
                            <p className="text-sm text-muted-foreground">{dataset.format} - {dataset.size}</p>
                        </div>
                        <Button variant="outline">
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
