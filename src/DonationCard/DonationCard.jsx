

const DonationCard = ({donation}) => {
     const {picture, title, category} = donation;
    
    return (
        <div>
            <div className="card card-compact w-64 bg-base-100 shadow-xl">
        <figure>
          <img
            src={picture}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <div className="card-actions justify-end">
            <button className="btn btn-primary">{category}</button>
          </div>
          <h2 className="card-title">{title}</h2>
        </div>
      </div>
        </div>
    );
};

export default DonationCard;