
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Upload, User, Lock, FileText, BarChart, Edit, Save } from "lucide-react";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export default function MiCuentaPage() {
    const { toast } = useToast();
    const [isEditing, setIsEditing] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        if (!isEditing) {
            // This is the login form
            toast({
                title: "Inicio de Sesión Exitoso",
                description: "Bienvenido de nuevo, Funcionario.",
                variant: "default",
            });
            // Here you would typically handle actual login logic
            // For this demo, we'll just switch to the editing view.
            setIsEditing(true);
        } else {
            // This is the profile update form
            toast({
                title: "Perfil Actualizado",
                description: "Su información ha sido guardada correctamente.",
                variant: "default",
            });
            setIsEditing(false); // Go back to a "view" state after saving.
        }
    };

  if (!isEditing) {
    return (
        <div className="flex justify-center items-center py-12">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <CardTitle>Acceso a Funcionarios</CardTitle>
                    <CardDescription>Inicie sesión para gestionar su perfil.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="username">Usuario</Label>
                            <Input id="username" placeholder="Su usuario institucional" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Contraseña</Label>
                            <Input id="password" type="password" required />
                        </div>
                        <Button type="submit" className="w-full">
                            <Lock className="mr-2"/>
                            Iniciar Sesión
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
  }

  return (
    <div className="space-y-8">
        <div className="flex justify-between items-start">
            <div>
                <h1 className="text-3xl font-bold text-primary">Panel Administrativo</h1>
                <p className="text-muted-foreground">Gestione su perfil, documentos y reportes.</p>
            </div>
            <Button onClick={() => setIsEditing(false)}>Cerrar Sesión</Button>
        </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Profile Card */}
        <div className="lg:col-span-1 space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Mi Perfil Institucional</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex flex-col items-center space-y-4">
                         <Avatar className="w-24 h-24 ring-4 ring-primary/20">
                            <Image src="https://picsum.photos/100/100?q=7" alt="Funcionario" width={96} height={96} data-ai-hint="person portrait professional" className="rounded-full" />
                        </Avatar>
                        <Button variant="outline" size="sm"><Upload className="mr-2"/>Cambiar Foto</Button>
                    </div>
                   <div className="space-y-2">
                        <Label htmlFor="name">Nombre Completo</Label>
                        <Input id="name" defaultValue="Juan Pérez" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="title">Cargo</Label>
                        <Input id="title" defaultValue="Secretario de Desarrollo Urbano" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Correo Electrónico</Label>
                        <Input id="email" type="email" defaultValue="desarrollo.urbano@oaxaca.gob.mx" />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="phone">Teléfono</Label>
                        <Input id="phone" type="tel" defaultValue="+52 951 234 5678" />
                    </div>
                    <Button className="w-full"><Save className="mr-2" />Guardar Cambios</Button>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Mi Ficha QR</CardTitle>
                    <CardDescription>Este QR enlaza a su perfil público.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                    <Image 
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent("http://localhost:3000/perfiles-institucionales#juan-perez")}`} 
                        alt="QR code"
                        width={150}
                        height={150}
                        className="mb-4"
                    />
                    <Button variant="secondary" className="w-full">Volver a Generar QR</Button>
                </CardContent>
            </Card>
        </div>
        
        {/* Document Management */}
        <div className="lg:col-span-2">
             <Card className="h-full">
                <CardHeader>
                    <CardTitle>Gestión de Documentos y Reportes</CardTitle>
                    <CardDescription>Suba y administre sus archivos públicos.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="p-6 border-2 border-dashed rounded-lg text-center">
                        <Upload className="mx-auto h-12 w-12 text-muted-foreground"/>
                        <p className="mt-2 text-sm text-muted-foreground">Arrastre y suelte archivos aquí o haga clic para seleccionar</p>
                        <Input type="file" className="hidden"/>
                         <Button variant="outline" className="mt-4">
                            <FileText className="mr-2"/>
                            Seleccionar Archivos
                        </Button>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-primary mb-4">Mis Documentos Subidos</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                                <div>
                                    <p className="font-medium">Reporte_Gestion_Q2_2024.pdf</p>
                                    <p className="text-sm text-muted-foreground">Subido: 15 de Junio, 2024</p>
                                </div>
                                <Button variant="ghost" size="icon" className="text-destructive"><Edit className="h-4 w-4"/></Button>
                            </li>
                             <li className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                                <div>
                                    <p className="font-medium">Plan_Operativo_Anual_2024.docx</p>
                                    <p className="text-sm text-muted-foreground">Subido: 1 de Febrero, 2024</p>
                                </div>
                                <Button variant="ghost" size="icon" className="text-destructive"><Edit className="h-4 w-4"/></Button>
                            </li>
                        </ul>
                    </div>
                </CardContent>
            </Card>
        </div>

      </div>
    </div>
  );
}
