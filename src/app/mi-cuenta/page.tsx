
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Upload, Lock, FileText, Edit, Save, RefreshCw, AlertTriangle, Eye, EyeOff, Trash2, Image as ImageIcon, PlusCircle, Home, Download } from "lucide-react";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef, useContext, useEffect } from "react";
import { ProfileContext, type Profile } from "@/context/ProfileContext";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import type { GalleryItem } from "@/app/prensa-y-multimedia/galeria/page";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose, DialogFooter } from "@/components/ui/dialog";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

// --- INSTRUCCIONES ---
// Para cambiar las credenciales de acceso, modifica los siguientes valores.
const ADMIN_USERNAME = "estefania"; // Cambia "admin" por tu usuario deseado
const ADMIN_PASSWORD = "transparencia conectada"; // Cambia "password" por tu contraseña deseada
// --------------------

interface Document {
  id: string;
  name: string;
  date: string;
  file: File | null; // File can be null when loaded from localStorage
}

interface ActivityLog {
    id: string;
    date: string;
    description: string;
}

const initialGalleryItems: GalleryItem[] = [
  {
    id: "event1",
    title: "Sesión Inaugural del Comité de Transparencia",
    description: "Miembros del comité en la primera sesión oficial.",
    imageUrl: "https://picsum.photos/seed/event1/600/400",
    dataAiHint: "official committee meeting"
  },
  {
    id: "event2",
    title: "Taller de Datos Abiertos con la Comunidad",
    description: "Ciudadanos aprendiendo a usar las herramientas de la plataforma.",
    imageUrl: "https://picsum.photos/seed/event2/600/400",
    dataAiHint: "community workshop people"
  },
  {
    id: "event3",
    title: "Presentación del Presupuesto Anual",
    description: "El Secretario de Finanzas presenta el presupuesto 2025.",
    imageUrl: "https://picsum.photos/seed/event3/600/400",
    dataAiHint: "press conference presentation"
  },
];


const FullScreenLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full min-h-screen flex flex-col">
            <main className="flex-grow flex items-center justify-center bg-background p-4">
                {children}
            </main>
        </div>
    )
}

