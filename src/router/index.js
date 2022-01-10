import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from "@/views/Main";
import goTo from "vuetify/lib/services/goto";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Main
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to) => {
    let scrollTo = 0

    if (to.hash) {
      scrollTo = to.hash
    }

    goTo(scrollTo)
  },
  routes
})

export default router
