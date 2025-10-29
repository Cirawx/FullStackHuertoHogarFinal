# HuertoHogar - Tienda Online de Productos Frescos

HuertoHogar es una tienda online dedicada a llevar la frescura y calidad de los productos del campo directamente a la puerta de nuestros clientes en Chile.

## Características

- 🛒 Catálogo de productos con filtros y búsqueda
- 🛍️ Carrito de compras con gestión de cantidades
- 👤 Sistema de autenticación y perfiles de usuario
- 📦 Proceso de checkout y seguimiento de pedidos
- 📍 Mapa de ubicaciones de tiendas
- 📝 Blog educativo sobre alimentación saludable
- 💳 Múltiples métodos de pago
- 🚚 Envío gratis en compras sobre $20.000

## Tecnologías Utilizadas

- **React 18.2** - Biblioteca de JavaScript para construir interfaces de usuario
- **React Router 6** - Enrutamiento para aplicaciones React
- **Bootstrap 5.3** - Framework CSS para diseño responsivo
- **React Bootstrap** - Componentes de Bootstrap para React
- **Jest** - Framework de testing
- **Jasmine + Karma** - Testing adicional

## Instalación

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm o yarn

### Pasos de Instalación

1. Clona el repositorio o descarga el proyecto

\`\`\`bash
git clone [URL_DEL_REPOSITORIO]
cd huertohogar
\`\`\`

2. Instala las dependencias

\`\`\`bash
npm install
\`\`\`

3. Inicia el servidor de desarrollo

\`\`\`bash
npm start
\`\`\`

4. Abre tu navegador en [http://localhost:3000](http://localhost:3000)

## Scripts Disponibles

### `npm start`

Ejecuta la aplicación en modo desarrollo.
Abre [http://localhost:3000](http://localhost:3000) para verla en el navegador.

### `npm test`

Ejecuta las pruebas unitarias con Jest en modo interactivo.

### `npm run test:karma`

Ejecuta las pruebas unitarias con Karma y Jasmine.

### `npm run build`

Construye la aplicación para producción en la carpeta `build`.

## Estructura del Proyecto

\`\`\`
huertohogar/
├── public/
│   ├── images/
│   │   ├── products/      # Imágenes de productos
│   │   └── blog/          # Imágenes del blog
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header/        # Componente de encabezado
│   │   └── Footer/        # Componente de pie de página
│   ├── pages/
│   │   ├── Home/          # Página de inicio
│   │   ├── Products/      # Catálogo de productos
│   │   ├── ProductDetail/ # Detalle de producto
│   │   ├── Cart/          # Carrito de compras
│   │   ├── Checkout/      # Proceso de pago
│   │   ├── Login/         # Inicio de sesión
│   │   ├── Register/      # Registro de usuario
│   │   ├── Profile/       # Perfil de usuario
│   │   ├── About/         # Nosotros
│   │   ├── Blog/          # Blog
│   │   └── BlogDetail/    # Detalle de artículo
│   ├── data/
│   │   └── products.js    # Datos de productos
│   ├── App.js             # Componente principal
│   ├── App.css            # Estilos globales
│   └── index.js           # Punto de entrada
├── karma.conf.js          # Configuración de Karma
├── package.json
├── TESTING.md            # Guía de pruebas
└── README.md
\`\`\`

## Funcionalidades Principales

### 1. Catálogo de Productos

- Visualización de productos con imágenes, precios y descripciones
- Filtrado por categorías (Frutas, Verduras, Orgánicos, Lácteos)
- Búsqueda por nombre
- Ordenamiento por precio y nombre

### 2. Carrito de Compras

- Agregar/eliminar productos
- Modificar cantidades
- Cálculo automático de subtotal y total
- Envío gratis en compras sobre $20.000

### 3. Autenticación

- Registro de nuevos usuarios
- Inicio de sesión
- Gestión de perfil
- Historial de pedidos

### 4. Proceso de Checkout

- Formulario de información de contacto
- Dirección de entrega
- Selección de fecha de entrega
- Múltiples métodos de pago
- Generación de boleta

### 5. Blog Educativo

- Artículos sobre alimentación saludable
- Recetas con productos de temporada
- Consejos de sostenibilidad
- Sistema de comentarios

### 6. Página Nosotros

- Información de la empresa
- Misión y visión
- Mapa interactivo con ubicaciones
- Impacto ambiental

## Productos Disponibles

### Frutas Frescas
- FR001 - Manzanas Fuji
- FR002 - Naranjas Valencia
- FR003 - Plátanos Cavendish

### Verduras Orgánicas
- VR001 - Zanahorias Orgánicas
- VR002 - Espinacas Frescas
- VR003 - Pimientos Tricolores

### Productos Orgánicos
- PO001 - Miel Orgánica
- PO003 - Quinua Orgánica

### Productos Lácteos
- PL001 - Leche Entera

## Diseño

### Paleta de Colores

- **Fondo Principal**: #F7F7F7 (Blanco Suave)
- **Color Primario**: #2E8B57 (Verde Esmeralda)
- **Color de Acento**: #FFD700 (Amarillo Mostaza)
- **Títulos**: #8B4513 (Marrón Claro)
- **Texto Principal**: #333333 (Gris Oscuro)
- **Texto Secundario**: #666666 (Gris Medio)

### Tipografía

- **Fuente Principal**: Montserrat (sans-serif)
- **Fuente de Encabezados**: Playfair Display (serif)

## Testing

El proyecto incluye pruebas unitarias completas. Ver [TESTING.md](TESTING.md) para más detalles.

\`\`\`bash
# Ejecutar pruebas con Jest
npm test

# Ejecutar pruebas con Karma
npm run test:karma

# Ver cobertura de código
npm test -- --coverage
\`\`\`

## Ubicaciones

HuertoHogar opera en las siguientes ciudades de Chile:

- Santiago
- Puerto Montt
- Villarrica
- Nacimiento
- Viña del Mar
- Valparaíso
- Concepción

## Contacto

- **Email**: contacto@huertohogar.cl
- **Teléfono**: +56 9 1234 5678
- **Dirección**: Av. Principal 123, Santiago, Chile

## Licencia

Este proyecto fue desarrollado como parte de un proyecto académico.

## Créditos

Desarrollado por estudiantes de programación como proyecto de aprendizaje.

---

**¡Descubre la frescura del campo con HuertoHogar!**

Conéctate con la naturaleza y lleva lo mejor del campo a tu mesa.
