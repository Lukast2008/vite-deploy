import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
// import alias from "vite-plugin-alias";
// import ssr from "vite-plugin-ssr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    // alias({
    //   "/tweets": "/src/pages/Tweets.jsx",
    // }),
    // ssr(),
  ],
  // server: {
  //   middlewareMode: "ssr",
  //   watch: {
  //     usePolling: true,
  //     interval: 100,
  //   },
  // },
  server: {
    // Додаємо historyApiFallback опцію
    historyApiFallback: true,
  },
  base: "/vite-deploy/",
});
