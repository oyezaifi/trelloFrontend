import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Ensures correct asset paths
  build: {
    outDir: "dist", // Ensure output matches Vercel's expected directory
  },
});
