"use client";

import React, { useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Phone, QrCode, Download, X } from "lucide-react";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import html2canvas from 'html2canvas';

type Profile = {
  id: string;
  name: string;
  title: string;
  avatar: string;
  initials: string;
  email: string;
  phone: string;
  dataAiHint?: string;
  department: string;
};

const topLevel: Profile = {
  id: "alcaldesa-ana-garcia",
  name: "Ana García",
  title: "Gobernadora del Estado",
  avatar: "https://picsum.photos/100/100?q=1",
  initials: "AG",
  email: "gobernadora@oaxaca.gob.mx",
  phone: "+52 951 123 4567",
  dataAiHint: "woman portrait",
  department: "Gabinete del Gobernador"
};

const departments: { name: string; lead: Profile; }[] = [
  {
    name: "Secretaría de Finanzas",
    lead: {
      id: "finanzas-carlos-sanchez",
      name: "Carlos Sánchez",
      title: "Secretario de Finanzas",
      avatar: "https://picsum.photos/100/100?q=2",
      initials: "CS",
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
      initials: "LF",
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
      initials: "JM",
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
    </div>
    <Button variant="outline" size="sm" className="mt-4" onClick={() => onShowCard(profile)}>
        <QrCode className="mr-2 h-4 w-4"/>
        Ver Ficha
    </Button>
  </Card>
);

export default function PerfilesInstitucionalesPage() {
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-primary">Perfiles Institucionales de Oaxaca</h1>
      <p className="text-muted-foreground">
        Conozca la estructura de la organización y quiénes son los responsables de cada área.
      </p>

      <Card>
        <CardHeader>
          <CardTitle>Organigrama Institucional</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-8 py-8">
          <div className="relative">
            <ProfileCard profile={topLevel} onShowCard={setSelectedProfile} />
            <div className="absolute top-full left-1/2 w-0.5 h-8 bg-border -translate-x-1/2"></div>
          </div>

          <div className="w-full max-w-4xl h-0.5 bg-border relative mt-8 hidden md:block">
            <div className="absolute bottom-0 left-[16.66%] w-0.5 h-8 bg-border -translate-x-1/2"></div>
            <div className="absolute bottom-0 left-1/2 w-0.5 h-8 bg-border -translate-x-1/2"></div>
            <div className="absolute bottom-0 left-[83.33%] w-0.5 h-8 bg-border -translate-x-1/2"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mt-8">
            {departments.map((dept) => (
              <ProfileCard key={dept.lead.id} profile={dept.lead} onShowCard={setSelectedProfile} />
            ))}
          </div>
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
