
"use client";

import { useState } from "react";
import { format, isSameDay } from "date-fns";
import { es } from "date-fns/locale";
import { Calendar as CalendarIcon, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";

const events = [
  { date: new Date(2025, 7, 18), title: "Audiencia Pública: Presupuesto 2026", time: "10:00 - 12:00", location: "Salón de Plenos" },
  { date: new Date(2025, 7, 25), title: "Sesión Informativa: Nuevo Plan de Movilidad Sostenible", time: "18:00 - 19:30", location: "Centro Cívico Norte" },
  { date: new Date(2025, 8, 8), title: "Acto de Rendición de Cuentas (Tercer Trimestre)", time: "11:00 - 13:00", location: "Teatro Principal" },
  { date: new Date(2025, 8, 22), title: "Taller de Participación Ciudadana: Proyectos Verdes", time: "17:00 - 19:00", location: "Online (Zoom)" },
];

export default function DirectorioPage() {
  const [date, setDate] = useState<Date | undefined>(new Date(2025, 7, 18));

  const selectedDayEvents = events.filter(event => date && isSameDay(event.date, date));

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-primary">Calendario Cívico</h1>
      <p className="text-muted-foreground">
        Historial y seguimiento de la actividad pública. Participe en audiencias, sesiones y otros eventos.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <Card className="lg:col-span-1">
             <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="p-3"
                locale={es}
                initialFocus
                defaultMonth={new Date(2025, 7)}
                modifiers={{
                    hasEvent: events.map(e => e.date)
                }}
                modifiersClassNames={{
                  hasEvent: 'font-bold text-primary relative',
                }}
             />
        </Card>
        <div className="lg:col-span-2">
          <Card className="h-full min-h-[400px]">
            <CardHeader>
              <CardTitle>
                Eventos para {date ? format(date, "PPP", { locale: es }) : "la fecha seleccionada"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {selectedDayEvents.length > 0 ? (
                <ul className="space-y-4">
                  {selectedDayEvents.map((event, index) => (
                    <li key={index} className="p-4 bg-secondary/30 rounded-lg border-l-4 border-accent">
                      <p className="font-semibold text-primary">{event.title}</p>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mt-2">
                          <div className="flex items-center gap-1.5">
                            <CalendarIcon className="h-4 w-4" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin className="h-4 w-4" />
                            <span>{event.location}</span>
                          </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-center text-muted-foreground py-10 h-full flex flex-col justify-center items-center">
                  <CalendarIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No hay eventos programados para este día.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

