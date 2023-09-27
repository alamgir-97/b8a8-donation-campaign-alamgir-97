import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
import Banner from "../components/Header/Banner/Banner";








// 
const MainLayouts = () => {
  return (
    <section className="">      
      
      <div className="pt-12 bg-[url('/src/assets/Clothing.png')] bg-cover bg-no-repeat " >
      <div className="-mt-12 pt-12 h-[500px] bg-[#FFFFFF60] backdrop-blur-sm">
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
