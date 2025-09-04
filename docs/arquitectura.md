# Arquitectura del Proyecto

## 1. Visión General

Este proyecto es una aplicación web moderna construida sobre un stack tecnológico que combina un frontend reactivo, un backend serverless y capacidades de inteligencia artificial. La arquitectura está diseñada para ser escalable, mantenible y eficiente.

Las tecnologías principales son:
- **Frontend:** [Next.js](https://nextjs.org/) (con App Router) y [React](https://react.dev/).
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) y [Shadcn/ui](https://ui.shadcn.com/) para componentes.
- **Backend:** [Firebase Functions](https://firebase.google.com/docs/functions) y API Routes de Next.js.
- **Inteligencia Artificial:** [Genkit (Firebase Genkit)](https://firebase.google.com/docs/genkit) para la orquestación de flujos de IA.
- **Base de Datos:** [Cloud Firestore](https://firebase.google.com/docs/firestore) (NoSQL).
- **Despliegue:** [Firebase Hosting](https://firebase.google.com/docs/hosting) y [App Hosting](https://firebase.google.com/docs/app-hosting).

## 2. Estructura de Carpetas

La organización del código sigue las convenciones de Next.js y Firebase.

```
/
├── functions/      # Código para Cloud Functions (backend serverless)
├── public/         # Archivos estáticos (imágenes, html)
├── src/
│   ├── ai/         # Lógica de Inteligencia Artificial con Genkit
│   │   └── flows/  # Flujos de Genkit (ej. análisis, búsqueda)
│   ├── app/        # Rutas, páginas y layouts de Next.js (App Router)
│   │   └── api/    # API Routes de Next.js
│   ├── components/ # Componentes de React reutilizables (UI)
│   ├── context/    # React Context para estado global
│   ├── hooks/      # Hooks de React personalizados
│   └── lib/        # Utilidades y funciones compartidas
├── firebase.json   # Configuración de despliegue de Firebase
└── next.config.ts  # Configuración de Next.js
```

## 3. Flujo de Datos y Componentes

### Frontend

- **Framework:** Se utiliza Next.js con el **App Router**. Las páginas y rutas se definen en la carpeta `src/app`.
- **Componentes:** La interfaz de usuario se construye con componentes de React ubicados en `src/components/ui` (generados por Shadcn/ui) y `src/components/layout` (estructurales como Header, Footer).
- **Estado:** El estado global se maneja con React Context (`src/context`), mientras que el estado local se gestiona con los hooks `useState` y `useEffect`.
- **Estilos:** Tailwind CSS se usa para el diseño, permitiendo un desarrollo rápido y consistente.

### Backend

El backend tiene dos partes principales:

1.  **API Routes de Next.js (`src/app/api/`):** Se usan para endpoints simples que necesitan interactuar directamente con el frontend de Next.js. Son ideales para tareas como el manejo de PQR y búsquedas (`/api/pqr`, `/api/search`).

2.  **Firebase Functions (`functions/`):** Para lógica de backend más compleja, tareas asíncronas o procesos que deben ejecutarse de forma independiente del frontend. El código fuente está en `functions/src` (TypeScript).

### Inteligencia Artificial

- **Genkit:** La carpeta `src/ai` contiene la lógica de IA. Genkit se utiliza para definir "flujos" (`flows`) que orquestan llamadas a modelos de lenguaje (LLMs), herramientas personalizadas y otras APIs.
- **Flujos (`src/ai/flows`):**
    - `pqr-flow.ts`: Procesa, clasifica y responde a Peticiones, Quejas y Reclamos.
    - `search-flow.ts`: Potencia la búsqueda semántica dentro de la aplicación.
    - `analyze-proposal-flow.ts`: Analiza propuestas ciudadanas.
- **Exposición:** Estos flujos de Genkit se exponen como endpoints HTTP a través de Firebase Functions para que el frontend pueda consumirlos.

## 4. Base de Datos

- **Cloud Firestore:** Se utiliza como base de datos principal. Es una base de datos NoSQL, flexible y escalable.
- **Reglas de Seguridad:** El archivo `firestore.rules` define las políticas de acceso a los datos, garantizando que los usuarios solo puedan leer o escribir la información permitida.
- **Índices:** `firestore.indexes.json` contiene las definiciones de índices compuestos para optimizar las consultas complejas.

## 5. Despliegue y CI/CD

- **Hosting:** La aplicación se despliega en Firebase. `apphosting.yaml` y `firebase.json` configuran cómo se compila y sirve el proyecto de Next.js y las functions.
- **Integración Continua (CI):** Se utiliza GitHub Actions (`.github/workflows/ci.yml`). El workflow se activa en cada `push` o `pull request` para ejecutar pruebas y linters, asegurando la calidad del código antes de integrarlo.

## 6. Diagrama de Arquitectura (Simplificado)

```mermaid
graph TD
    subgraph "Usuario"
        A[Navegador Web]
    end

    subgraph "Firebase Hosting"
        B[Next.js App]
    end

    subgraph "Backend (Serverless)"
        C[API Routes Next.js]
        D[Cloud Functions]
        E[Genkit Flows]
    end

    subgraph "Google Cloud"
        F[Cloud Firestore]
        G[Modelos de IA (Gemini)]
    end

    A --> B
    B --> C
    B --> D
    C --> F
    D --> E
    D --> F
    E --> G
```