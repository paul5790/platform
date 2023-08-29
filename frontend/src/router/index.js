import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/monitoring",
    name: "monitoring",
    component: () => import("../views/MonitoringView.vue"),
  },
  {
    path: "/datatest",
    name: "datatest",
    component: () => import("../components/DataTest.vue"),
  },
  {
    path: "/querycondition",
    name: "querycondition",
    component: () => import("../components/QueryCondition.vue"),
  },
  {
    path: "/monitoring/datatable",
    name: "datatable",
    component: () => import("../components/DataTable.vue"),
  },
  {
    path: "/monitoring/Tab1",
    name: "TabMonitoring",
    component: () => import("../components/TabMonitoring.vue"),
  },
  {
    path: "/home2",
    name: "home2",
    component: () => import("../views/HomeView2.vue"),
  },
  {
    path: "/datagrid",
    name: "datagrid",
    component: () => import("../views/DataGrid.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
