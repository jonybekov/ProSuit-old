import Vue from "vue";
import App from "./App.vue";

import VueRouter from "vue-router";
import Home from "./components/Home";
import List from "./components/Stage/List";
import Test from "./components/Stage/Test";
import Article from "./components/Stage/Article";
import SignIn from "./components/Auth/SignIn";
import SignOut from "./components/Auth/SignOut";
import VuePlyr from "vue-plyr";
import "vue-plyr/dist/vue-plyr.css"; // only if your build system can import css, otherwise import it wherever you would import your css.
import VueProgressBar from "vue-progressbar";

Vue.use(VuePlyr);
Vue.use(VueRouter);
Vue.use(VueProgressBar, {
  color: "#109cf1",
  failedColor: "red",
  height: "2px"
});

const router = new VueRouter({
  routes: [
    { path: "/", component: Home, name: "home" },
    { path: "/sign-in", component: SignIn, name: "sign-in" },
    { path: "/sign-out", component: SignOut, name: "sign-out" },
    { path: "/materials", component: List, name: "list" },
    { path: "/test", component: Test, name: "test" },
    { path: "/article", component: Article, name: "article" }
  ]
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
