import Vue from "vue";
import App from "./App.vue";

import VueRouter from "vue-router";
import Home from "./components/Home";
import List from "./components/Stage/List";
import Test from "./components/Stage/Test";
import Article from "./components/Stage/Article";
import SignIn from "./components/Auth/SignIn";
import SignOut from "./components/Auth/SignOut";
import Portfolio from "./components/Portfolio";
import VuePlyr from "vue-plyr";
import "vue-plyr/dist/vue-plyr.css"; // only if your build system can import css, otherwise import it wherever you would import your css.
import VueProgressBar from "vue-progressbar";
import Lightbox from "vue-my-photos";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.use(VuePlyr);
Vue.use(VueRouter);
Vue.use(VueProgressBar, {
  color: "#109cf1",
  failedColor: "red",
  height: "2px"
});
Vue.use(Lightbox);
// library.add(faUserSecret);

let handleOutsideClick;
Vue.directive("closable", {
  bind(el, binding, vnode) {
    handleOutsideClick = e => {
      e.stopPropagation();
      const { handler, exclude } = binding.value;
      let clickedOnExcludedEl = false;
      exclude.forEach(refName => {
        if (!clickedOnExcludedEl) {
          const excludedEl = vnode.context.$refs[refName];
          clickedOnExcludedEl = excludedEl.contains(e.target);
        }
      });
      if (!el.contains(e.target) && !clickedOnExcludedEl) {
        vnode.context[handler]();
      }
    };
    document.addEventListener("click", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
  },

  unbind() {
    document.removeEventListener("click", handleOutsideClick);
    document.removeEventListener("touchstart", handleOutsideClick);
  }
});

const router = new VueRouter({
  routes: [
    { path: "/", component: Home, name: "home" },
    { path: "/sign-in", component: SignIn, name: "sign-in" },
    { path: "/sign-out", component: SignOut, name: "sign-out" },
    { path: "/materials", component: List, name: "list" },
    { path: "/portfolio", component: Portfolio, name: "portfolio" },
    { path: "/test", component: Test, name: "test" },
    { path: "/article", component: Article, name: "article" }
  ]
});

Vue.config.productionTip = false;

Vue.filter("two_digits", value => {
  if (value.toString().length <= 1) {
    return "0" + value.toString();
  }

  return value.toString();
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
