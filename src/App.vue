<template>
  <div id="app">
    <Navbar v-if="notAuth"></Navbar>
    <div class="flex-content">
      <TopNav v-if="notAuth" :hideBtn="notArticle"></TopNav>
      <!-- <transition name="fade" mode="out-in"> -->
      <router-view></router-view>
      <!-- </transition> -->
    </div>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import List from "./components/Stage/List.vue";
import Article from "./components/Stage/Article.vue";
import Test from "./components/Stage/Test";
import SignIn from "./components/Auth/SignIn";
import SignOut from "./components/Auth/SignOut";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Player from "./components/Player";
import TopNav from "./components/TopNav";

export default {
  name: "app",
  data() {
    return {
      transitionName: "slide-left"
    };
  },
  mounted() {
    this.$Progress.finish();
  },

  created() {
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    this.$Progress.start();
    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, from, next) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress;
        // parse meta tags
        this.$Progress.parseMeta(meta);
      }
      //  start the progress bar
      this.$Progress.start();
      //  continue to next page
      next();
    });
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach((to, from) => {
      //  finish the progress bar
      this.$Progress.finish();
    });
  },

  components: {
    Navbar,
    List,
    Article,
    Test,
    SignIn,
    SignOut,
    Home,
    Player,
    Portfolio,
    TopNav
  },
  computed: {
    notAuth() {
      if (this.$route.path !== "/sign-in" && this.$route.path !== "/sign-out") {
        return true;
      }
      return false;
    },
    notArticle() {
      return this.$route.path == "/article";
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html,
body {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  background-color: #f5f6f8;
}

h1,
h2,
h3,
h4,
p {
  margin: 0;
}

.main-bg {
  background-color: #fff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
}

.flex {
  display: flex;
}

.flex-main {
  display: flex;
  justify-content: center;
  justify-items: center;
}

.flex-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.btn {
  border-radius: 4px;
  padding: 14px 18px;
  width: 100%;
  text-align: center;
  border: 0;
  cursor: pointer;

  transition: 0.7s all cubic-bezier(0.075, 0.82, 0.165, 1);
}

.btn-dark {
  color: white;
}

.btn-primary {
  background: #109cf1;
  box-shadow: 0px 4px 10px rgba(16, 156, 241, 0.24);
}

.btn-success {
  background: #2ed47a;
  box-shadow: 0px 4px 10px rgba(16, 156, 241, 0.24);
}

.btn:hover {
  transform: translateY(-2px);
  transition: 0.7s all cubic-bezier(0.075, 0.82, 0.165, 1);
  box-shadow: none;
}

.outlined {
  border: 2px solid #109cf1;
  box-shadow: 0px 4px 10px rgba(16, 156, 241, 0.24) !important;
  background: #fff !important;
  color: #109cf1;
}

.simple {
  border: 0;
  background: transparent;
  width: auto;
  display: inline;
}

a {
  text-decoration: none;
  font-size: 13px;
  color: #109cf1;
}

a:hover {
  text-decoration: underline;
}

.link-primary {
  text-decoration: none;
  color: #109cf1;
  font-size: 13px;
}

.link-success {
  text-decoration: none;
  color: #2ed47a;
  font-size: 13px;
}

.right {
  float: right;
}

.line {
  margin: 32px 0;
  width: 100%;
  height: 1px;
  background-color: #dcdcdc;
}

.ps-64 {
  padding-left: 64px;
  padding-right: 64px;
  width: auto;
}

.ml-16 {
  margin-left: 16px;
}

.mb-16 {
  margin-bottom: 16px;
}

.space-between {
  justify-content: space-between;
}

/************** Transition */

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

@media screen and (max-width: 768px) {
  .content {
    /* padding: 0; */
  }
}
</style>
