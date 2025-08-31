import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Building, FileText, FolderArchive, MessageSquare, Users } from "lucide-react";


export default function Home() {
  return (
    <div className="space-y-12">
      <section className="relative text-center bg-card p-10 py-16 rounded-lg shadow-sm overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10"></div>
        <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Bienvenida, Estefanía
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Plataforma de Transparencia Conectada. Gestiona la información institucional y la participación ciudadana.
            </p>
        </div>
      </section>
      
      <section>
         <div className="text-left mb-8">
            <h2 className="text-3xl font-bold text-primary">Módulos Principales</h2>
            <p className="mt-2 text-muted-foreground">Navega a las diferentes secciones de la plataforma.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="text-accent" />
                Información Institucional
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <Button variant="link" className="justify-start p-0" asChild><Link href="/informacion-institucional/organigrama">Organigrama</Link></Button>
              <Button variant="link" className="justify-start p-0" asChild><Link href="/informacion-institucional/marco-legal">Marco Legal</Link></Button>
            </CardContent>
          </Card>
           <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="text-accent" />
                Transparencia
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <Button variant="link" className="justify-start p-0" asChild><Link href="/transparencia/informes">Informes Trimestrales</Link></Button>
              <Button variant="link" className="justify-start p-0" asChild><Link href="/transparencia/presupuesto-abierto">Presupuesto Abierto</Link></Button>
            </CardContent>
          </Card>
           <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="text-accent" />
                Participación Ciudadana
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <Button variant="link" className="justify-start p-0" asChild><Link href="/participacion-ciudadana/buzon">Buzón de Propuestas</Link></Button>
              <Button variant="link" className="justify-start p-0" asChild><Link href="/participacion-ciudadana/encuestas">Encuestas Activas</Link></Button>
            </CardContent>
          </Card>
           <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="text-accent" />
                Contacto y Solicitudes
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
                <Button variant="link" className="justify-start p-0" asChild><Link href="/contacto/directorio">Directorio</Link></Button>
            </CardContent>
          </Card>
        </div>
      </section>

    </div>
  );
}
