import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="flex flex-col md:flex-col lg:flex-row flex-center md:flex-center lg:justify-between ">
        <img className="h-14 md:h-18 lg:h-18 mx-auto mb-4 md:mb-2 lg:mb-0 lg:mx-0" src="/src/assets/Logo.png" alt="Logo" />
        <div className=" flex flex-col mx-auto md:mx-auto lg:mx-0 md:flex-row lg:flex-rowgap-8 justify-items-center lg:justify-items-center lg:items-center text-2xl md:text-lg lg:text-base md:gap-6 lg:gap-8">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-2xl md:text-lg lg:text-lg text-[#FF444A] font-bold underline"
                : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/donation"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-lg text-[#FF444A] font-bold underline"
                : ""
            }
          >
            Donation
          </NavLink>
          <NavLink
            to="/statistics"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-lg text-[#FF444A] font-bold underline"
                : ""
            }
          >
            Statistics
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