export default function MiCuentaPage() {
    const { toast } = useToast();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [qrKey, setQrKey] = useState(Date.now());
    
    const { profile, setProfile, isInitialized } = useContext(ProfileContext);
    const [localProfile, setLocalProfile] = useState<Profile>(profile);
    const [documents, setDocuments] = useState<Document[]>([]);
    const [docToEdit, setDocToEdit] = useState<Document | null>(null);
    const [docToDelete, setDocToDelete] = useState<Document | null>(null);

    const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
    const [itemToEdit, setItemToEdit] = useState<GalleryItem | null>(null);
    const [itemToDelete, setItemToDelete] = useState<GalleryItem | null>(null);
    
    const [activityLog, setActivityLog] = useState<ActivityLog[]>([]);

    // State for login form
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (isInitialized) {
            setLocalProfile(profile);
            
            const storedDocs = localStorage.getItem("userDocuments");
            if (storedDocs) {
                const parsedDocs = JSON.parse(storedDocs).map((d: any) => ({ ...d, file: null }));
                setDocuments(parsedDocs);
            }

            const storedGallery = localStorage.getItem("galleryItems");
            if (storedGallery) {
                setGalleryItems(JSON.parse(storedGallery));
            } else {
                setGalleryItems(initialGalleryItems);
                localStorage.setItem("galleryItems", JSON.stringify(initialGalleryItems));
            }
            
            const storedLog = localStorage.getItem("activityLog");
            if(storedLog) {
                setActivityLog(JSON.parse(storedLog));
            }
        }
    }, [profile, isInitialized]);

    const fileInputRef = useRef<HTMLInputElement>(null);
    const docUploadRef = useRef<HTMLInputElement>(null);
    const galleryUploadRef = useRef<HTMLInputElement>(null);

    const logActivity = (description: string) => {
        const newActivity: ActivityLog = {
            id: `activity-${Date.now()}`,
            date: new Date().toLocaleString('es-ES'),
            description: description,
        };
        const updatedLog = [newActivity, ...activityLog];
        setActivityLog(updatedLog);
        localStorage.setItem("activityLog", JSON.stringify(updatedLog));
    }

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

    const handleProfilePicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
        setTimeout(() => {
            setQrKey(Date.now());
            toast({
                title: "QR Actualizado",
                description: "Su nuevo código QR ha sido generado.",
            });
        }, 1000);
    };

    const handleDocumentUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const newDocs = Array.from(files).map(file => ({
                id: `doc-${Date.now()}-${Math.random()}`,
                name: file.name,
                date: new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' }),
                file: file
            }));
            const updatedDocs = [...documents, ...newDocs];
            setDocuments(updatedDocs);
            localStorage.setItem("userDocuments", JSON.stringify(updatedDocs.map(d => ({id: d.id, name: d.name, date: d.date}))));
            newDocs.forEach(d => logActivity(`Documento subido: "${d.name}"`));
            toast({
                title: `${newDocs.length} archivo(s) subido(s)`,
                description: "Los documentos están listos en la lista.",
            });
        }
    };

    const handleEditDoc = () => {
        if (docToEdit) {
            const updatedDocs = documents.map(doc => doc.id === docToEdit.id ? docToEdit : doc);
            setDocuments(updatedDocs);
            localStorage.setItem("userDocuments", JSON.stringify(updatedDocs.map(d => ({id: d.id, name: d.name, date: d.date}))));
            logActivity(`Documento editado: "${docToEdit.name}"`);
            toast({
                title: "Documento Actualizado",
                description: "El nombre del documento ha sido guardado.",
            });
            setDocToEdit(null);
        }
    };
    
    const handleDeleteDoc = () => {
        if (docToDelete) {
            const updatedDocs = documents.filter(doc => doc.id !== docToDelete.id);
            setDocuments(updatedDocs);
            localStorage.setItem("userDocuments", JSON.stringify(updatedDocs.map(d => ({id: d.id, name: d.name, date: d.date}))));
            logActivity(`Documento eliminado: "${docToDelete.name}"`);
            toast({
                title: "Documento Eliminado",
                description: `El archivo "${docToDelete.name}" ha sido eliminado.`,
                variant: "destructive"
            });
            setDocToDelete(null);
        }
    };
    
    const handleDownloadDoc = (doc: Document) => {
        if (doc.file) {
            const url = URL.createObjectURL(doc.file);
            const a = document.createElement('a');
            a.href = url;
            a.download = doc.name;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        } else {
            toast({
                title: "Archivo no disponible",
                description: "Este archivo fue cargado en una sesión anterior y no se puede descargar directamente. Por favor, súbalo de nuevo si necesita el archivo original.",
                variant: "destructive",
            });
        }
    };


    const handleGalleryUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            Array.from(files).forEach(file => {
                if(file.type.startsWith("image/")) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        const newGalleryItem: GalleryItem = {
                            id: `gallery-${Date.now()}-${Math.random()}`,
                            title: file.name,
                            description: "Nueva imagen añadida.",
                            imageUrl: reader.result as string,
                            dataAiHint: "new custom image",
                        };
                        const updatedItems = [newGalleryItem, ...galleryItems];
                        setGalleryItems(updatedItems);
                        localStorage.setItem("galleryItems", JSON.stringify(updatedItems));
                    };
                    reader.readAsDataURL(file);
                }
            });
             toast({
                title: `${files.length} imagen(es) subida(s)`,
                description: "Las imágenes se han añadido a la galería.",
            });
        }
    };

    const handleEditItem = () => {
        if (itemToEdit) {
            const updatedItems = galleryItems.map(item => item.id === itemToEdit.id ? itemToEdit : item);
            setGalleryItems(updatedItems);
            localStorage.setItem("galleryItems", JSON.stringify(updatedItems));
            toast({
                title: "Elemento Actualizado",
                description: "Los detalles de la imagen han sido guardados.",
            });
            setItemToEdit(null);
        }
    };

    const handleDeleteItem = () => {
        if (itemToDelete) {
            const updatedItems = galleryItems.filter(item => item.id !== itemToDelete.id);
            setGalleryItems(updatedItems);
            localStorage.setItem("galleryItems", JSON.stringify(updatedItems));
            toast({
                title: "Elemento Eliminado",
                description: `La imagen "${itemToDelete.title}" ha sido eliminada.`,
                variant: "destructive"
            });
            setItemToDelete(null);
        }
    };

  if (!isLoggedIn) {
    return (
        <FullScreenLayout>
            <Card className="w-full max-w-md border-0 shadow-none sm:border sm:shadow-lg">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl">Acceso a Funcionarios</CardTitle>
                    <CardDescription>Inicie sesión para continuar en la plataforma.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleLoginSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="username">Usuario</Label>
                            <Input id="username" placeholder="Tu usuario institucional" required value={username} onChange={(e) => setUsername(e.target.value)} />
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
                        <div className="flex flex-col gap-2">
                            <Button type="submit" className="w-full">
                                <Lock className="mr-2"/>
                                Iniciar Sesión
                            </Button>
                             <Button variant="outline" className="w-full" asChild>
                                <Link href="/">
                                    <Home className="mr-2"/>
                                    Volver a la Plataforma
                                </Link>
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </FullScreenLayout>
    );
  }

  if (!isInitialized) {
      return (
          <div className="space-y-8">
                <div className="flex justify-between items-start">
                    <div>
                        <Skeleton className="h-9 w-72" />
                        <Skeleton className="h-5 w-96 mt-2" />
                    </div>
                    <Skeleton className="h-10 w-32" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                     <div className="lg:col-span-1 space-y-8">
                         <Card>
                             <CardHeader><Skeleton className="h-7 w-48" /></CardHeader>
                             <CardContent className="space-y-6">
                                 <div className="flex flex-col items-center space-y-4">
                                     <Skeleton className="w-24 h-24 rounded-full" />
                                     <div className="flex gap-2">
                                        <Skeleton className="h-9 w-24" />
                                        <Skeleton className="h-9 w-20" />
                                     </div>
                                 </div>
                                 <div className="space-y-2"><Skeleton className="h-5 w-24" /><Skeleton className="h-10 w-full" /></div>
                                 <div className="space-y-2"><Skeleton className="h-5 w-16" /><Skeleton className="h-10 w-full" /></div>
                                 <div className="space-y-2"><Skeleton className="h-5 w-32" /><Skeleton className="h-10 w-full" /></div>
                                 <div className="space-y-2"><Skeleton className="h-5 w-20" /><Skeleton className="h-10 w-full" /></div>
                                 <Skeleton className="h-10 w-full" />
                             </CardContent>
                         </Card>
                         <Card>
                            <CardHeader>
                                <Skeleton className="h-7 w-24" />
                                <Skeleton className="h-5 w-64 mt-2" />
                            </CardHeader>
                             <CardContent className="flex flex-col items-center">
                                 <Skeleton className="h-[166px] w-[166px]" />
                                 <Skeleton className="h-10 w-full mt-4" />
                             </CardContent>
                         </Card>
                     </div>
                      <div className="lg:col-span-2 space-y-8">
                         <Card className="h-full">
                            <CardHeader>
                                <Skeleton className="h-7 w-80" />
                                <Skeleton className="h-5 w-96 mt-2" />
                            </CardHeader>
                         </Card>
                         <Card className="h-full">
                            <CardHeader>
                                <Skeleton className="h-7 w-80" />
                                <Skeleton className="h-5 w-96 mt-2" />
                            </CardHeader>
                         </Card>
                     </div>
                </div>
          </div>
      )
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
                            {localProfile.avatar ? (
                                <Image src={localProfile.avatar} alt={localProfile.name} width={96} height={96} data-ai-hint="woman director portrait" className="rounded-full object-cover" />
                            ) : (
                                <AvatarFallback>{localProfile.name.charAt(0)}</AvatarFallback>
                            )}
                        </Avatar>
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm" onClick={handleFileSelectClick}><Upload className="mr-2"/>Cambiar</Button>
                            <Button variant="ghost" size="sm" onClick={() => setLocalProfile(prev => ({...prev, avatar: ''}))}><Trash2 className="mr-2"/>Quitar</Button>
                        </div>
                        <input type="file" ref={fileInputRef} onChange={handleProfilePicChange} className="hidden" accept="image/*" />
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
                            src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(`http://localhost:3000/informacion-institucional/organigrama#${profile.id}`)}&r=${qrKey}`} 
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
        
        <div className="lg:col-span-2 space-y-8">
             <Card>
                <CardHeader>
                    <CardTitle>Gestión de Documentos y Reportes</CardTitle>
                    <CardDescription>Suba y administre sus archivos públicos.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="p-6 border-2 border-dashed rounded-lg text-center flex flex-col items-center">
                        <Upload className="mx-auto h-12 w-12 text-muted-foreground"/>
                        <p className="mt-2 text-sm text-muted-foreground">Arrastre y suelte archivos aquí o haga clic para seleccionar</p>
                        <input id="file-upload" type="file" className="hidden" ref={docUploadRef} onChange={handleDocumentUpload} multiple />
                         <Button variant="outline" className="mt-4" onClick={() => docUploadRef.current?.click()}>
                            <FileText className="mr-2"/>
                            Seleccionar Archivos
                        </Button>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-primary">Mis Documentos Subidos</h3>
                        {documents.length > 0 ? (
                            <ul className="space-y-3">
                                {documents.map((doc) => (
                                <li key={doc.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-secondary/50">
                                    <div>
                                        <p className="font-medium">{doc.name}</p>
                                        <p className="text-sm text-muted-foreground">Subido: {doc.date}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <Button variant="ghost" size="icon" onClick={() => handleDownloadDoc(doc)}><Download className="h-4 w-4"/></Button>
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button variant="ghost" size="icon" onClick={() => setDocToEdit({...doc})}><Edit className="h-4 w-4"/></Button>
                                            </DialogTrigger>
                                            <DialogContent>
                                                <DialogHeader>
                                                    <DialogTitle>Editar Nombre del Documento</DialogTitle>
                                                </DialogHeader>
                                                {docToEdit && (
                                                    <div className="space-y-4 py-4">
                                                        <div className="space-y-2">
                                                            <Label htmlFor="edit-doc-name">Nombre del Documento</Label>
                                                            <Input id="edit-doc-name" value={docToEdit.name} onChange={(e) => setDocToEdit({...docToEdit, name: e.target.value})} />
                                                        </div>
                                                    </div>
                                                )}
                                                <DialogFooter>
                                                    <DialogClose asChild><Button variant="ghost">Cancelar</Button></DialogClose>
                                                    <Button onClick={handleEditDoc}>Guardar Cambios</Button>
                                                </DialogFooter>
                                            </DialogContent>
                                        </Dialog>
                                        <Button variant="ghost" size="icon" className="text-destructive" onClick={() => setDocToDelete(doc)}><Trash2 className="h-4 w-4"/></Button>
                                    </div>
                                </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-center text-muted-foreground p-6">No hay documentos subidos.</p>
                        )}
                    </div>
                     <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-primary">Actividad Reciente de Documentos</h3>
                        {activityLog.length > 0 ? (
                             <ul className="space-y-3 max-h-60 overflow-y-auto border rounded-lg p-3">
                                {activityLog.map((log) => (
                                    <li key={log.id} className="text-sm text-muted-foreground">
                                        <span className="font-mono text-xs mr-2">[{log.date}]</span>
                                        {log.description}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-center text-muted-foreground p-6">No hay actividad registrada.</p>
                        )}
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Gestión de Galería Multimedia</CardTitle>
                    <CardDescription>Añada, edite y elimine las imágenes de la galería pública.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                     <input id="gallery-upload" type="file" className="hidden" ref={galleryUploadRef} onChange={handleGalleryUpload} multiple accept="image/*" />
                     <Button variant="outline" className="w-full" onClick={() => galleryUploadRef.current?.click()}>
                        <PlusCircle className="mr-2"/>
                        Añadir Nuevas Imágenes
                    </Button>

                     <div>
                        <h3 className="text-lg font-semibold text-primary mb-4">Imágenes de la Galería</h3>
                        {galleryItems.length > 0 ? (
                            <ul className="space-y-3">
                                {galleryItems.map((item) => (
                                <li key={item.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-secondary/50">
                                    <div className="flex items-center gap-4">
                                        <Image src={item.imageUrl} alt={item.title} width={64} height={64} className="rounded-md object-cover aspect-square" />
                                        <div>
                                            <p className="font-medium">{item.title}</p>
                                            <p className="text-sm text-muted-foreground truncate max-w-xs">{item.description}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button variant="ghost" size="icon" onClick={() => setItemToEdit({...item})}><Edit className="h-4 w-4"/></Button>
                                            </DialogTrigger>
                                            <DialogContent>
                                                <DialogHeader>
                                                    <DialogTitle>Editar Elemento de la Galería</DialogTitle>
                                                </DialogHeader>
                                                {itemToEdit && (
                                                    <div className="space-y-4 py-4">
                                                        <div className="space-y-2">
                                                            <Label htmlFor="edit-title">Título</Label>
                                                            <Input id="edit-title" value={itemToEdit.title} onChange={(e) => setItemToEdit({...itemToEdit, title: e.target.value})} />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <Label htmlFor="edit-description">Descripción</Label>
                                                            <Textarea id="edit-description" value={itemToEdit.description} onChange={(e) => setItemToEdit({...itemToEdit, description: e.target.value})} />
                                                        </div>
                                                    </div>
                                                )}
                                                <DialogFooter>
                                                    <DialogClose asChild><Button variant="ghost">Cancelar</Button></DialogClose>
                                                    <Button onClick={handleEditItem}>Guardar Cambios</Button>
                                                </DialogFooter>
                                            </DialogContent>
                                        </Dialog>
                                        <Button variant="ghost" size="icon" className="text-destructive" onClick={() => setItemToDelete(item)}><Trash2 className="h-4 w-4"/></Button>
                                    </div>
                                </li>
                                ))}
                            </ul>
                        ) : (
                             <p className="text-center text-muted-foreground p-6">No hay imágenes en la galería.</p>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>

      </div>

      {docToDelete && (
        <AlertDialog open onOpenChange={() => setDocToDelete(null)}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>¿Está seguro que desea eliminar?</AlertDialogTitle>
              <AlertDialogDescription>
                Esta acción no se puede deshacer. Esto eliminará permanentemente el documento
                <span className="font-bold"> {docToDelete.name}</span>.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction onClick={handleDeleteDoc} className={buttonVariants({ variant: "destructive" })}>Eliminar</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}

       {itemToDelete && (
        <AlertDialog open onOpenChange={() => setItemToDelete(null)}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>¿Está seguro que desea eliminar esta imagen?</AlertDialogTitle>
              <AlertDialogDescription>
                Esta acción no se puede deshacer. Esto eliminará permanentemente la imagen titulada
                <span className="font-bold"> {itemToDelete.title}</span>.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction onClick={handleDeleteItem} className={buttonVariants({ variant: "destructive" })}>Eliminar</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </div>
  );
}
