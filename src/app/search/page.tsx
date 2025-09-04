'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react'; // Import Suspense
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import type { SearchResultItem } from '@/ai/schemas/search-schema';

// Create a separate component for the actual search logic that uses useSearchParams
function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');
  const [results, setResults] = useState<SearchResultItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      setError(null);
      fetch(`/api/search?q=${encodeURIComponent(query)}`)
        .then(res => {
          if (!res.ok) {
            throw new Error('Error al realizar la búsqueda.');
          }
          return res.json();
        })
        .then(data => {
          setResults(data.results || []);
        })
        .catch(err => {
          setError(err.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
      setResults([]);
    }
  }, [query]);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-primary">Resultados de Búsqueda</h1>
      {query && <p className="text-muted-foreground">Mostrando resultados para: <span className="font-semibold text-primary">{query}</span></p>}

      {isLoading ? (
        <div className="space-y-4">
          <Skeleton className="h-28 w-full" />
          <Skeleton className="h-28 w-full" />
          <Skeleton className="h-28 w-full" />
        </div>
      ) : error ? (
        <p className="text-center text-destructive py-10">{error}</p>
      ) : (
        <div>
          {results.length > 0 ? (
            <div className="space-y-4">
              {results.map((result, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{result.title}</CardTitle>
                    <CardDescription>{result.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline">
                      <Link href={result.url}>
                        Ir a la página <ArrowRight className="ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground py-10">
              No se encontraron resultados para su búsqueda.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Cargando resultados de búsqueda...</div>}>
      <SearchContent />
    </Suspense>
  );
}