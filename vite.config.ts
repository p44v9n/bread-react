import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/",
  // build: {
  //   outDir: "./dist",
  //   minify: false,
  //   commonjsOptions: {
  //     include: [/linked-dep/, /node_modules/],
  //   },
  // },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  // optimizeDeps: {
  //   include: ['linked-dep'],
  // },
});
