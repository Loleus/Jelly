import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

    // --- AUTOMATYCZNE GENEROWANIE LISTY PLIKÓW DLA SERVICE WORKERA ---
    {
      name: "generate-sw-file-list",
      closeBundle() {
        const dist = path.resolve(__dirname, "dist");
        const files: string[] = [];

        function walk(dir: string) {
          for (const file of fs.readdirSync(dir)) {
            const full = path.join(dir, file);

            if (fs.statSync(full).isDirectory()) {
              walk(full);
            } else {
              // 🔥 KLUCZ: ścieżka względna względem dist + prefiks "./"
              const rel = full.replace(dist, "").replace(/\\/g, "/");
              files.push("." + rel);
            }
          }
        }

        walk(dist);

        fs.writeFileSync(
          path.join(dist, "sw-files.json"),
          JSON.stringify(files, null, 2)
        );
      },
    },
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  build: {
    assetsInlineLimit: 0,
    chunkSizeWarningLimit: 2000,
    manifest: true,
  },
});
