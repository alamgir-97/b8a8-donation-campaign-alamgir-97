import Home from "../components/Home/Home";
import Donation from "../components/Donation/Donation";
import Statistics from "../components/Statistics/Statistics";
import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import DonationCard from "../DonationCard/DonationCard";
import DetailsCard from "../DetailsCard/DetailsCard";




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
        {
          path: "/donation/:id",
          element: <DetailsCard></DetailsCard>,
          loader: fetch('public/cardData.json')
        },
      ],
    },
  ]);

export default router;