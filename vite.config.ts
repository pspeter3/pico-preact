import { defineConfig } from "vite";

// oxlint-disable-next-line no-default-exports
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
      },
    },
  },
});
