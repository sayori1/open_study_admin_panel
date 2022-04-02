import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { GlobalCmComponent } from "codemirror-editor-vue3";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

createApp(App)
  .use(ElementPlus)
  .use(GlobalCmComponent)
  .use(store)
  .use(router)
  .mount("#app");
