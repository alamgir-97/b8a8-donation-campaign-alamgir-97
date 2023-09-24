import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";


const MainLayouts = () => {
    return (
        <section className="">
       <Navbar></Navbar>
       <Banner></Banner>
        <Outlet></Outlet>
      </section>
    );
};

export default MainLayouts;