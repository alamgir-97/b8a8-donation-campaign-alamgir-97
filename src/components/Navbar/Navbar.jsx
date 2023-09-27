import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="max-w-screen-lg mx-auto bg-blue-200">
      <div className="flex justify-between">
        <img className="h-18" src="/src/assets/Logo.png" alt="Logo" />
        <div className=" flex gap-8 justify-items-center items-center">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-lg text-[#FF444A] font-bold underline"
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
