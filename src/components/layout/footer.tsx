import React from 'react';

export function Footer() {
  return (
    <footer className="bg-card border-t mt-auto">
      <div className="container mx-auto px-4 py-6 text-center text-muted-foreground text-sm">
        <p className='text-xs italic max-w-4xl mx-auto mb-4'>
            Aviso Legal: Esta plataforma es un proyecto independiente creado con fines de democratización de la información y la participación ciudadana. No representa ni está afiliada a ninguna dependencia de gobierno del Estado de Oaxaca.
        </p>
        <p>&copy; {new Date().getFullYear()} Portal Transparencia, Imagen y Comunicación. Todos los derechos reservados.</p>
        <p className="mt-2">Un compromiso con la transparencia y el gobierno abierto del Estado de Oaxaca.</p>
      </div>
    </footer>
  );
}
