import { createBrowserRouter } from "react-router";
import MainLayoute from "../Layouts/MainLayoute";
import Home from "../Components/Home";
import AllCoffees from "../Components/AllCoffees";
import SignIn from "../Components/SignIn";
import Registation from "../Components/Registation";

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
