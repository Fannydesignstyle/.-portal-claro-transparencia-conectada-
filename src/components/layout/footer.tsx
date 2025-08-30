import React from 'react';

export function Footer() {
  return (
    <footer className="bg-card border-t mt-auto">
      <div className="container mx-auto px-4 py-6 text-center text-muted-foreground text-sm">
        <p>&copy; {new Date().getFullYear()} Portal de Funcionarios Públicos de Oaxaca. Todos los derechos reservados.</p>
        <p className="mt-2">Un compromiso con la transparencia y el gobierno abierto del Estado de Oaxaca.</p>
      </div>
    </footer>
  );
}
