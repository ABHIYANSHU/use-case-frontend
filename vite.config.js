import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        // Optimize for production
        arrows: false,
        collapse_vars: true,
        comparisons: false,
        computed_props: false,
        hoist_funs: false,
        hoist_props: false,
        hoist_vars: false,
        inline: false,
        loops: false,
        negate_iife: false,
        properties: false,
        reduce_funcs: false,
        reduce_vars: false,
        switches: false,
        toplevel: false,
        typeofs: false,
        booleans: true,
        if_return: true,
        sequences: true,
        unused: true,
        conditionals: true,
        dead_code: true,
        evaluate: true
      },
      mangle: {
        safari10: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor chunks for better caching
          'vendor-angular': [
            '@angular/core',
            '@angular/common',
            '@angular/forms',
            '@angular/router',
            '@angular/platform-browser'
          ],
          'vendor-primeng': ['primeng'],
          'vendor-rxjs': ['rxjs']
        }
      }
    }
  }
});