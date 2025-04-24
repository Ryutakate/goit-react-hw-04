import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' 
    ? '/goit-react-hw-04/'  // Для GitHub Pages
    : '/',                  // Для dev і Vercel
})
