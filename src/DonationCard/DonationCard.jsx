import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';



const DonationCard = ({donation}) => {
  
     const {picture, title, category, category_bg, card_bg, text_button, id} = donation || {};
    
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
          <div className="justify-start">
            <button className={`rounded-lg px-3 py-1 text-sm border font-medium bg-[${card_bg}] text-[${text_button}] `}>{category}</button>
          </div>
          <h2 className={`bg-[${category_bg}] text-xl font-semibold text-[${text_button}]` }>{title}</h2>
        </div>
      </div>
      </Link>
      </div>
    );
  
  }

    // class donation extends React.Component {
    //   render() {
    //     donation.propTypes = {
    //       optionalObject: PropTypes.object,
    //   }
    // }
    // }

    export default DonationCard;