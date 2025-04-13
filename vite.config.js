import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import { info, footer, linkList, skillList, projectList } from "./contents";

export default defineConfig({
  plugins: [
    // With Data
    ViteEjsPlugin({
      info: info,
      footer: footer,
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
