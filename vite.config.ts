/// <reference types="vitest/config" />
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
  test: {
    coverage: {
      enabled: true,
      thresholds: {
        100: true,
      },
    },
    environment: "happy-dom",
    setupFiles: ["./src/utils/test-harness.ts"],
  },
});
