
"use client";

import React, { useState, useRef, useContext, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Mail, Phone, QrCode, Download, Building, Globe, Search, User, Briefcase, MapPin, Share2, Sparkles, Goal, Lightbulb, Loader } from "lucide-react";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import html2canvas from 'html2canvas';
import { ProfileContext, type Profile } from '@/context/ProfileContext';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';


const foundingPartner: Profile = {
    id: "fanny-design-style",
    name: "Fanny Design Style",
    title: "Agencia Fundadora",
    avatar: "https://picsum.photos/100/100?q=8",
    email: "contacto@fannydesign.com",
    phone: "+52 222 123 4567",
    dataAiHint: "logo design agency",
    department: "Diseño Gráfico y Servicios Institucionales Corporativos",
    website: "www.fannydesign.com"
};

const otherInstitutions: Profile[] = [
    {
      id: "congreso-oaxaca",
      name: "Congreso del Estado de Oaxaca",
      title: "Poder Legislativo",
      avatar: "https://picsum.photos/100/100?q=9",
      email: "contacto@congresooaxaca.gob.mx",
      phone: "+52 951 502 0230",
      dataAiHint: "government building illustration",
      department: "Congreso del Estado",
      website: "www.congresooaxaca.gob.mx"
    }
];

const departments: { name: string; lead: Profile; }[] = [
  {
    name: "Secretaría de Finanzas",
    lead: {
      id: "finanzas-carlos-sanchez",
      name: "Carlos Sánchez",
      title: "Secretario de Finanzas",
      avatar: "https://picsum.photos/100/100?q=2",
      email: "finanzas@oaxaca.gob.mx",
      phone: "+52 951 987 6543",
      dataAiHint: "man portrait",
      department: "Secretaría de Finanzas"
    },
  },
  {
    name: "Secretaría de Salud",
    lead: {
      id: "salud-lucia-fernandez",
      name: "Lucía Fernández",
      title: "Secretaria de Salud",
      avatar: "https://picsum.photos/100/100?q=3",
      email: "salud@oaxaca.gob.mx",
      phone: "+52 951 876 5432",
      dataAiHint: "woman portrait professional",
      department: "Secretaría de Salud"
    },
  },
    {
    name: "Secretaría de Bienestar",
    lead: {
      id: "bienestar-javier-moreno",
      name: "Javier Moreno",
      title: "Secretario de Bienestar",
      avatar: "https://picsum.photos/100/100?q=4",
      email: "bienestar@oaxaca.gob.mx",
      phone: "+52 951 765 4321",
      dataAiHint: "man portrait professional",
      department: "Secretaría de Bienestar"
    },
  },
];

