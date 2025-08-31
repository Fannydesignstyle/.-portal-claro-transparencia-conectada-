"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Download, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const documents = [
  { id: 'ACTA-08-25', name: 'Acta de Sesión Plenaria Agosto', version: '1.0', date: '2025-08-15', type: 'Acta' },
  { id: 'LINT-006', name: 'Lineamientos Técnicos de Obra Pública', version: '3.0', date: '2025-08-20', type: 'Lineamiento' },
  { id: 'ACTA-09-25', name: 'Acta de Sesión Plenaria Septiembre', version: '1.0', date: '2025-09-16', type: 'Acta' },
  { id: 'MINU-08-25', name: 'Minuta de Comisión de Hacienda Agosto', version: '1.0', date: '2025-08-28', type: 'Minuta' },
  { id: 'HIST-002', name: 'Historial de Modificaciones Presupuestarias Q3', version: '1.0', date: '2025-09-30', type: 'Historial' },
  { id: 'LINT-007', name: 'Lineamientos de Transparencia Focalizada', version: '1.0', date: '2025-09-05', type: 'Lineamiento' },
];

export default function DocumentacionModularPage() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredDocuments = useMemo(() => {
        if (!searchTerm) return documents;
        return documents.filter(doc => 
            doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doc.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doc.type.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-primary">Informes y Documentos</h1>
      <p className="text-muted-foreground">
        Archivos con rutas claras, accesibles y reutilizables. La memoria viva de la acción pública.
      </p>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input 
            type="search"
            placeholder="Buscar documentos por nombre, ID o tipo..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="border rounded-lg">
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>ID Documento</TableHead>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Versión</TableHead>
                    <TableHead>Fecha Modificación</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead className="text-right">Acción</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {filteredDocuments.length > 0 ? filteredDocuments.map((doc, index) => (
                    <TableRow key={`${doc.id}-${doc.version}-${index}`}>
                        <TableCell className="font-mono text-xs">{doc.id}</TableCell>
                        <TableCell className="font-medium">{doc.name}</TableCell>
                        <TableCell className="text-center">{doc.version}</TableCell>
                        <TableCell>{doc.date}</TableCell>
                        <TableCell>
                            <Badge variant="secondary" className="bg-secondary text-secondary-foreground">{doc.type}</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                            <Button variant="ghost" size="icon">
                                <Download className="h-4 w-4" />
                            </Button>
                        </TableCell>
                    </TableRow>
                )) : (
                    <TableRow>
                        <TableCell colSpan={6} className="h-24 text-center">
                            No se encontraron documentos que coincidan con su búsqueda.
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
      </div>
    </div>
  );
}
