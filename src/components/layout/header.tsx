"use client";
import Link from "next/link";
import { Flag, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import React from "react";

const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/informacion-publica", label: "Información Pública" },
    { href: "/datos-abiertos", label: "Datos Abiertos" },
    { href: "/participacion-ciudadana", label: "Participación Ciudadana" },
    { href: "/perfiles-institucionales", label: "Perfiles Institucionales" },
    { href: "/calendario-civico", label: "Calendario Cívico" },
    { href: "/repositorio-documental", label: "Repositorio Documental" },
];

export function Header() {
    const isMobile = useIsMobile();
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <header className="bg-card shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    <Link href="/" className="flex items-center gap-2 text-primary font-bold text-xl">
                        <Flag className="h-6 w-6" />
                        <span>PortalClaro</span>
                    </Link>
                    
                    {isMobile ? (
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-card">
                                <div className="p-4">
                                <Link href="/" className="flex items-center gap-2 text-primary font-bold text-xl mb-8">
                                    <Flag className="h-6 w-6" />
                                    <span>PortalClaro</span>
                                </Link>
                                <nav className="flex flex-col gap-4">
                                    {navLinks.map((link) => (
                                        <SheetClose asChild key={link.href}>
                                            <Link
                                                href={link.href}
                                                className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                                            >
                                                {link.label}
                                            </Link>
                                        </SheetClose>
                                    ))}
                                </nav>
                                </div>
                            </SheetContent>
                        </Sheet>
                    ) : (
                        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-foreground/80 hover:text-primary transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    )}
                </div>
            </div>
        </header>
    );
}
