import Home from "../components/Home/Home";
import Donation from "../components/Donation/Donation";
// import Statistics from "../components/Statistics/Statistics";
import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import DonationDetailsCard from "../DonationDetailsCard/DonationDetailsCard";
import DonationSuccessfulCard from "../DonationSuccessfulCard/DonationSuccessfulCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch('/public/cardData.json')
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
        // loader:()=>fetch('/public/cardData.json')
      },
      {
        path: "/donation/:id",       
        
        element: <DonationDetailsCard></DonationDetailsCard>,
        loader:()=>fetch('/public/cardData.json')
          // loader: ({params}) => fetch(`/public/cardData.json/${params.id}`),
      },
      {
        path: "/statistics",
        element: <DonationSuccessfulCard></DonationSuccessfulCard>
      },
    ],
  },
]);

export default router;
