import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';
import viteCompression from 'vite-plugin-compression';
import viteImagemin from 'vite-plugin-imagemin';
import dotenv from 'dotenv';

// Charger les variables d'environnement du fichier .env
dotenv.config();

// Pour déboguer les variables d'environnement
console.log('Variables d\'environnement chargées:');
console.log('VITE_OPENAI_API_KEY:', process.env.VITE_OPENAI_API_KEY ? 'Disponible' : 'Non disponible');
console.log('VITE_OPENAI_API_URL:', process.env.VITE_OPENAI_API_URL);
console.log('VITE_OPENAI_MODEL:', process.env.VITE_OPENAI_MODEL);
console.log('VITE_HUGGINGFACE_API_KEY:', process.env.VITE_HUGGINGFACE_API_KEY ? 'Disponible' : 'Non disponible');
console.log('VITE_HUGGINGFACE_MODEL:', process.env.VITE_HUGGINGFACE_MODEL);

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://driveselect.fr',
      exclude: ['/confirmation-essai'],
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 0.8,
    }),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 80,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['lucide-react', 'react-hot-toast'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  define: {
    'import.meta.env.VITE_OPENAI_API_KEY': JSON.stringify(process.env.VITE_OPENAI_API_KEY),
    'import.meta.env.VITE_OPENAI_API_URL': JSON.stringify(process.env.VITE_OPENAI_API_URL),
    'import.meta.env.VITE_OPENAI_MODEL': JSON.stringify(process.env.VITE_OPENAI_MODEL),
    'import.meta.env.VITE_HUGGINGFACE_API_KEY': JSON.stringify(process.env.VITE_HUGGINGFACE_API_KEY),
    'import.meta.env.VITE_HUGGINGFACE_MODEL': JSON.stringify(process.env.VITE_HUGGINGFACE_MODEL),
  },
});