"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Upload, Lock, FileText, Edit, Save, RefreshCw, AlertTriangle, Eye, EyeOff, Trash2 } from "lucide-react";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef, useContext, useEffect } from "react";
import { ProfileContext, type Profile } from "@/context/ProfileContext";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// --- INSTRUCCIONES ---
// Para cambiar las credenciales de acceso, modifica los siguientes valores.
const ADMIN_USERNAME = "estefania"; // Cambia "admin" por tu usuario deseado
const ADMIN_PASSWORD = "transparencia conectada"; // Cambia "password" por tu contraseña deseada
// --------------------

export default function MiCuentaPage() {
    const { toast } = useToast();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [qrKey, setQrKey] = useState(Date.now());
    
    const { profile, setProfile } = useContext(ProfileContext);
    const [localProfile, setLocalProfile] = useState<Profile>(profile);

    // State for login form
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        setLocalProfile(profile);
    }, [profile]);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError('');

        if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
            toast({
                title: "Inicio de Sesión Exitoso",
                description: `Bienvenida de nuevo, ${profile.name}.`,
            });
            setIsLoggedIn(true);
        } else {
            setError("Usuario o contraseña incorrectos. Intente de nuevo.");
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername('');
        setPassword('');
        setError('');
         toast({
            title: "Sesión Cerrada",
            description: "Ha cerrado sesión de forma segura.",
        });
    }

    const handleProfileSave = () => {
        setProfile(localProfile);
        toast({
            title: "Perfil Actualizado",
            description: "Su información ha sido guardada correctamente.",
        });
    };
    
    const handleFileSelectClick = () => {
        fileInputRef.current?.click();
    };
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setLocalProfile(prev => ({ ...prev, [id]: value }));
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const newAvatarUrl = reader.result as string;
                setLocalProfile(prev => ({ ...prev, avatar: newAvatarUrl }));
                toast({
                    title: "Foto Actualizada",
                    description: "La nueva foto de perfil está lista para ser guardada.",
                });
            };
            reader.readAsDataURL(file);
        } else if (file) {
             toast({
                title: "Archivo no válido",
                description: "Por favor, seleccione un archivo de imagen.",
                variant: "destructive"
            });
        }
    };
    
    const handleRegenerateQr = () => {
        toast({
            description: "Generando nuevo código QR...",
        });
        // Change the key to force re-render of the Image component
        setTimeout(() => {
            setQrKey(Date.now());
            toast({
                title: "QR Actualizado",
                description: "Su nuevo código QR ha sido generado.",
            });
        }, 1000);
    };

  if (!isLoggedIn) {
    return (
        <div className="flex justify-center items-center py-12">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <CardTitle>Acceso a Funcionarios</CardTitle>
                    <CardDescription>Inicie sesión para gestionar su perfil.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleLoginSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="username">Usuario</Label>
                            <Input id="username" placeholder="Su usuario institucional" required value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Contraseña</Label>
                             <div className="relative">
                                <Input 
                                    id="password" 
                                    type={showPassword ? "text" : "password"} 
                                    required 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="pr-10"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground"
                                    aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                                >
                                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </button>
                            </div>
                        </div>
                         {error && (
                            <Alert variant="destructive">
                                <AlertTriangle className="h-4 w-4" />
                                <AlertTitle>Error de Acceso</AlertTitle>
                                <AlertDescription>{error}</AlertDescription>
                            </Alert>
                        )}
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
            <Button onClick={handleLogout} variant="outline">Cerrar Sesión</Button>
        </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Profile Card */}
        <div className="lg:col-span-1 space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Mi Perfil Institucional</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex flex-col items-center space-y-4">
                         <Avatar className="w-24 h-24 ring-4 ring-primary/10">
                            <Image src={localProfile.avatar} alt={localProfile.name} width={96} height={96} data-ai-hint="woman director portrait" className="rounded-full object-cover" />
                             <AvatarFallback>{localProfile.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm" onClick={handleFileSelectClick}><Upload className="mr-2"/>Cambiar</Button>
                            <Button variant="ghost" size="sm" onClick={() => setLocalProfile(prev => ({...prev, avatar: ''}))}><Trash2 className="mr-2"/>Quitar</Button>
                        </div>
                        <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />
                    </div>
                   <div className="space-y-2">
                        <Label htmlFor="name">Nombre Completo</Label>
                        <Input id="name" value={localProfile.name} onChange={handleInputChange} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="title">Cargo</Label>
                        <Input id="title" value={localProfile.title} onChange={handleInputChange} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Correo Electrónico</Label>
                        <Input id="email" type="email" value={localProfile.email} onChange={handleInputChange} />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="phone">Teléfono</Label>
                        <Input id="phone" type="tel" value={localProfile.phone} onChange={handleInputChange} />
                    </div>
                    <Button className="w-full" onClick={handleProfileSave}><Save className="mr-2" />Guardar Cambios</Button>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Mi Ficha QR</CardTitle>
                    <CardDescription>Este QR enlaza a su perfil público.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                    <div className="p-4 border rounded-md">
                        <Image 
                            key={qrKey}
                            src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(`http://localhost:3000/perfiles-institucionales#${profile.id}`)}&r=${qrKey}`} 
                            alt="QR code"
                            width={150}
                            height={150}
                            className="mb-4"
                        />
                    </div>
                    <Button variant="secondary" className="w-full mt-4" onClick={handleRegenerateQr}>
                        <RefreshCw className="mr-2"/>
                        Volver a Generar QR
                    </Button>
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
                    <div className="p-6 border-2 border-dashed rounded-lg text-center flex flex-col items-center">
                        <Upload className="mx-auto h-12 w-12 text-muted-foreground"/>
                        <p className="mt-2 text-sm text-muted-foreground">Arrastre y suelte archivos aquí o haga clic para seleccionar</p>
                        <Input id="file-upload" type="file" className="hidden" />
                         <Button variant="outline" className="mt-4" onClick={() => document.getElementById('file-upload')?.click()}>
                            <FileText className="mr-2"/>
                            Seleccionar Archivos
                        </Button>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-primary mb-4">Mis Documentos Subidos</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center justify-between p-3 border rounded-lg hover:bg-secondary/50">
                                <div>
                                    <p className="font-medium">Reporte_Gestion_Q3_2025.pdf</p>
                                    <p className="text-sm text-muted-foreground">Subido: 30 de Septiembre, 2025</p>
                                </div>
                                <div className="flex items-center">
                                    <Button variant="ghost" size="icon"><Edit className="h-4 w-4"/></Button>
                                    <Button variant="ghost" size="icon" className="text-destructive"><Trash2 className="h-4 w-4"/></Button>
                                </div>
                            </li>
                             <li className="flex items-center justify-between p-3 border rounded-lg hover:bg-secondary/50">
                                <div>
                                    <p className="font-medium">Plan_Operativo_Anual_2026_Prop.docx</p>
                                    <p className="text-sm text-muted-foreground">Subido: 15 de Agosto, 2025</p>
                                </div>
                                 <div className="flex items-center">
                                    <Button variant="ghost" size="icon"><Edit className="h-4 w-4"/></Button>
                                    <Button variant="ghost" size="icon" className="text-destructive"><Trash2 className="h-4 w-4"/></Button>
                                </div>
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
