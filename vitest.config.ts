import { defineConfig } from 'vitest/config' // Nota que usamos 'vitest/config' y no 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: 'tests/setup.ts', // Si tienes un archivo setup
  },
})
