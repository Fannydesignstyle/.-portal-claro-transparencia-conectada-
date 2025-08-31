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
      <section className="relative text-center bg-card p-10 py-20 rounded-2xl shadow-lg overflow-hidden border border-primary/20">
         <div 
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 pointer-events-none"
        />
        <div 
          className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/20 rounded-full filter blur-3xl"
        />
        <div 
          className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-accent/20 rounded-full filter blur-3xl"
        />
        <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-extrabold text-foreground tracking-tighter">
              Transparencia Conectada
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
              Una plataforma ética, modular y pública que redefine la interacción entre la ciudadanía y el gobierno.
            </p>
             <div className="mt-8 flex justify-center">
              <Button asChild size="lg" className="text-lg">
                <Link href="/participacion-ciudadana/buzon">
                  Participa Ahora <ArrowRight />
                </Link>
              </Button>
            </div>
        </div>
      </section>
      
      <section>
         <div className="text-left mb-8">
            <h2 className="text-3xl font-bold text-primary">Módulos Principales</h2>
            <p className="mt-2 text-muted-foreground">Navega a las diferentes secciones de la plataforma.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:border-primary/50 hover:shadow-primary/10 transition-all duration-300">
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
           <Card className="hover:border-primary/50 hover:shadow-primary/10 transition-all duration-300">
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
           <Card className="hover:border-primary/50 hover:shadow-primary/10 transition-all duration-300">
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
           <Card className="hover:border-primary/50 hover:shadow-primary/10 transition-all duration-300">
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
