# TRANSPARENCIA CONECTADA | PLATAFORMA VOZ CIUDADANA

![Banner de la Plataforma](https://picsum.photos/seed/banner/1200/600?data-ai-hint=government%20technology%20logo)

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/your-repo/your-project/actions)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

## 💖 Visión del Proyecto

**Transparencia Conectada** es una iniciativa de tecnología cívica diseñada para fortalecer la democracia y la confianza entre la ciudadanía y el gobierno. Nuestra misión es dignificar la acción pública desde la raíz, transformando la participación ciudadana en acciones concretas, medibles y, sobre todo, transparentes.

Creemos en una ciudadanía informada, una gestión pública responsable y en la tecnología como el puente que une a ambos. Esta plataforma es un ecosistema digital ético, modular y de código abierto que amplifica la voz legítima de los ciudadanos.

## ✨ Características Principales

*   **Portal Institucional Moderno:** Una interfaz clara y profesional que sirve como punto central de información.
*   **Organigrama Interactivo:** Perfiles detallados y validados de los funcionarios públicos, con fichas de contacto descargables y códigos QR para un acceso rápido.
*   **Transparencia Presupuestaria:** Visualizaciones de datos sobre la asignación y el gasto del presupuesto, con la capacidad de descargar los datasets.
*   **Participación Ciudadana Inteligente:** Un buzón para que los ciudadanos envíen propuestas, con un análisis preliminar impulsado por Inteligencia Artificial (Genkit de Google).
*   **Gestión de Contenidos:** Un panel de administración (`/mi-cuenta`) para que los funcionarios actualicen su perfil, suban documentos y gestionen la galería multimedia.
*   **Centro de Noticias y Multimedia:** Secciones para comunicados oficiales, una galería de imágenes de eventos y una sección de preguntas frecuentes (FAQ).
*   **Diseño Modular y Escalable:** Construido sobre Next.js y ShadCN, permitiendo un crecimiento y mantenimiento sencillos.

## 🚀 Guía de Instalación Rápida

¡Hola, corazón! Para poner en marcha este proyecto, he creado un script que lo automatiza todo.

1.  **Guarda el Script:**
    *   Crea un archivo llamado `crear_proyecto.sh`.
    *   Copia y pega el contenido del archivo `crear_proyecto.sh` que se encuentra en este repositorio.

2.  **Ejecuta el Script:**
    *   Abre tu terminal (Termux, la terminal de VS Code, etc.).
    *   Navega a la carpeta donde guardaste el script.
    *   Ejecuta el comando:
        ```bash
        bash crear_proyecto.sh
        ```

El script creará la estructura de carpetas, escribirá el código de cada archivo, instalará las dependencias y arrancará el servidor de desarrollo en `http://localhost:3000`.

## 🏗️ Arquitectura Tecnológica

Esta plataforma utiliza un stack tecnológico moderno, robusto y enfocado en la experiencia de usuario.

