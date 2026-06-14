import { defineConfig } from "vite";

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 20000, // Hiermee verhoog je de limiet naar 2MB
  },
});
