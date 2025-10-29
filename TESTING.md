# Guía de Pruebas Unitarias - HuertoHogar

Este documento explica cómo ejecutar y crear pruebas unitarias para el proyecto HuertoHogar.

## Tecnologías de Testing

El proyecto incluye dos frameworks de testing:

1. **Jest** (por defecto con Create React App)
2. **Karma + Jasmine** (configurado adicionalmente)

## Ejecutar Pruebas

### Con Jest (Recomendado)

\`\`\`bash
npm test
\`\`\`

Este comando ejecutará todas las pruebas en modo watch. Las pruebas se volverán a ejecutar automáticamente cuando guardes cambios.

Para ejecutar las pruebas una sola vez:

\`\`\`bash
npm test -- --watchAll=false
\`\`\`

Para ver la cobertura de código:

\`\`\`bash
npm test -- --coverage
\`\`\`

### Con Karma + Jasmine

\`\`\`bash
npm run test:karma
\`\`\`

Este comando ejecutará las pruebas en un navegador Chrome.

## Estructura de Pruebas

Las pruebas están organizadas junto a los archivos que prueban:

\`\`\`
src/
├── components/
│   ├── Header/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   └── Header.spec.js
│   └── Footer/
│       ├── Footer.jsx
│       ├── Footer.css
│       └── Footer.spec.js
├── data/
│   ├── products.js
│   └── products.spec.js
├── utils/
│   ├── cartUtils.spec.js
│   └── authUtils.spec.js
└── App.spec.js
\`\`\`

## Pruebas Implementadas

### 1. Componentes

#### Header Component (`Header.spec.js`)
- ✓ Renderiza el logo de HuertoHogar
- ✓ Muestra el enlace de Login cuando no hay usuario
- ✓ Muestra el nombre del usuario cuando está autenticado
- ✓ Muestra el contador del carrito correctamente
- ✓ Tiene enlaces de navegación principales

#### Footer Component (`Footer.spec.js`)
- ✓ Renderiza el nombre de la empresa
- ✓ Muestra la misión de la empresa
- ✓ Tiene enlaces rápidos
- ✓ Muestra información de contacto
- ✓ Muestra el año actual en el copyright

### 2. Datos

#### Products Data (`products.spec.js`)
- ✓ Tiene productos definidos
- ✓ Tiene categorías definidas
- ✓ Cada producto tiene las propiedades requeridas
- ✓ Verifica productos específicos (FR001, VR001)
- ✓ Todos los precios son números positivos
- ✓ Todos los stocks son números no negativos
- ✓ Tiene exactamente 4 categorías
- ✓ Tiene al menos 9 productos

### 3. Utilidades

#### Cart Utilities (`cartUtils.spec.js`)
- ✓ Calcula el subtotal correctamente
- ✓ Retorna 0 para un carrito vacío
- ✓ Cobra envío para compras menores a $20,000
- ✓ Envío gratis para compras de $20,000 o más
- ✓ Calcula el total con y sin envío
- ✓ Formatea precios correctamente
- ✓ Valida items de carrito

#### Auth Utilities (`authUtils.spec.js`)
- ✓ Valida emails correctos
- ✓ Rechaza emails inválidos
- ✓ Valida contraseñas de al menos 6 caracteres
- ✓ Rechaza contraseñas muy cortas
- ✓ Valida números de teléfono chilenos
- ✓ Guarda usuario en localStorage
- ✓ Elimina usuario de localStorage al cerrar sesión

### 4. Aplicación Principal

#### App Component (`App.spec.js`)
- ✓ Renderiza sin errores
- ✓ Renderiza el Header
- ✓ Renderiza el Footer
- ✓ Tiene el contenido principal

## Crear Nuevas Pruebas

### Estructura Básica de una Prueba

\`\`\`javascript
import React from 'react';
import { render, screen } from '@testing-library/react';
import MiComponente from './MiComponente';

describe('MiComponente', () => {
  it('debería hacer algo específico', () => {
    render(<MiComponente />);
    
    const elemento = screen.getByText(/texto esperado/i);
    expect(elemento).toBeTruthy();
  });
});
\`\`\`

### Mejores Prácticas

1. **Nombres descriptivos**: Usa nombres claros que expliquen qué se está probando
2. **Arrange-Act-Assert**: Organiza tus pruebas en tres secciones
   - Arrange: Prepara los datos y el entorno
   - Act: Ejecuta la acción a probar
   - Assert: Verifica el resultado
3. **Pruebas independientes**: Cada prueba debe poder ejecutarse de forma independiente
4. **Limpieza**: Usa `beforeEach` y `afterEach` para limpiar el estado entre pruebas
5. **Cobertura**: Intenta cubrir casos normales, casos límite y casos de error

### Ejemplo Completo

\`\`\`javascript
describe('Carrito de Compras', () => {
  let cart;

  beforeEach(() => {
    cart = [];
  });

  it('debería agregar un producto al carrito', () => {
    const producto = { id: 'FR001', name: 'Manzanas', price: 1200 };
    cart.push({ ...producto, quantity: 1 });
    
    expect(cart.length).toBe(1);
    expect(cart[0].id).toBe('FR001');
  });

  it('debería calcular el total correctamente', () => {
    cart = [
      { id: 'FR001', price: 1200, quantity: 2 },
      { id: 'VR001', price: 900, quantity: 1 }
    ];
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    expect(total).toBe(3300);
  });
});
\`\`\`

## Comandos Útiles

\`\`\`bash
# Ejecutar todas las pruebas
npm test

# Ejecutar pruebas en modo CI (sin watch)
npm test -- --watchAll=false

# Ejecutar pruebas con cobertura
npm test -- --coverage

# Ejecutar solo pruebas que coincidan con un patrón
npm test -- Header

# Ejecutar pruebas con Karma
npm run test:karma

# Actualizar snapshots
npm test -- -u
\`\`\`

## Cobertura de Código

La cobertura de código te ayuda a identificar qué partes de tu código no están siendo probadas.

Para generar un reporte de cobertura:

\`\`\`bash
npm test -- --coverage --watchAll=false
\`\`\`

Esto generará un reporte en la carpeta `coverage/` que puedes abrir en tu navegador:

\`\`\`bash
open coverage/lcov-report/index.html
\`\`\`

## Recursos Adicionales

- [Jest Documentation](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/react)
- [Jasmine Documentation](https://jasmine.github.io/)
- [Karma Documentation](https://karma-runner.github.io/)

## Notas Importantes

1. Las pruebas con Jest son más rápidas y fáciles de usar para desarrollo diario
2. Karma + Jasmine son útiles para pruebas en navegadores reales
3. Siempre ejecuta las pruebas antes de hacer commit de tu código
4. Mantén la cobertura de código por encima del 70%
5. Escribe pruebas para nuevas funcionalidades antes de implementarlas (TDD)
