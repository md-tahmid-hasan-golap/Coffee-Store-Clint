import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Components/Home";
import AllCoffees from "../Components/AllCoffees";
import AddCoffee from "../Components/AddCoffee";
import MyAddedCoffees from "../Components/MyAddedCoffees";
import MyOrders from "../Components/MyOrders";
import Register from "../Components/Register";
import Login from "../Components/Login";
import PrivateRouter from "../Components/PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/allCoffees",
        Component: AllCoffees,
      },
      {
        path: "/addCoffee",
        element: (
          <PrivateRouter>
            <AddCoffee></AddCoffee>
          </PrivateRouter>
        ),
      },
      {
        path: "/myAddedCoffees",
        element: (
          <PrivateRouter>
            <MyAddedCoffees></MyAddedCoffees>
          </PrivateRouter>
        ),
      },
      {
        path: "/myOrders",
        element: (
          <PrivateRouter>
            <MyOrders></MyOrders>
          </PrivateRouter>
        ),
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
]);

export default router;
