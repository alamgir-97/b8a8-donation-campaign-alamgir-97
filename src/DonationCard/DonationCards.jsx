import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";


const DonationCards = () => {
    const [donations, setDonation] = useState([])
    useEffect(()=>{
        fetch('cardData.json')
        .then(res=>res.json())
        .then(data=>setDonation(data))
    },[])
    useEffect(()=>{
        fetch('cardData.json')
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
  return (
    <div className="grid grid-cols-4 gap-4">
       {donations.map(donation=><DonationCard key={donation.title} donation = {donation}>data</DonationCard>)}
       {/* <DonationCard  key={donation.title} donation={donation}></DonationCard> */}
      <h2>{donations.length}</h2>
    </div>
  );
};

export default DonationCards;
