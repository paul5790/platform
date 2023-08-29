import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Monitoring from '../views/MonitoringView.vue'
import HomeView2 from "../views/HomeView2.vue";
import TabMonitoring from "../components/TabMonitoring.vue";
import DataTable from "../components/DataTable.vue";
import DataTest from "../components/DataTest.vue";
import QueryCondition from "../components/QueryCondition.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/monitoring",
    name: "monitoring",
    component: Monitoring,
  },
  {
    path: "/datatest",
    name: "datatest",
    component: DataTest,
  },
  {
    path: "/querycondition",
    name: "querycondition",
    component: QueryCondition,
  },
  {
    path: "/monitoring/datatable",
    name: "datatable",
    component: DataTable,
  },
  {
    path: "/monitoring/Tab1",
    name: "TabMonitoring",
    component: TabMonitoring,
  },
  {
    path: "/home2",
    name: "home2",
    component: HomeView2,
  },
  {
    path: "/datagrid",
    name: "datagrid",
    component: () => import("../views/DataGrid.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
