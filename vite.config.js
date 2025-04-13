import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import { info, linkList, skillList, projectList } from "./src/contents";

export default defineConfig({
  plugins: [
    // With Data
    ViteEjsPlugin({
      info: info,
      linkList: linkList,
      skillList: skillList,
      projectList: projectList,
    }),
  ],
  assets: {
    filetypes: [{ extensions: ["svg"], type: "asset" }],
    raw: ["**/*.svg?raw"],
  },
});