const InstitutionalCard = ({ profile, onClose }: { profile: Profile, onClose: () => void }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const { toast } = useToast();
    const [isDownloading, setIsDownloading] = useState(false);

    const downloadCard = () => {
        if (cardRef.current) {
            setIsDownloading(true);
            toast({ title: "Generando Ficha...", description: "Por favor espere un momento." });
            html2canvas(cardRef.current, {
                useCORS: true,
                scale: 2, // Aumentar la resolución para mejor calidad
                backgroundColor: null, 
            }).then(canvas => {
                const link = document.createElement('a');
                link.download = `ficha-institucional-${profile.id}.png`;
                link.href = canvas.toDataURL("image/png");
                link.click();
                setIsDownloading(false);
                toast({ title: "¡Descarga Completa!", description: "La ficha se ha guardado en su dispositivo." });
            }).catch(err => {
                console.error("Error al generar la imagen:", err);
                setIsDownloading(false);
                toast({ title: "Error de Descarga", description: "No se pudo generar la ficha. Intente de nuevo.", variant: "destructive" });
            });
        }
    };
    
    const handleShare = () => {
        toast({
            title: "Función no disponible",
            description: "La opción de compartir se implementará próximamente.",
        });
    }

    const profileUrl = typeof window !== 'undefined' ? `${window.location.origin}/perfiles-institucionales#${profile.id}` : '';
    const location = "Oaxaca de Juárez, OAX, México"; // Hardcoded location as per image

    return (
        <Dialog open={true} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-lg p-0 bg-transparent border-none shadow-none">
                <DialogHeader className="sr-only">
                    <DialogTitle>Ficha Institucional de {profile.name}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                    <div ref={cardRef} className="bg-card text-card-foreground rounded-lg overflow-hidden">
                        <div className="bg-primary text-primary-foreground px-6 py-3 flex justify-between items-center">
                            <h3 className="font-bold text-lg">Ficha Institucional</h3>
                            <span className="text-sm font-semibold tracking-wider">TC</span>
                        </div>
                        <div className="p-6 pb-4">
                            <div className="flex items-start gap-4 mb-4">
                                <Image src={profile.avatar} alt={profile.name} width={64} height={64} data-ai-hint={profile.dataAiHint} className="rounded-md ring-2 ring-background mt-1" />
                                <div className="space-y-1.5 text-sm">
                                    <h4 className="font-bold text-base text-primary">{profile.name}</h4>
                                    <p><strong className="font-medium">Cargo:</strong> {profile.title}</p>
                                    <p><strong className="font-medium">Dependencia:</strong> {profile.department}</p>
                                    <p><strong className="font-medium">Ubicación:</strong> {location}</p>
                                </div>
                            </div>
                            <hr className="my-4 border-border" />
                            <div className="space-y-4 text-sm">
                                <div>
                                    <h5 className="font-bold text-primary mb-2 flex items-center gap-2"><Sparkles className="text-accent" /> Perfil Profesional</h5>
                                    <p className="text-muted-foreground">
                                        Diseñadora estratégica y gestora de innovación cívica. Fundadora de Fanny Design Style y creadora de Transparencia Conectada, una plataforma que impulsa la transparencia institucional desde la ciudadanía.
                                    </p>
                                </div>
                                <div>
                                    <h5 className="font-bold text-primary mb-2 flex items-center gap-2"><Lightbulb className="text-accent" /> Habilidades Destacadas</h5>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="outline">Diseño institucional</Badge>
                                        <Badge variant="outline">Branding profesional</Badge>
                                        <Badge variant="outline">Narrativas visuales</Badge>
                                        <Badge variant="outline">Integración de herramientas</Badge>
                                    </div>
                                </div>
                                <div>
                                    <h5 className="font-bold text-primary mb-2 flex items-center gap-2"><Goal className="text-accent" /> Objetivos Actuales</h5>
                                    <p className="text-muted-foreground">
                                        Refinar la estructura visual de la plataforma, integrar métricas en tiempo real con Azure Application Insights y empoderar equipos institucionales con herramientas de autogestión.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-secondary/30 px-6 py-3 flex justify-between items-center mt-4">
                             <span className="text-xs text-muted-foreground">Transparencia Conectada - Agosto 2025</span>
                             <Image 
                                src={`https://api.qrserver.com/v1/create-qr-code/?size=40x40&data=${encodeURIComponent(profileUrl)}&qzone=1`} 
                                alt={`QR code for ${profile.name}`}
                                width={40}
                                height={40}
                            />
                        </div>
                    </div>
                     <div className="flex gap-2">
                        <Button onClick={downloadCard} className="w-full" disabled={isDownloading}>
                            {isDownloading ? <Loader className="animate-spin" /> : <Download />}
                            Descargar
                        </Button>
                        <Button onClick={handleShare} className="w-full" variant="outline">
                           <Share2 />
                           Compartir
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};


const ProfileCard = ({ profile, onShowCard }: { profile: Profile; onShowCard: (profile: Profile) => void; }) => (
  <div id={profile.id} className="flex items-center gap-6 p-6 border-b">
    <Avatar className="w-24 h-24 ring-2 ring-primary/10">
      <Image src={profile.avatar} alt={profile.name} width={96} height={96} data-ai-hint={profile.dataAiHint} className="rounded-full object-cover" />
    </Avatar>
    <div className="flex-grow">
        <p className="font-bold text-xl text-primary">{profile.name}</p>
        <p className="text-md text-muted-foreground">{profile.title}</p>
        <p className="text-sm text-muted-foreground mt-1 bg-secondary/50 px-2 py-1 rounded-full inline-block">{profile.department}</p>
        <div className="mt-4 space-y-2 text-sm">
          <a href={`mailto:${profile.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Mail className="h-4 w-4" />
            <span>{profile.email}</span>
          </a>
          <a href={`tel:${profile.phone}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Phone className="h-4 w-4" />
            <span>{profile.phone}</span>
          </a>
          {profile.website && (
             <a href={`https://${profile.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Globe className="h-4 w-4" />
                <span>{profile.website}</span>
            </a>
          )}
        </div>
    </div>
    <Button variant="outline" size="sm" onClick={() => onShowCard(profile)}>
        <QrCode className="mr-2 h-4 w-4"/>
        Ver Ficha
    </Button>
  </div>
);

export default function ImagenPublicaPage() {
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const { profile: topLevelProfile } = useContext(ProfileContext);
  const [searchTerm, setSearchTerm] = useState("");

  const allProfiles = useMemo(() => {
    return [topLevelProfile, foundingPartner, ...departments.map(d => d.lead), ...otherInstitutions];
  }, [topLevelProfile]);

  const filteredProfiles = useMemo(() => {
    if (!searchTerm) return allProfiles;
    return allProfiles.filter(p =>
      p && p.department && p.department.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, allProfiles]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div>
            <h1 className="text-3xl font-bold text-primary">Organigrama</h1>
            <p className="text-muted-foreground">
                Representación visual legítima, validada institucionalmente. Conozca la estructura y responsables.
            </p>
        </div>
        <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
                type="search"
                placeholder="Buscar por dependencia..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
      </div>
      
      <div className="border rounded-lg bg-card">
        {filteredProfiles.length > 0 ? filteredProfiles.map((profile) => (
            profile ? <ProfileCard key={profile.id} profile={profile} onShowCard={setSelectedProfile} /> : null
        )) : (
            <p className="text-center text-muted-foreground p-10">
                No se encontraron perfiles que coincidan con la búsqueda.
            </p>
        )}
      </div>
      
      {selectedProfile && (
        <InstitutionalCard 
            profile={selectedProfile} 
            onClose={() => setSelectedProfile(null)}
        />
      )}
    </div>
  );
}

    