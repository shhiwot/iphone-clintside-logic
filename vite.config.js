import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Adjust this if your app is served from a subdirectory
  build: {
    outDir: "dist", // Ensure the output directory is 'dist'
  },
});
