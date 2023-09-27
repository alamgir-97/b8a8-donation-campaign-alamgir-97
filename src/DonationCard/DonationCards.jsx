import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";
import DonationDetailsCard from "../DonationDetailsCard/DonationDetailsCard";
 import { useLoaderData } from "react-router-dom";


const DonationCards = () => {
  
   console.log(useLoaderData());
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
       
       {/* {donations.slice(0,8).map(donation=><DonationCard key={donation.title} donation = {donation}>data</DonationCard>)} */}
       {/* <DonationCard  key={donation.title} donation={donation}></DonationCard> */}
      <h2>{donations.length}</h2>
      
    </div>
  );
};

export default DonationCards;
