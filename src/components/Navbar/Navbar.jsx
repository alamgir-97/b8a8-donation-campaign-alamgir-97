

const Navbar = () => {
    return (
        <div className="text-3xl text-red-400 flex justify-between p-8 bg-pink-600">
             <div >Donation Campaign</div>
        <div className=" flex gap-4">
          <button to="/">Home</button>
          <button to="/home">Donation</button>
          <button to="/statistics">Statistics</button>
        </div>
        </div>
    );
};

export default Navbar;