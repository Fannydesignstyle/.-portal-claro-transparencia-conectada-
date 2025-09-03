"use client";
import Link from "next/link";
import { UserCircle, PanelLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { MobileNav } from "./mobile-nav";
import { Search } from "./search";

export function Header() {
    return (
        <header className="bg-card border-b sticky top-0 z-40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 gap-4">
                    <div className="lg:hidden">
                       <Sheet>
                          <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <PanelLeft />
                              <span className="sr-only">Abrir Menú</span>
                            </Button>
                          </SheetTrigger>
                          <SheetContent side="left" className="p-0">
                            <SheetHeader className="sr-only">
                                <SheetTitle>Menú Principal</SheetTitle>
                            </SheetHeader>
                            <MobileNav />
                          </SheetContent>
                        </Sheet>
                    </div>

                    <div className="flex-1 flex justify-center px-4">
                        <Search />
                    </div>

                    <div className="flex justify-end items-center gap-2 text-sm font-medium">
                         <Button asChild variant="ghost">
                            <Link href="/mi-cuenta">
                                <UserCircle className="mr-2" />
                                Mi Cuenta
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
