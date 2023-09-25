

const Banner = () => {
    return (
        <div className="max-w-lg mx-auto mt-16"> 
            <h2 className="text-center text-2xl font-bold">I Grow By Helping People in Need</h2>
            <div className="flex justify-center"><input className="bg-sky-200" type="text" />
            <button className="btn btn-primary py-2" >Search</button></div>
        </div>
    );
};

export default Banner;