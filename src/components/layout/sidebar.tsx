
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Building,
  Target,
  Scale,
  LayoutGrid,
  FileText,
  Library,
  BarChart3,
  Users,
  MessageSquare,
  Archive,
  ClipboardList,
  TrendingUp,
  Contact,
  FileSearch,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

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
    ],
  },
  {
    title: "Transparencia",
    icon: FileText,
    basePath: "/transparencia",
    subLinks: [
      { title: "Informes trimestrales", href: "/transparencia/informes", icon: BarChart3 },
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
    title: "Contacto y solicitudes",
    icon: MessageSquare,
    basePath: "/contacto",
    subLinks: [
      { title: "Directorio", href: "/contacto/directorio", icon: Contact },
    ],
  },
];

export function Sidebar() {
    const pathname = usePathname();

    const getDefaultAccordionValue = () => {
        const activeGroup = navLinks.find(link => pathname.startsWith(link.basePath));
        return activeGroup ? activeGroup.title : undefined;
    };

    return (
        <aside className="hidden lg:flex flex-col w-64 h-screen bg-sidebar text-sidebar-foreground sticky top-0 border-r border-sidebar-border">
            <div className="flex items-center gap-3 h-16 px-6 border-b border-sidebar-border">
                <Logo />
                <h1 className="font-bold text-lg text-primary">Transparencia Conectada</h1>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-2">
                <Button variant={pathname === "/" ? "secondary" : "ghost"} className="w-full justify-start gap-3" asChild>
                    <Link href="/">
                        <Home />
                        Inicio
                    </Link>
                </Button>

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
                                    <Button
                                        key={subLink.title}
                                        variant={pathname === subLink.href ? "secondary" : "ghost"}
                                        className="w-full justify-start gap-3"
                                        asChild
                                    >
                                        <Link href={subLink.href}>
                                            <subLink.icon className="h-4 w-4" />
                                            {subLink.title}
                                        </Link>
                                    </Button>
                                ))}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </nav>
        </aside>
    );
}
