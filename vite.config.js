import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import { skillList, projectList } from "./src/contents";

export default defineConfig({
  plugins: [
    // With Data
    ViteEjsPlugin({
      skillList: skillList,
      projectList: projectList,
    }),
  ],
});
