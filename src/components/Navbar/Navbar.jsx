import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
      <div className="max-w-screen-lg mx-auto bg-blue-200">
        <div className="flex justify-between">             
             <img className="h-18" src="/src/assets/Logo.png" alt="Logo" />

        <div className=" flex gap-8 justify-items-center items-center">          
          <NavLink to="/" className="text-lg font-normal focus:text-[#FF444A] focus:font-bold focus:underline">Home</NavLink>
          <NavLink to="/donation"  className="text-lg font-normal focus:text-[#FF444A] focus:font-bold focus:underline">Donation</NavLink>
          <NavLink to="/statistics"  className="text-lg font-normal focus:text-[#FF444A] focus:font-bold focus:underline">Statistics</NavLink>
          </div>
          
          
        </div>
        </div>
        
    );
};

export default Navbar;