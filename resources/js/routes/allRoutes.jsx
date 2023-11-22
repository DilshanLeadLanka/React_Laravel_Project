
// Authentication related pages
import Login from "../pages/Admin/Authentication/Login";
import Logout from "../pages/Admin/Authentication/Logout";
import Register from "../pages/Admin/Authentication/Register";
import ForgetPwd from "../pages/Admin/Authentication/ForgetPassword";
import ResetPassword from "../pages/Admin/Authentication/ResetPassword";

import Dashboard from "../pages/Admin/Dashboard/index";
import Shift from "../pages/Admin/Shift/index.jsx";
import SystemUserRolePage from "@/pages/Admin/SystemUser/SystemUserRolePage/index.jsx";

const authProtectedRoutes = [
  //Index Main
  {path: "/", exact: true, component: <Shift /> },
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/shift", component: <Shift /> },
  { path: "/user-roles", component: <SystemUserRolePage /> },

];


const publicRoutes = [
  { path: "/login", component: <Login /> },
  { path: "/logout", component: <Logout /> },
  { path: "/forgot-password", component: <ForgetPwd /> },
  { path: "/register", component: <Register /> },
  { path: "/reset-password/:token", component: <ResetPassword /> },
];

export { publicRoutes, authProtectedRoutes };
