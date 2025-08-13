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

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayoute,
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
