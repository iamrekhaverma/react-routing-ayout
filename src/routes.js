import Users from "./pages/users";
import Admin from "./pages/admin";

const dashboardRoutes = [
  { path: '/admin', name: "Admin", component: Admin, exact: true },
  { path: '/users', name: "Users", component: Users, exact: true }
];

export {
  dashboardRoutes,
};
