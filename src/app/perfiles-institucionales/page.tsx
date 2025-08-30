"use client";

import React, { useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Mail, Phone, QrCode, Download, Building, Globe } from "lucide-react";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import html2canvas from 'html2canvas';

type Profile = {
  id: string;
  name: string;
  title: string;
  avatar: string;
  email: string;
  phone: string;
  dataAiHint?: string;
  department: string;
  website?: string;
};

const topLevel: Profile = {
  id: "directora-estefania-perez",
  name: "Estefanía Pérez Vázquez",
  title: "Directora y Fundadora",
  avatar: "https://picsum.photos/100/100?q=5",
  email: "direccion@ptic-oaxaca.org",
  phone: "+52 951 123 4567",
  dataAiHint: "woman director portrait",
  department: "Dirección General"
};

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
  <Card id={profile.id} className="text-center p-4 flex flex-col items-center shadow-sm hover:shadow-lg transition-shadow">
    <Avatar className="w-20 h-20 mb-4 ring-2 ring-primary/20">
      <Image src={profile.avatar} alt={profile.name} width={80} height={80} data-ai-hint={profile.dataAiHint} className="rounded-full" />
    </Avatar>
    <p className="font-bold text-lg text-primary">{profile.name}</p>
    <p className="text-sm text-muted-foreground">{profile.title}</p>
    <div className="mt-4 space-y-2 text-sm">
      <a href={`mailto:${profile.email}`} className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors">
        <Mail className="h-4 w-4" />
        <span>{profile.email}</span>
      </a>
      <a href={`tel:${profile.phone}`} className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors">
        <Phone className="h-4 w-4" />
        <span>{profile.phone}</span>
      </a>
      {profile.website && (
         <a href={`https://${profile.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Globe className="h-4 w-4" />
            <span>{profile.website}</span>
        </a>
      )}
    </div>
    <Button variant="outline" size="sm" className="mt-4" onClick={() => onShowCard(profile)}>
        <QrCode className="mr-2 h-4 w-4"/>
        Ver Ficha
    </Button>
  </Card>
);

export default function ImagenPublicaPage() {
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-primary">Imagen Pública</h1>
      <p className="text-muted-foreground">
        Representación visual legítima, validada institucionalmente. Conozca la estructura y responsables.
      </p>

      <Card>
        <CardHeader>
          <CardTitle>Dirección y Socios Fundadores</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
            <ProfileCard profile={topLevel} onShowCard={setSelectedProfile} />
            <ProfileCard profile={foundingPartner} onShowCard={setSelectedProfile} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Perfiles Institucionales (Secretarías)</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
          {departments.map((dept) => (
              <ProfileCard key={dept.lead.id} profile={dept.lead} onShowCard={setSelectedProfile} />
          ))}
        </CardContent>
      </Card>
      
      {selectedProfile && (
        <InstitutionalCard 
            profile={selectedProfile} 
            onClose={() => setSelectedProfile(null)}
        />
      )}
    </div>
  );
}
