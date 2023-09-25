import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";

const MainLayouts = () => {
  return (
    <section className="">
      <div className="pt-12 h-[500px] bg-no-repeat bg-center bg-[url('C:\Projects\donation-campaign-assignment08-batch8\src\layouts\Rectangle 4288.png')]">
        {/* <img src="src/assets/Rectangle 4288.png" alt="" /> */}
        <Navbar></Navbar>
        <Banner></Banner>
      </div>

      <Outlet></Outlet>
    </section>
     
  );
};

export default MainLayouts;
