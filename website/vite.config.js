import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  return {
    server: {
      port: 3002,
      open: true,
    },
    build: {
      outDir: "build",
    },
    plugins: [react()],
  };
});
