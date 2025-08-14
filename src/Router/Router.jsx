import { createBrowserRouter } from "react-router";
import MainLayoute from "../Layouts/MainLayoute";
import Home from "../Components/Home";
import AllCoffees from "../Components/AllCoffees";
import SignIn from "../Components/SignIn";
import Registation from "../Components/Registation";
import PrivateRouter from "../Components/PrivateRouter";
import AddCoffee from "../Components/AddCoffee";
import MyAddedCoffees from "../Components/MyAddedCoffees";
import MyOrders from "../Components/MyOrders";
import axios from "axios";
import CoffeeDetails from "../Components/CoffeeDetails";
import UpdateCoffee from "../Components/UpdateCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayoute,
    children: [
      {
        index: true,
        loader: () => axios("http://localhost:3000/coffees-limit"),
        Component: Home,
      },
      {
        path: "/allCoffees",
        loader: () => axios("http://localhost:3000/coffees"),
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
        path: "/coffeesDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees-details/${params.id}`),
        element: (
          <PrivateRouter>
            <CoffeeDetails></CoffeeDetails>
          </PrivateRouter>
        ),
      },
      {
        path: "/updateCoffee/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees-details/${params.id}`),
        element: (
          <PrivateRouter>
            <UpdateCoffee></UpdateCoffee>
          </PrivateRouter>
        ),
      },
      {
        path: "/myAddedCoffes",
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
        path: "/signIn",
        Component: SignIn,
      },
      {
        path: "/registation",
        Component: Registation,
      },
    ],
  },
]);

export default router;
