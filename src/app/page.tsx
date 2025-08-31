
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
            <h2 className="text-3xl font-bold text-primary">Propuesta de Valor</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Digitalizamos la confianza, transformando la transparencia en una herramienta de participación activa y dignificando la acción pública desde la raíz.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
                <CardHeader>
                  <Target className="mx-auto h-12 w-12 text-accent" />
                  <CardTitle>Claridad Radical</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Acceso sin precedentes a información pública, presentada de forma clara y comprensible.</p>
                </CardContent>
            </Card>
            <Card className="text-center">
                <CardHeader>
                  <Users className="mx-auto h-12 w-12 text-accent" />
                  <CardTitle>Participación Auténtica</CardTitle>
                </CardHeader>
                <CardContent>
                   <p>Herramientas que permiten a la ciudadanía proponer, opinar e incidir en las decisiones públicas.</p>
                </CardContent>
            </Card>
            <Card className="text-center">
                <CardHeader>
                  <ShieldCheck className="mx-auto h-12 w-12 text-accent" />
                  <CardTitle>Legitimidad Verificable</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Cada acción y perfil en la plataforma está validado institucionalmente, garantizando confianza.</p>
                </CardContent>
            </Card>
        </div>
      </section>

      <section className="bg-card p-10 rounded-2xl border border-primary/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                  <h2 className="text-3xl font-bold text-primary mb-4">Manifiesto de la Plataforma</h2>
                  <div className="space-y-4 text-muted-foreground">
                      <p>Creemos en un gobierno que rinde cuentas y en una ciudadanía que participa activamente. Esta plataforma es el puente.</p>
                      <p>La transparencia no es solo un deber, es el fundamento de la confianza. La confianza es la base de la colaboración. Y la colaboración es el motor del progreso.</p>
                      <p>Nos comprometemos a construir herramientas que sean éticas en su diseño, modulares en su estructura y públicas en su propósito. Para dignificar la acción pública, se empieza por hacerla visible.</p>
                  </div>
              </div>
              <div className="flex justify-center">
                <Image src="https://picsum.photos/400/400" alt="Manifiesto" width={300} height={300} data-ai-hint="abstract art lines" className="rounded-lg shadow-lg"/>
              </div>
          </div>
      </section>
      
      <section>
         <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">Módulos Principales</h2>
            <p className="mt-2 text-muted-foreground">Navega a las diferentes secciones de la plataforma.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
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
