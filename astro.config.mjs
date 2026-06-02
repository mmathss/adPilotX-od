import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [],
  output: 'static',
  adapter: netlify(),
  vite: {
    server: {
      allowedHosts: true
    }
  }
});
