
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
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
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
            <h2 className="text-3xl font-bold text-primary">Principios Fundamentales</h2>
            <p className="mt-2 text-muted-foreground">La esencia de nuestra plataforma.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:border-primary/50 hover:shadow-primary/10 transition-all duration-300 flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="text-accent" />
                Nuestro Objetivo
              </CardTitle>
              <CardDescription>Fortalecer la democracia y la confianza ciudadana a través de la tecnología cívica y la transparencia radical.</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex items-end">
              <Button variant="outline" className="w-full" asChild><Link href="#">Conocer la Misión</Link></Button>
            </CardContent>
          </Card>
           <Card className="hover:border-primary/50 hover:shadow-primary/10 transition-all duration-300 flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldCheck className="text-accent" />
                Propuesta de Valor
              </CardTitle>
              <CardDescription>Ofrecemos una estructura ética, modular y pública que amplifica la voz legítima de los ciudadanos.</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex items-end">
              <Button variant="outline" className="w-full" asChild><Link href="#">Ver Beneficios</Link></Button>
            </CardContent>
          </Card>
           <Card className="hover:border-primary/50 hover:shadow-primary/10 transition-all duration-300 flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="text-accent" />
                Manifiesto
              </CardTitle>
              <CardDescription>Creemos en la acción pública dignificada, en la participación informada y en la tecnología como puente.</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex items-end">
               <Button variant="outline" className="w-full" asChild><Link href="#">Leer Principios</Link></Button>
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
