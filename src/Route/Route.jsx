import Home from "../components/Home/Home";
import Donation from "../components/Donation/Donation";
import Statistics from "../components/Statistics/Statistics";
import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";




const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,   
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/donation",
          element: <Donation></Donation>,
        },
        {
          path: "/statistics",
          element: <Statistics></Statistics>,
        },
      ],
    },
  ]);

export default router;