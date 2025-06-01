import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react({
      // Disable Fast Refresh
      fastRefresh: false,
    }),
  ],
  base: process.env.GITHUB_PAGES ? '/happyvibess-portfolio/' : '/',
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true,
    },
    hmr: false,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: true,
    emptyOutDir: true,
    assetsDir: "assets",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
    copyPublicDir: true,
  },
  publicDir: "public",
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
});
