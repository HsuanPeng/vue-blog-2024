import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Article from "../views/Article.vue";
import Login from "../views/Login.vue";
import Admin from "../views/Admin.vue";
import Add from "../views/Admin/Add.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/article/:id",
    name: "Article",
    component: Article,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    children: [
      {
        path: "/",
        name: "Admin-Home",
        component: Admin,
      },
      {
        path: "add",
        name: "Admin-Add",
        component: Add,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
