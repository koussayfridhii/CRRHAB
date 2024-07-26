import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    host: '0.0.0.0', // Bind to all network interfaces
    port: 3000,
    proxy: {
      "/api": {
        target: "http://server:5000", // Use Docker service name to proxy requests
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
