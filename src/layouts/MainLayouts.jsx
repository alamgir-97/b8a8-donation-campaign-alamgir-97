import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";

const MainLayouts = () => {
  return (
    <section className="">
      <div className="bg-red-200 h-96 bg-[url(./'Rectangle 4288.png')]">
        {/* <img src="src\assets\Rectangle 4288.png" alt="" /> */}
        <Navbar></Navbar>
        <Banner></Banner>
      </div>

      <Outlet></Outlet>
    </section>
  );
};

export default MainLayouts;
