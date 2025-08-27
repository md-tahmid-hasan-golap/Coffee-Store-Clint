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
import CoffeeDetails from "../Components/CoffeeDetails";
import UpdadedCoffees from "../Components/UpdadedCoffees";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/coffee-limit"),
        Component: Home,
      },
      {
        path: "/coffee-details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees-details/${params.id}`),
        element: (
          <PrivateRouter>
            <CoffeeDetails></CoffeeDetails>
          </PrivateRouter>
        ),
      },
      {
        path: "/allCoffees",
        loader: () => fetch("http://localhost:3000/allCoffees"),
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
        path: "/updadedCoffee/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees-details/${params.id}`),
        element: (
          <PrivateRouter>
            <UpdadedCoffees></UpdadedCoffees>
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
