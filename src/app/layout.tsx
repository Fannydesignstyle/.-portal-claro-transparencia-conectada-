
"use client";

import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ProfileProvider } from '@/context/ProfileContext';
import { Inter } from 'next/font/google';
import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { usePathname } from 'next/navigation';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// export const metadata: Metadata = {
//   title: 'Plataforma Voz Ciudadana',
//   description: 'Una estructura ética, modular y pública que amplifica la voz legítima de los ciudadanos.',
// };

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isLoginPage = pathname === '/mi-cuenta';

  if (isLoginPage) {
    return <>{children}</>;
  }
  
  return (
      <div className="flex min-h-screen bg-background">
        <Sidebar />
        <div className="flex flex-1 flex-col">
          <Header />
          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
        </div>
      </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
          <title>Plataforma Voz Ciudadana</title>
          <meta name="description" content="Una estructura ética, modular y pública que amplifica la voz legítima de los ciudadanos." />
      </head>
      <body className="font-body antialiased">
        <ProfileProvider>
            <AppLayout>{children}</AppLayout>
          <Toaster />
        </ProfileProvider>
      </body>
    </html>
  );
}
