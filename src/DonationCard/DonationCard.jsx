import { Link } from "react-router-dom";

const DonationCard = ({donation}) => {
     const {picture, title, category, category_bg, id} = donation;
     
    //  const handleClick=()=> {
    //     alert("This is onclick function");
    // }
     
//onClick={handleClick}
    
    return (
        <Link to={`/donation/${id}`}> 
            <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img
            src={picture}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <div className="card-actions justify-end">
            <button className={`btn bg-[${category_bg}]`}>{category}{category_bg}</button>
          </div>
          <h2 className={`card-title bg-[${category_bg}]`}>{title}</h2>
        </div>
      </div>
      </Link>
    );
};

export default DonationCard;