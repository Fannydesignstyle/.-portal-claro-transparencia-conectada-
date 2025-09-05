# Guía de Despliegue - Transparencia Conectada

## Estado Actual del Proyecto

El proyecto está listo para ser desplegado. Se ha verificado que:

1. La aplicación Next.js se construye correctamente sin errores
2. Las funciones de Firebase Cloud Functions se construyen correctamente
3. Todos los archivos de configuración están presentes y correctamente configurados
4. La documentación ha sido añadida y actualizada

## Prerrequisitos para el Despliegue

1. Tener instalado Node.js (versión 18 o superior)
2. Tener instalado el Firebase CLI: `npm install -g firebase-tools`
3. Tener acceso a un proyecto de Firebase
4. Tener una clave API de Google AI (Gemini) configurada

## Pasos para el Despliegue Local

1. **Instalar dependencias**:
   ```bash
   npm install
   cd functions && npm install && cd ..
   ```

2. **Construir la aplicación**:
   ```bash
   npm run build
   ```

3. **Iniciar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

## Pasos para el Despliegue en Firebase

1. **Iniciar sesión en Firebase**:
   ```bash
   firebase login
   ```

2. **Configurar el proyecto de Firebase**:
   ```bash
   firebase use portalclaro
   ```
   (o el nombre de tu proyecto)

3. **Desplegar la aplicación**:
   ```bash
   firebase deploy
   ```

   Este comando desplegará:
   - La aplicación Next.js en Firebase Hosting
   - Las funciones de Firebase Cloud Functions
   - Las reglas de Firestore
   - Los índices de Firestore

## Configuración de Variables de Entorno

Asegúrate de que el archivo `.env` contiene la clave API de Gemini:
```
GEMINI_API_KEY=tu_clave_api_aqui
```

Para despliegues en producción, configura las variables de entorno en Firebase:
```bash
firebase functions:config:set gemini.api_key="tu_clave_api_aqui"
```

## Verificación Post-Despliegue

1. Accede a la URL proporcionada por Firebase Hosting
2. Verifica que todas las páginas cargan correctamente
3. Prueba las funcionalidades principales:
   - Formulario de PQR
   - Buscador
   - Análisis de propuestas ciudadanas
4. Verifica que el panel de administración funciona correctamente

## Mantenimiento y Actualizaciones

1. **Para actualizar la aplicación**:
   - Realiza los cambios necesarios
   - Ejecuta `npm run build` para construir la aplicación
   - Ejecuta `firebase deploy` para desplegar los cambios

2. **Para actualizar las funciones de Firebase**:
   - Realiza los cambios en el directorio `functions/`
   - Ejecuta `firebase deploy --only functions` para desplegar solo las funciones

3. **Monitoreo**:
   - Usa la consola de Firebase para monitorear el uso y errores
   - Revisa los logs de las funciones con `firebase functions:log`

## Solución de Problemas Comunes

1. **Errores de construcción**:
   - Verifica que todas las dependencias estén instaladas
   - Limpia la caché con `npm run build -- --no-cache`

2. **Problemas de despliegue**:
   - Asegúrate de tener permisos suficientes en el proyecto de Firebase
   - Verifica que las reglas de Firestore permitan las operaciones necesarias

3. **Problemas de API**:
   - Verifica que la clave API de Gemini esté correctamente configurada
   - Asegúrate de que la cuota de la API no haya sido excedida

## Seguridad

1. **Reglas de Firestore**:
   - Las reglas actuales expiran el 1 de octubre de 2025
   - Antes de esa fecha, actualiza las reglas con restricciones apropiadas

2. **Variables de entorno**:
   - No commitees claves API en el repositorio
   - Usa las funciones de configuración de Firebase para variables sensibles

3. **Autenticación**:
   - El panel de administración usa credenciales simples
   - Considera implementar un sistema de autenticación más robusto para producción