
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Building,
  LayoutGrid,
  Scale,
  FileText,
  BarChart3,
  Users,
  MessageSquare,
  Archive,
  ClipboardList,
  Contact,
  Target,
  ShieldCheck,
  BookOpen,
  FileSearch,
  Newspaper,
  HelpCircle,
  Image as ImageIcon,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";
import { SheetClose } from "../ui/sheet";

const Logo = () => (
    <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
    >
        <path
            d="M14 26C20.6274 26 26 20.6274 26 14C26 7.37258 20.6274 2 14 2C7.37258 2 2 7.37258 2 14C2 20.6274 7.37258 26 14 26Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M14 18.6667C16.5774 18.6667 18.6667 16.5774 18.6667 14C18.6667 11.4226 16.5774 9.33334 14 9.33334C11.4226 9.33334 9.33334 11.4226 9.33334 14"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M20.6667 11.6667H16.3333V7.33334"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const navLinks = [
  {
    title: "Información institucional",
    icon: Building,
    basePath: "/informacion-institucional",
    subLinks: [
      { title: "Organigrama", href: "/informacion-institucional/organigrama", icon: LayoutGrid },
      { title: "Marco legal", href: "/informacion-institucional/marco-legal", icon: Scale },
      { title: "Objetivos", href: "/informacion-institucional/objetivos", icon: Target },
      { title: "Propuesta de Valor", href: "/informacion-institucional/propuesta-de-valor", icon: ShieldCheck },
      { title: "Manifiesto", href: "/informacion-institucional/manifiesto", icon: BookOpen },
    ],
  },
  {
    title: "Transparencia",
    icon: FileText,
    basePath: "/transparencia",
    subLinks: [
      { title: "Informes y Documentos", href: "/transparencia/informes", icon: BarChart3 },
      { title: "Presupuesto abierto", href: "/transparencia/presupuesto-abierto", icon: Users },
    ],
  },
  {
    title: "Participación ciudadana",
    icon: Users,
    basePath: "/participacion-ciudadana",
    subLinks: [
      { title: "Buzón de propuestas", href: "/participacion-ciudadana/buzon", icon: Archive },
      { title: "Encuestas activas", href: "/participacion-ciudadana/encuestas", icon: ClipboardList },
    ],
  },
   {
    title: "Prensa y Multimedia",
    icon: Newspaper,
    basePath: "/prensa-y-multimedia",
    subLinks: [
      { title: "Noticias", href: "/prensa-y-multimedia/noticias", icon: Newspaper },
      { title: "Preguntas Frecuentes", href: "/prensa-y-multimedia/faq", icon: HelpCircle },
      { title: "Galería", href: "/prensa-y-multimedia/galeria", icon: ImageIcon },
    ],
  },
  {
    title: "Contacto",
    icon: MessageSquare,
    basePath: "/contacto",
    subLinks: [
      { title: "Calendario Cívico", href: "/contacto/directorio", icon: Contact },
      { title: "Contacto y Solicitudes", href: "/contacto/solicitudes", icon: FileSearch },
    ],
  },
];

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <SheetClose asChild>
            <Link href={href}>
                {children}
            </Link>
        </SheetClose>
    );
}


export function MobileNav() {
    const pathname = usePathname();

    const getDefaultAccordionValue = () => {
        const activeGroup = navLinks.find(link => pathname.startsWith(link.basePath));
        return activeGroup ? activeGroup.title : undefined;
    };

  return (
    <div className="flex flex-col h-screen bg-sidebar text-sidebar-foreground">
        <div className="flex items-center gap-3 h-16 px-6 border-b border-sidebar-border">
            <Logo />
            <h1 className="font-bold text-lg text-primary">Transparencia Conectada</h1>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
            <NavLink href="/">
                <Button variant={pathname === "/" ? "secondary" : "ghost"} className="w-full justify-start gap-3">
                    <Home />
                    Inicio
                </Button>
            </NavLink>

            <Accordion type="single" collapsible defaultValue={getDefaultAccordionValue()}>
                {navLinks.map((link) => (
                    <AccordionItem value={link.title} key={link.title} className="border-none">
                        <AccordionTrigger className="py-2 hover:no-underline hover:bg-black/10 rounded-md px-3 text-base">
                            <div className="flex items-center gap-3">
                                <link.icon className="h-5 w-5" />
                                {link.title}
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pl-6 pt-2 space-y-1">
                            {link.subLinks.map((subLink) => (
                                <NavLink href={subLink.href} key={subLink.title}>
                                    <Button
                                        variant={pathname === subLink.href ? "secondary" : "ghost"}
                                        className="w-full justify-start gap-3"
                                    >
                                        <subLink.icon className="h-4 w-4" />
                                        {subLink.title}
                                    </Button>
                                </NavLink>
                            ))}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </nav>
    </div>
  );
}
