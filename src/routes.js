import Users from "./pages/users";
import Admin from "./pages/admin";
import Home from "./pages/home";

const dashboardRoutes = [
  { path: '/admin', name: "Admin", component: Admin, exact: true },
  { path: '/users', name: "Users", component: Users, exact: true }
];

const openRoutes = [
  { path: '/home', name: "Admin", component: Home, exact: true },
];

export {
  dashboardRoutes,
  openRoutes
};
