import { createApp } from "vue";
import App from "./App.vue";
import Colums from "@/components/Colums.vue";
import Bread from "@/components/Bread.vue";
import Menu from "@/components/Menu.vue";
import EmailLet from "@/components/EmailLet.vue";
import ModalWindow from "@/components/ModalWindow.vue";
import "bootstrap/dist/css/bootstrap.css";
import "./bstyle.css";

const app = createApp(App);
app.component('EmailLet', EmailLet);
app.component('ModalWindow', ModalWindow);
app.component('Colums', Colums);
app.component('Bread', Bread);
app.component('Menu', Menu);
app.mount('#app');

import "bootstrap/dist/js/bootstrap.js";



