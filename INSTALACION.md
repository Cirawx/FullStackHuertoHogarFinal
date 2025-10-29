# Guía de Instalación - HuertoHogar

## Requisitos Previos

- Node.js versión 14 o superior
- npm versión 6 o superior

## Pasos de Instalación

### 1. Descargar el Proyecto

Descarga el archivo ZIP del proyecto y descomprímelo en tu carpeta deseada.

### 2. Instalar Dependencias

Abre una terminal en la carpeta del proyecto y ejecuta:

\`\`\`bash
npm install --legacy-peer-deps
\`\`\`

**Nota:** Usamos `--legacy-peer-deps` para resolver conflictos de dependencias entre react-scripts y otras librerías.

### 3. Iniciar el Servidor de Desarrollo

\`\`\`bash
npm start
\`\`\`

El proyecto se abrirá automáticamente en tu navegador en `http://localhost:3000`

### 4. Ejecutar Pruebas

Para ejecutar las pruebas con Jest:

\`\`\`bash
npm test
\`\`\`

Para ejecutar las pruebas con Karma:

\`\`\`bash
npm run test:karma
\`\`\`

### 5. Compilar para Producción

\`\`\`bash
npm run build
\`\`\`

Esto creará una carpeta `build` con los archivos optimizados para producción.

## Solución de Problemas Comunes

### Error de Dependencias de TypeScript

Si encuentras un error relacionado con TypeScript, asegúrate de usar la versión 4.9.5:

\`\`\`bash
npm install typescript@4.9.5 --save-dev --legacy-peer-deps
\`\`\`

### Imágenes No Se Cargan

Si las imágenes no se cargan correctamente:

1. Verifica que la carpeta `public/images` existe
2. Asegúrate de que todas las imágenes están en formato JPG o PNG
3. Reinicia el servidor de desarrollo con `npm start`

### Puerto 3000 Ya Está en Uso

Si el puerto 3000 está ocupado, puedes usar otro puerto:

\`\`\`bash
PORT=3001 npm start
\`\`\`

## Estructura del Proyecto

\`\`\`
huertohogar/
├── public/
│   ├── images/          # Imágenes de productos y blog
│   └── index.html
├── src/
│   ├── components/      # Componentes reutilizables
│   ├── pages/          # Páginas de la aplicación
│   ├── data/           # Datos de productos y categorías
│   ├── utils/          # Funciones utilitarias
│   ├── App.js          # Componente principal
│   └── index.js        # Punto de entrada
├── package.json
└── README.md
\`\`\`

## Soporte

Para más información, consulta el archivo README.md del proyecto.
