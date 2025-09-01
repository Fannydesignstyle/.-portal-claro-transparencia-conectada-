
"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader, Send, Mail, Phone, ArrowLeft, Home } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const contactSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, ingrese un correo electrónico válido." }),
  subject: z.string().min(5, { message: "El asunto debe tener al menos 5 caracteres." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

type ContactFormInputs = z.infer<typeof contactSchema>;

export default function ContactoPage() {
  const { toast } = useToast();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);

    console.log(data); // In a real app, you would send this data to a server

    toast({
      title: "Mensaje Enviado",
      description: "Gracias por contactarnos. Nos pondremos en contacto contigo pronto.",
    });
    reset();
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
            <h1 className="text-3xl font-bold text-primary">Contacto y Solicitudes</h1>
            <p className="text-muted-foreground">
                ¿Tiene alguna pregunta o solicitud? Estamos aquí para ayudarle.
            </p>
        </div>
         <div className="flex gap-2">
            <Button variant="outline" onClick={() => router.back()}>
                <ArrowLeft />
                Volver
            </Button>
            <Button variant="outline" asChild>
                <Link href="/">
                    <Home />
                    Inicio
                </Link>
            </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Enviar un Mensaje</CardTitle>
              <CardDescription>Complete el formulario y nos pondremos en contacto.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre</Label>
                    <Input id="name" {...register("name")} />
                    {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input id="email" type="email" {...register("email")} />
                    {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Asunto</Label>
                  <Input id="subject" {...register("subject")} />
                  {errors.subject && <p className="text-sm text-destructive">{errors.subject.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea id="message" rows={5} {...register("message")} />
                  {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? <Loader className="animate-spin" /> : <Send />}
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Información de Contacto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <a href="mailto:fannydesignstyle@outlook.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5 text-accent" />
                <span>fannydesignstyle@outlook.com</span>
              </a>
              <a href="tel:9517439204" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-5 w-5 text-accent" />
                <span>951 743 9204</span>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
