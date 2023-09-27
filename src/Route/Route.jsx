import Home from "../pages/home/Home";
import Donation from "../pages/Donation/Donation";
import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import CardSelection from "../pages/DonationSelectionCard/CardSelection";
import DonationSuccessfulCard from "../DonationSuccessfulCard/DonationSuccessfulCard";
import Statistics from "../pages/Statistics/Statistics";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=>fetch('/public/cardData.json')
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
         loader:()=>fetch('/cardData.json')
      },
      {
        path: "/donation/:id",      
        element: <CardSelection></CardSelection>,
        loader: ()=>fetch('cardData.json')
          
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
    ],
  },
]);

export default router;

// loader: ({params}) => fetch(`/public/cardData.json/${params.id}`),