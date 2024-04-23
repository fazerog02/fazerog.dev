import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import KumaUI from "@kuma-ui/vite"

installGlobals();

export default defineConfig({
  plugins: [remix(), tsconfigPaths(), KumaUI()],
});
