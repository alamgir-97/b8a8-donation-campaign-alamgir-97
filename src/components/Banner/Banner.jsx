

const Banner = () => {
    return (
        <div className="max-w-screen-lg mx-auto mt-20"> 
            <h2 className="text-center text-5xl font-bold mb-10">I Grow By Helping People in Need</h2>
            <div className="flex justify-center text-sm font-normal"><input className="p-3 w-80 border rounded-s-lg" type="text" placeholder="Search here..."/>
            <button className="rounded-e-lg px-7 py-3 text-base font-semibold bg-red-500 text-white" >Search</button></div>
        </div>
    );
};

export default Banner;