"use client";
import Link from "next/link";
import { Menu, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import React from "react";

const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/perfiles-institucionales", label: "Imagen Pública" },
    { href: "/participacion-ciudadana", label: "Comunicación Ética" },
    { href: "/repositorio-documental", label: "Documentación Modular" },
    { href: "/informacion-publica", label: "Validación Institucional" },
    { href: "/datos-abiertos", label: "Transparencia Activa" },
    { href: "/calendario-civico", label: "Memoria Institucional" },
];

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


export function Header() {
    const isMobile = useIsMobile();
    const [isOpen, setIsOpen] = React.useState(false);

    const AppName = () => (
        <div className="flex items-center gap-3 text-primary font-bold text-lg md:text-xl">
            <Logo />
            <span className="sm:hidden">Voz Ciudadana</span>
            <span className="hidden sm:inline">Plataforma Voz Ciudadana</span>
        </div>
    );

    return (
        <header className="bg-card shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    <Link href="/">
                        <AppName />
                    </Link>
                    
                    {isMobile ? (
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-card">
                                <SheetHeader className="p-4 pb-0">
                                  <SheetTitle className="sr-only">Menú de Navegación</SheetTitle>
                                </SheetHeader>
                                <div className="p-4">
                                <Link href="/" className="mb-8" onClick={() => setIsOpen(false)}>
                                    <AppName />
                                </Link>
                                <nav className="flex flex-col gap-4 mt-8">
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
                                    <SheetClose asChild>
                                        <Link href="/mi-cuenta" className="text-lg font-medium text-foreground hover:text-primary transition-colors pt-4 border-t border-border">
                                            <UserCircle className="inline-block mr-2 h-5 w-5" />
                                            Mi Cuenta
                                        </Link>
                                    </SheetClose>
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
                             <Button asChild variant="outline" size="sm">
                                <Link href="/mi-cuenta">
                                    <UserCircle className="mr-2" />
                                    Mi Cuenta
                                </Link>
                            </Button>
                        </nav>
                    )}
                </div>
            </div>
        </header>
    );
}
