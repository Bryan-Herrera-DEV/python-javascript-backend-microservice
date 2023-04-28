import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dotenv from 'dotenv';

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  dotenv.config();
  return defineConfig({
    define: {
      "process.env": process.env,
    },
    plugins: [react()],
    server: {
      port: 3001,
    },
    mode: "development",
    resolve: {
      alias: [
        {
          find: "@",
          replacement: path.resolve(__dirname, "src"),
        },
      ],
    },
  });
};
