import { useState } from "react";
import { useParams } from "react-router-dom";

const Banner = () => {
   
    // console.log(data[0].title);
    // console.log(data[1].title);
    // console.log(data[2].title);
    // console.log(useParams());
    const [category, setCategory] = useState([]);
    const {id} = useParams();
    console.log(id);
    // console.log(donation.title);
    
  

    // const {title} = donation;
    // console.log(title);
   
    const handleSearch = (e) =>{
    e.preventDefault();
    const searchText = e.target.searchText.value;
    console.log(searchText);
    // const getValue = e=> e.target.value;
    // const getValue = document.getElementById("search").value;
    // console.log(getValue);
}
    return (
        <div className="max-w-screen-lg mx-auto mt-20"> 
            <h2 className="text-center text-5xl font-bold mb-10">I Grow By Helping People in Need</h2>

            <form onSubmit={handleSearch} className="flex justify-center text-sm font-normal">
                <input id="searh" className="p-3 w-80 border rounded-s-lg" type="text" name="searchText" placeholder="Search here..."/>
                <input type="submit"  className="rounded-e-lg px-7 py-3 text-base font-semibold bg-red-500 text-white" value="Search"/>
                </form>
            {/* <div className="flex justify-center text-sm font-normal"><input id="searh" className="p-3 w-80 border rounded-s-lg" type="text" placeholder="Search here..."/>
            <button onClick={handleSearch} className="rounded-e-lg px-7 py-3 text-base font-semibold bg-red-500 text-white" >Search</button></div> */}
        </div>
    );
};

export default Banner;