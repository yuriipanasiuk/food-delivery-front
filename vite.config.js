import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/food-delyvery-front/",
  server: {
    routes: [
      { path: "/", component: "/src/pages/Home.jsx" },
      { path: "/drinks", component: "/src/pages/Drinks.jsx" },
      { path: "/cart", component: "/src/pages/Cart.jsx" },
      { path: "/history", component: "/src/pages/History.jsx" },
    ],
  },
});
