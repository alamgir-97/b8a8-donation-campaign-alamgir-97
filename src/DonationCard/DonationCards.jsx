import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";
import Banner from "../components/Header/Banner/Banner";



const DonationCards = () => {
  
    const [donations, setDonations] = useState([])
    useEffect(()=>{
        fetch('cardData.json')
        .then(res=>res.json())
        .then(data=>setDonations(data))
    },[])
    useEffect(()=>{
        fetch('cardData.json')
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])


  return (
    <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
     
       {donations?.map(donation=><DonationCard key={donation.id} donation = {donation}>data</DonationCard>)}       
      
    </div>
  );
};

export default DonationCards;
