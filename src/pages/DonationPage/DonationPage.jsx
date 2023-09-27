
import { useState, useEffect } from 'react';
import DonationSuccessfulCard from '../../DonationSuccessfulCard/DonationSuccessfulCard';


const DonationPage = () => {
    const [donation, setDonation] = useState([]);
    const [noFound, setNoFound] = useState("")

    useEffect(()=>{
    const donationItems = JSON.parse(localStorage.getItem("favourites"));

        if(donationItems) {
            setDonation(donationItems)
        }
        else {
            setNoFound('No data found')
        }

},[])
console.log(donation);
    

return (
   
        <div>
             {noFound ? 
             <p className="h-[80vh] justify-center items-center">{noFound}</p> : <div className='grid grid-cols-1 md:grid-cols-2 gap-5'> {donation.map(donate =><DonationSuccessfulCard key={donate.id} donate={donate}></DonationSuccessfulCard>)}</div> 
           
        }
        </div>
    );
};

export default DonationPage;