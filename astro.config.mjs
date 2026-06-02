import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), keystatic()],
  output: 'hybrid', // Requerido para servir la interfaz del CMS dinámicamente
  vite: {
    server: {
      allowedHosts: true
    }
  }
});
