import { createBrowserRouter } from "react-router";
import MainLayoute from "../Layouts/MainLayoute";
import Home from "../Components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayoute,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);

export default router;
