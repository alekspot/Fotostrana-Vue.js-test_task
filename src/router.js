import Vue from "vue";
import Router from "vue-router";
import store from "./store";

import Home from './views/Home.vue';
import FilmInfo from './views/FilmInfo.vue';
Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "Фильмы",
      },
    },
    {
      path: "/film/:id",
      name: "film",
      component: FilmInfo,
      meta: {
        title: "О фильме",
      },
    },
    // {
    //   path: "/quiz/:id",
    //   name: "quiz-edit",
    //   component: () => import(/* webpackChunkName: "quiz" */ "./views/Quiz.vue"),
    //   meta: {
    //     title: "Редактирование теста",
    //     requiresAuth: true,
    //   },
    // },
    // {
    //   path: "*", // * - совпадает с любым URL, c которым не было совпадения выше
    //   name: "not-found",
    //   component: () => import(/* webpackChunkName: "404" */ "./views/404.vue"),
    //   meta: {
    //     title: "Страница не найдена",
    //     requiresAuth: true,
    //   },
    // },
  ],
});

router.beforeEach((to, from, next) => {
  // объект to соответствует машруту, КУДА пытается попасть пользователь
  document.title = to.meta.title;

//   store.dispatch(SHOW_PRELOADER).catch(console.log);

  // next() - функция обратного вызова, которая передаёт управление следующему хуку,
  // а также позволяет блокировать переходы к конкретным машрутам или выполнять редиректы
  next();
});

export default router;