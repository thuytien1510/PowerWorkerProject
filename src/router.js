import Vue from "vue";
import VueRouter from "vue-router";
import Router from "vue-router";
import SignUp from "./components/SignUp.vue"
import LogIn from "./components/LogIn.vue"
import ForgotPassword from "./components/ForgotPassword.vue"
import JobList from "./components/Worker/JobList"
import EmployerPostJob from './components/Employer/EmployerPostJob.vue'
import ClassicJobRegions from './components/Employer/ClassicJob/ClassicJobRegions.vue'
import ClassicJobCategories from './components/Employer/ClassicJob/ClassicJobCategories.vue'

Vue.use(Router);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/login",
            alias: "/",
            name: "login",
            component: LogIn
        },
        {
            path: "/signup",
            name: "signup",
            component: SignUp
        },

        {
            path: "/forgotpassword",
            name: "forgotpassword",
            component: ForgotPassword
        },
        {
            path: "/joblist",
            name: "joblist",
            component: JobList
        },
        {
            path: "/employer/postJob",
            name: "postJob",
            component: EmployerPostJob,
            children: [
                {
                    path: "/region",
                    name: "region",
                    component: ClassicJobRegions
                },
                {
                    path: "/category",
                    name: "category",
                    component: ClassicJobCategories
                },
            ]
        },
    ]
})

export default router;
