import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="max-w-screen-lg mx-auto flex justify-between mt-12 bg-pink-50 p-2">             
             <img className="h-12" src="./src\assets\Logo.png" alt="" />
        <div className=" flex gap-4">

          <NavLink to="/">Home</NavLink>
          <NavLink to="/donation">Donation</NavLink>
          <NavLink to="/statistics">Statistics</NavLink>
          
        </div>
        </div>
    );
};

export default Navbar;