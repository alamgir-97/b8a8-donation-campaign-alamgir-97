import DonationDetailsCard from "../DonationSelectionCard/CardSelection";
import { useEffect, useState } from "react";



const Donation = () => {

    

    const [donates, setDonates] = useState([])

    useEffect(()=>{
        fetch('cardData.json')
        .then(res=>res.json())
        .then(data=>setDonates(data))
        },[])

  
    
    return (
        <div>
           This is Donation Page
           <DonationDetailsCard></DonationDetailsCard>
        </div>
    );
};

export default Donation;