import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Phone } from "lucide-react";
import Image from 'next/image';

type Profile = {
  name: string;
  title: string;
  avatar: string;
  initials: string;
  email: string;
  phone: string;
  dataAiHint?: string;
};

const topLevel: Profile = {
  name: "Ana García",
  title: "Alcaldesa",
  avatar: "https://picsum.photos/100/100?q=1",
  initials: "AG",
  email: "alcaldia@portaltransparencia.gob",
  phone: "+34 123 456 789",
  dataAiHint: "woman portrait"
};

const departments: { name: string; lead: Profile; members?: Profile[] }[] = [
  {
    name: "Departamento de Urbanismo",
    lead: {
      name: "Carlos Sánchez",
      title: "Jefe de Urbanismo",
      avatar: "https://picsum.photos/100/100?q=2",
      initials: "CS",
      email: "urbanismo@portaltransparencia.gob",
      phone: "+34 987 654 321",
      dataAiHint: "man portrait"
    },
  },
  {
    name: "Departamento de Hacienda",
    lead: {
      name: "Lucía Fernández",
      title: "Jefa de Hacienda",
      avatar: "https://picsum.photos/100/100?q=3",
      initials: "LF",
      email: "hacienda@portaltransparencia.gob",
      phone: "+34 876 543 210",
      dataAiHint: "woman portrait professional"
    },
  },
    {
    name: "Departamento de Servicios Sociales",
    lead: {
      name: "Javier Moreno",
      title: "Jefe de Servicios Sociales",
      avatar: "https://picsum.photos/100/100?q=4",
      initials: "JM",
      email: "social@portaltransparencia.gob",
      phone: "+34 765 432 109",
      dataAiHint: "man portrait professional"
    },
  },
];

const ProfileCard = ({ profile }: { profile: Profile }) => (
  <Card className="text-center p-4 flex flex-col items-center shadow-sm hover:shadow-lg transition-shadow">
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
  </Card>
);

export default function PerfilesInstitucionalesPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-primary">Perfiles Institucionales</h1>
      <p className="text-muted-foreground">
        Conozca la estructura de la organización y quiénes son los responsables de cada área.
      </p>

      <Card>
        <CardHeader>
          <CardTitle>Organigrama Institucional</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-8 py-8">
          {/* Top Level */}
          <div className="relative">
            <ProfileCard profile={topLevel} />
            {/* Connecting line */}
            <div className="absolute top-full left-1/2 w-0.5 h-8 bg-border -translate-x-1/2"></div>
          </div>

          {/* Horizontal line - hidden on mobile */}
          <div className="w-full max-w-4xl h-0.5 bg-border relative mt-8 hidden md:block">
            {/* Vertical lines down to horizontal */}
            <div className="absolute bottom-0 left-[16.66%] w-0.5 h-8 bg-border -translate-x-1/2"></div>
            <div className="absolute bottom-0 left-1/2 w-0.5 h-8 bg-border -translate-x-1/2"></div>
            <div className="absolute bottom-0 left-[83.33%] w-0.5 h-8 bg-border -translate-x-1/2"></div>
          </div>
          
          {/* Department Leads */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mt-8">
            {departments.map((dept) => (
              <ProfileCard key={dept.name} profile={dept.lead} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
