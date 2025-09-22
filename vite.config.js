import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/tp2-lenguajesIV/", // 👈 importantísimo, usa el nombre EXACTO del repo
});
