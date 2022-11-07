import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Register from "./pages/Register/Register";

const routes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/dashboard",
    component: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: "/register",
    component: <Register />,
  },
  {
    path: "*",
    component: <NotFound />,
  },
];

export default routes;
