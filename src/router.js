import Vue from "vue";
import VueRouter from "vue-router";
import Router from "vue-router";
import store from './store';

Vue.use(Router);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/login",
      alias: "/",
      name: "login",
      component: () => import("./components/LogIn.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("./components/SignUp.vue")
    },

    {
      path: "/forgotpassword",
      name: "forgotpassword",
      component: () => import("./components/ForgotPassword.vue")
    },
    {
      path: "/joblist",
      name: "joblist",
      component: () => import("./components/Worker/JobList"),
      meta: { requiresAuth: true }
    },
    {
      path: "/employer/postJob",
      name: "postJob",
      component: () => import("./components/Employer/EmployerPostJob.vue"),
      meta: { requiresAuth: true },
      children: [
        {
          path: "/region",
          name: "region",
          component: () => import("./components/Employer/ClassicJob/ClassicJobRegions.vue"),
          meta: { requiresAuth: true }
        },
        {
          path: "/category",
          name: "category",
          component: () => import("./components/Employer/ClassicJob/ClassicJobCategories.vue"),
          meta: { requiresAuth: true }
        },
      ]
    },
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      next({
        name: "login",
      });
    } else {
      next();
    }
  } else {
    next();
  }
})
export default router;
