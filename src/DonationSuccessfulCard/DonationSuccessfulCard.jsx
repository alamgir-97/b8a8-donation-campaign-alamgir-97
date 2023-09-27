import { useLoaderData } from "react-router-dom";

const DonationSuccessfulCard = () => {
  console.log(useLoaderData())
  return (
    <div className="grid grid-cols-2 gap-5">
    <div className="flex gap-4 bg-blue-300  rounded-xl">
     
        <figure className="">
          <img className="h-full" src="./src/assets/Education.png" alt="Shoes" />
        </figure>

        <div className="card-body pl-4">
          <div className="card-actions justify-start">
            <button
              className={`rounded-lg px-3 py-1 text-sm text-[#0052FF] font-normal bg-red-500`}
            >
              category
            </button>
          </div>
          <h2 className={`text-2xl font-semibold text-black`}>Education</h2>
          <p className={`text-base font-semibold text-[#0052FF]`}>$290</p>
          <div className="card-actions justify-start">
            <button
              className={`rounded-lg px-4 py-2 text-lg text-white font-semibold bg-red-500`}
            >
              category
            </button>
          </div>
        
      </div>

      <div className="card card-compact bg-base-100 shadow-xl flex "></div>
    </div>





    










    </div>
  );
};

export default DonationSuccessfulCard;
