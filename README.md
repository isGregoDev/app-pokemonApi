# Aplicación de Lista de Pokémon

Esta aplicación es una interfaz simple basada en React que obtiene y muestra una lista de Pokémon utilizando la API de Pokémon. Utiliza Vite para el desarrollo y Tailwind CSS para el estilo.

## Versiones Utilizadas

- **React**: 19.0.0
- **Vite**: 6.2.0
- **Tailwind CSS**: 4.0.9
- **TypeScript**: 5.7.2
- **ESLint**: 9.21.0

Estas versiones son importantes para asegurar la compatibilidad y el correcto funcionamiento de la aplicación. Se recomienda utilizar estas versiones específicas para evitar problemas de integración y errores inesperados.

## Características

- **Lista de Pokémon**: Muestra una lista de Pokémon con sus nombres e imágenes.
- **Paginación**: Permite a los usuarios navegar a través de las páginas de Pokémon.
- **Estilo Dinámico**: Utiliza Tailwind CSS para un diseño moderno y responsivo.

## Tecnologías Utilizadas

- **React**: Una biblioteca de JavaScript para construir interfaces de usuario.
- **Vite**: Una herramienta de construcción que proporciona un entorno de desarrollo rápido.
- **Tailwind CSS**: Un framework CSS de utilidad para el estilo.
- **API de Pokémon**: Obtiene datos sobre los Pokémon.

## Cómo Ejecutar la Aplicación

1. Clona el repositorio:

   ```bash
   git clone <repository-url>
   cd app-pokemonapi
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Abre tu navegador y navega a `http://localhost:3000` para ver la aplicación.

## Descripción del Código

- **src/App.tsx**: El componente principal de la aplicación que obtiene datos de Pokémon y maneja la paginación.
- **src/constants/pokemonColors.ts**: Contiene mapeos de colores para diferentes tipos de Pokémon utilizados para el estilo.
- **src/index.css**: Incluye Tailwind CSS y colores de tema personalizados.
