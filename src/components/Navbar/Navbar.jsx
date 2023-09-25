

const Navbar = () => {
    return (
        <div className="max-w-screen-lg mx-auto flex justify-between mt-12 bg-pink-50 p-2">             
             <img className="h-12" src="src\assets\Logo.png" alt="" />
        <div className=" flex gap-4">
          <button to="/">Home</button>
          <button to="/home">Donation</button>
          <button to="/statistics">Statistics</button>
        </div>
        </div>
    );
};

export default Navbar;