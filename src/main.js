import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./index.css";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);

const app = createApp(App);

app.component("fa", FontAwesomeIcon);
app.use(router);
dom.watch();

app.mount("#app");
