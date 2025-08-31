
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building, FileText, Users, MessageSquare, Target, ShieldCheck, Scale, BookOpen } from "lucide-react";
import Image from "next/image";


export default function Home() {
  return (
    <div className="space-y-16">
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
         <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">Módulos Principales</h2>
            <p className="mt-2 text-muted-foreground">Navega a las diferentes secciones de la plataforma.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <Card className="hover:border-primary/50 hover:shadow-primary/10 transition-all duration-300 flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="text-accent" />
                Información Institucional
              </CardTitle>
              <CardDescription>Conoce la estructura, responsables y el marco legal que nos rige.</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex items-end">
              <Button variant="outline" className="w-full" asChild><Link href="/informacion-institucional/organigrama">Explorar Instituciones</Link></Button>
            </CardContent>
          </Card>
           <Card className="hover:border-primary/50 hover:shadow-primary/10 transition-all duration-300 flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="text-accent" />
                Transparencia
              </CardTitle>
              <CardDescription>Accede a informes, documentos y datos abiertos sobre la gestión pública.</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex items-end">
              <Button variant="outline" className="w-full" asChild><Link href="/transparencia/informes">Explorar Documentos</Link></Button>
            </CardContent>
          </Card>
           <Card className="hover:border-primary/50 hover:shadow-primary/10 transition-all duration-300 flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="text-accent" />
                Participación Ciudadana
              </CardTitle>
              <CardDescription>Tu voz es importante. Envía propuestas, participa en encuestas y más.</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex items-end">
               <Button variant="outline" className="w-full" asChild><Link href="/participacion-ciudadana/buzon">Explorar Participación</Link></Button>
            </CardContent>
          </Card>
           <Card className="hover:border-primary/50 hover:shadow-primary/10 transition-all duration-300 flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="text-accent" />
                Contacto y Solicitudes
              </CardTitle>
              <CardDescription>Encuentra directorios y canales oficiales para tus consultas.</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex items-end">
                <Button variant="outline" className="w-full" asChild><Link href="/contacto/directorio">Explorar Contacto</Link></Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="text-center">
         <h2 className="text-3xl font-bold text-primary">Un Proyecto con Alma</h2>
         <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            Esta plataforma es una iniciativa de <span className="text-accent font-semibold">Estefanía Pérez Vázquez</span>, creada con el propósito de fortalecer la democracia a través de la tecnología y la participación ciudadana.
         </p>
         <div className="mt-6">
            <Button asChild variant="outline">
                <Link href="/informacion-institucional/organigrama#directora-estefania-perez">
                    Conoce a la Fundadora
                </Link>
            </Button>
         </div>
      </section>

    </div>
  );
}
