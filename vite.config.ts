import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    // The auth deps (react-router-dom, input-otp, radix labels, lucide-react)
    // are installed in the parent workspace node_modules. Without dedupe Vite
    // picks up two copies of react/react-dom and hooks crash.
    dedupe: ["react", "react-dom", "react-router", "react-router-dom"],
  },
});
