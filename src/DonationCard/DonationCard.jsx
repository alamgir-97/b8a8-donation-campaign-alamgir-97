import { Link } from "react-router-dom";

const DonationCard = ({donation}) => {
  
     const {picture, title, category, category_bg, card_bg, text_button, id} = donation || {};
     
    //  const handleClick=()=> {
    //     alert("This is onclick function");
    // }
     
//onClick={handleClick}
    
    return (
        <div>
          <Link to={`/donation/${id}`}>
            <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img
            src={picture}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <div className="card-actions justify-start">
            <button className={`rounded-lg px-3 py-1 text-sm font-medium bg-[${card_bg}] text-white`}>{category}</button>
          </div>
          <h2 className={`card-title bg-[${category_bg}] text-xl font-semibold text-[${text_button}]` }>{title}</h2>
        </div>
      </div>
      </Link>
      </div>
    );
};

export default DonationCard;