"use client";
import Link from "next/link";
import { UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

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

const AppName = () => (
    <div className="flex items-center gap-3 text-primary font-bold text-lg md:text-xl">
        <Logo />
        <span>Plataforma Voz Ciudadana</span>
    </div>
);

export function Header() {
    return (
        <header className="bg-card shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    <Link href="/">
                        <AppName />
                    </Link>
                    
                    <nav className="flex items-center gap-2 text-sm font-medium">
                         <Button asChild variant="ghost">
                            <Link href="/mi-cuenta">
                                <UserCircle className="mr-2" />
                                Mi Cuenta
                            </Link>
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    );
}
