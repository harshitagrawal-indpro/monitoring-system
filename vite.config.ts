import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// REMOVE or comment this out:
// import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // REMOVE or comment this out:
    // mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
