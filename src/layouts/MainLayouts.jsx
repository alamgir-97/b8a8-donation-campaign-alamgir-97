import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";




// 
const MainLayouts = () => {
  return (
    <section className="">      
      <div className=" pt-12 h-[500px] bg-[url('/src/assets/Clothing.png')] bg-cover bg-no-repeat " >
        <div className="h-[500px] bg-[#00000030] backdrop-blur-sm">
        {/* <img src="src/assets/Rectangle 4288.png" alt="" /> */}
        <Navbar></Navbar>
        <Banner></Banner>
        </div>
      </div>

      <Outlet></Outlet>
    </section>
     
  );
};

export default MainLayouts;
