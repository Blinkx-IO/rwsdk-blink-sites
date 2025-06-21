import { defineConfig } from "vite";
import { redwood } from "rwsdk/vite";
import tailwind from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwind(), redwood()],
});
