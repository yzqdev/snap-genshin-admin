import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import MdEditorV3 from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import store from "./store";
const app = createApp(App);
app.use(MdEditorV3);
app.use(router);
app.use(store)
app.mount("#app");
