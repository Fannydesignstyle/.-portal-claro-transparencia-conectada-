
"use client";

import React, { useState, useRef, useContext, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Mail, Phone, QrCode, Download, Building, Globe, Search } from "lucide-react";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import html2canvas from 'html2canvas';
import { ProfileContext, type Profile } from '@/context/ProfileContext';
import { Input } from '@/components/ui/input';

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

    const downloadCard = () => {
        if (cardRef.current) {
            html2canvas(cardRef.current, { useCORS: true }).then(canvas => {
                const link = document.createElement('a');
                link.download = `ficha-institucional-${profile.id}.png`;
                link.href = canvas.toDataURL("image/png");
                link.click();
            });
        }
    };

    const profileUrl = typeof window !== 'undefined' ? `${window.location.origin}/perfiles-institucionales#${profile.id}` : '';

    return (
        <Dialog open={true} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Ficha Institucional</DialogTitle>
                </DialogHeader>
                <div ref={cardRef} className="bg-card p-6 border rounded-lg">
                    <div className="flex flex-col items-center text-center">
                        <Image src={profile.avatar} alt={profile.name} width={96} height={96} data-ai-hint={profile.dataAiHint} className="rounded-full ring-2 ring-primary mb-4" />
                        <h3 className="text-xl font-bold text-primary">{profile.name}</h3>
                        <p className="text-muted-foreground">{profile.title}</p>
                        <p className="text-sm text-muted-foreground">{profile.department}</p>
                    </div>
                    <div className="mt-6 flex justify-center">
                        <Image 
                            src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(profileUrl)}`} 
                            alt={`QR code for ${profile.name}`}
                            width={150}
                            height={150}
                        />
                    </div>
                    <div className="mt-4 text-center text-xs text-muted-foreground">
                        Escanea para ver el perfil completo
                    </div>
                </div>
                 <Button onClick={downloadCard} className="w-full mt-4">
                    <Download className="mr-2 h-4 w-4" />
                    Descargar Ficha
                </Button>
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
      p.department && p.department.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, allProfiles]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div>
            <h1 className="text-3xl font-bold text-primary">Imagen Pública</h1>
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
            <ProfileCard key={profile.id} profile={profile} onShowCard={setSelectedProfile} />
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
