import { ElMessage } from "element-plus";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/admin",
  },
  {
    path: "/auth",
    name: "auth",
    component: () => import("../views/AuthView.vue"),
  },
  {
    path: "/course/:id",
    name: "course",
    meta: { isAuth: true },
    component: () => import("../views/Course/EditCourse.vue"),
  },
  {
    path: "/lesson/:id",
    name: "lesson",
    meta: { isAuth: true },
    component: () => import("../views/Lesson/EditLesson.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    meta: { isAuth: true },
    component: () => import("../views/AdminView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export function checkAccessMiddleware(to, from, next) {
  const isAuthRoute = to.matched.some((item) => item.meta.isAuth);
  const isAccessible =
    this.$store.getters("auth/isLoggedIn") &&
    this.$store.getters("auth/isAdmin");

  if (isAuthRoute && !isAccessible)
    ElMessage.error("Нужны права администратора");
  if (isAccessible) return next();
  if (isAuthRoute) return next({ name: "auth" });
  next();
}

export default router;
