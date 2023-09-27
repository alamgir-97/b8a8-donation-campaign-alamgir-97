import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from 'sweetalert';

const DonateCard = ({ card }) => {
  const { category, picture, price, description, id } = card;

  const handleDonation = () => {
    const addedDonationArray = [];

    const donationItems = JSON.parse(localStorage.getItem("favourites"));

    if (!donationItems) {
      addedDonationArray.push(card);
      localStorage.setItem("favourites", JSON.stringify(addedDonationArray));
    //   toast("Donation successful!");
      swal("Congratulation!", "Your donation successful.");
    } else {
      addedDonationArray.push(...donationItems, card);
      localStorage.setItem("favourites", JSON.stringify(addedDonationArray));
    //   toast("Donation successful!");
      swal("Congratulation!", "Your donation successful.");
    }
  };

  

  return (
    <div>
      <div className="max-w-screen-lg mx-auto">
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img src="./srcHealth.png" alt={`${category}`} />
          </figure>
          <div className="card-actions justify-start">
            <button
              onClick={handleDonation}
              className="rounded-lg px-6 py-3 text-xl font-semibold bg-red-500 text-white -mt-24 ml-24"
            >
              Donate{price}
            </button>
            <ToastContainer />
          </div>

          <div className="card-body">
            <h2 className="card-title text-4xl font-bold text-black">
              {category}
            </h2>
            <p className="text-justify text-base font-normal text-[rgba(11, 11, 11, 0.70)]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateCard;