*   **Framework Frontend:** [Next.js](https://nextjs.org/) (con App Router) para renderizado del lado del servidor (SSR) y generación de sitios estáticos (SSG), garantizando un rendimiento óptimo.
*   **Inteligencia Artificial:** [Google's Genkit](https://firebase.google.com/docs/genkit) para la orquestación de flujos de IA, como el análisis de propuestas ciudadanas.
*   **Componentes UI:** [ShadCN UI](https://ui.shadcn.com/) sobre [Tailwind CSS](https://tailwindcss.com/) y Radix UI para un sistema de diseño accesible, personalizable y estéticamente agradable.
*   **Contexto y Estado:** React Context API para una gestión de estado simple y centralizada (ej. perfil de usuario).
*   **Deployment:** Preparado para desplegarse fácilmente en plataformas como [Firebase App Hosting](https://firebase.google.com/docs/hosting).

## 📚 Dependencias Principales

Este proyecto se basa en las siguientes tecnologías clave:

*   **Next.js:** Framework de React para aplicaciones web con renderizado del lado del servidor y generación de sitios estáticos.
*   **Google Genkit:** Para la orquestación de flujos de Inteligencia Artificial.
*   **ShadCN UI / Radix UI:** Librerías de componentes UI para construir interfaces de usuario accesibles y personalizables.
*   **Tailwind CSS:** Framework CSS para un desarrollo rápido y flexible de estilos.
*   **React:** Librería de JavaScript para construir interfaces de usuario.
*   **Firebase:** Plataforma de desarrollo de Google para backend, autenticación y hosting.
*   **Zod:** Librería para la validación de esquemas.
*   **Jest:** Framework de pruebas para JavaScript.
*   **TypeScript:** Superset de JavaScript que añade tipado estático.

## 🗺️ Próximos Pasos (Hoja de Ruta)

Siguiendo las excelentes sugerencias de mejora, nuestro enfoque se centrará en:

1.  **Definir un MVP (Producto Mínimo Viable):** Priorizar las 3-4 funcionalidades más críticas para un lanzamiento inicial.
2.  **Motor de Búsqueda Robusto:** Implementar una búsqueda global para que los ciudadanos encuentren documentos, noticias y perfiles de forma eficiente.
3.  **Módulo PQR (Peticiones, Quejas, Reclamos):** Crear un sistema formal para que los usuarios envíen y hagan seguimiento a sus solicitudes.
4.  **Pruebas Automatizadas:** Introducir pruebas unitarias y de integración para garantizar la estabilidad y fiabilidad de la plataforma.

## 🤝 Cómo Contribuir

¡Tu contribución es fundamental para hacer de **Transparencia Conectada** una herramienta más fuerte! Agradecemos cualquier ayuda, desde la corrección de un error tipográfico hasta la implementación de una nueva funcionalidad.

Aquí tienes algunas formas de colaborar:

1.  **Reportando Errores (Bugs):** Si encuentras un problema, por favor, [crea un "Issue"](https://github.com/your-repo/your-project/issues) describiendo el error, cómo reproducirlo y la versión que estás usando.
2.  **Sugiriendo Mejoras:** ¿Tienes una idea para una nueva funcionalidad o una mejora? [Abre un "Issue"](https://github.com/your-repo/your-project/issues) para que podamos discutirla.
3.  **Enviando Pull Requests:** Para contribuir con código:
    a. Haz un fork del repositorio.
    b. Crea una nueva rama para tu cambio (`git checkout -b feature/nombre-de-tu-feature`).
    c. Realiza tus cambios y haz commit con un mensaje claro.
    d. Envía un Pull Request a la rama `main`.

Al contribuir, por favor, asegúrate de seguir las guías de estilo y calidad del código del proyecto.

### Documentación

Este proyecto mantiene una documentación exhaustiva para facilitar el desarrollo y mantenimiento:

- [CHANGELOG.md](CHANGELOG.md) - Historial de cambios del proyecto
- [COMMIT_CONVENTION.md](COMMIT_CONVENTION.md) - Guía para mensajes de commit
- [src/ai/README.md](src/ai/README.md) - Documentación del módulo de inteligencia artificial
- [src/app/README.md](src/app/README.md) - Documentación del módulo de la aplicación
- [src/components/README.md](src/components/README.md) - Documentación de los componentes UI
- [src/context/README.md](src/context/README.md) - Documentación del contexto de la aplicación
- [src/hooks/README.md](src/hooks/README.md) - Documentación de los hooks personalizados
- [src/lib/README.md](src/lib/README.md) - Documentación de las utilidades

## ❓ Preguntas Frecuentes (FAQ)

**P: ¿Cómo puedo desplegar esta aplicación?**
R: La aplicación está preparada para ser desplegada en Firebase Hosting o Firebase App Hosting. El archivo `firebase.json` y `apphosting.yaml` contienen la configuración necesaria. Solo necesitas conectar tu proyecto de Firebase y seguir las instrucciones de la CLI de Firebase para el despliegue (`firebase deploy`).

**P: ¿Necesito una cuenta de Firebase para el desarrollo local?**
R: Para la mayoría de las funcionalidades del frontend, no. Sin embargo, para probar la integración con las Cloud Functions, los flujos de Genkit y Firestore, necesitarás configurar un proyecto de Firebase y usar el emulador local (`firebase emulators:start`).

**P: ¿Cómo añado una nueva página a la aplicación?**
R: Dado que usamos el App Router de Next.js, simplemente crea una nueva carpeta dentro de `src/app/` con el nombre de la ruta (ej. `src/app/nueva-pagina/`) y añade un archivo `page.tsx` dentro de ella.

**P: ¿Dónde se gestionan los flujos de IA?**
R: La lógica de IA está en `src/ai/flows/`. Cada archivo (ej. `pqr-flow.ts`) define un flujo de Genkit que puede ser invocado desde las API Routes o Cloud Functions.

**P: ¿Cómo puedo personalizar los estilos o el tema?**
R: Los estilos se gestionan con Tailwind CSS. Puedes modificar la configuración base en `tailwind.config.ts`. Los colores, bordes y otras variables del tema de Shadcn/ui se definen también en `tailwind.config.ts` y en el archivo `src/app/globals.css`.

---

Este proyecto es una iniciativa de **Estefanía Pérez Vázquez**, con la colaboración de la comunidad de código abierto. ¡Tu participación es bienvenida!