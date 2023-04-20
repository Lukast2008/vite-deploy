import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import alias from "vite-plugin-alias";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    alias({
      "/tweets": "/src/pages/Tweets.jsx",
    }),
  ],
  base: "/vite-deploy/",
});
