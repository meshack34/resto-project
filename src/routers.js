import Home from "./components/Home.vue";
import department from "./components/department.vue";
import employee from "./components/employee.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Home",
    component: Home,
    path: "/home",
  },
  {
    name: "employee",
    component: employee,
    path: "/employee",
  },
  {
    name: "department",
    component: department,
    path: "/department",
  },

  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
