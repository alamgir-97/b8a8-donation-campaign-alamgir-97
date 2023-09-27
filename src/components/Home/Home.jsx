import DonationCards from "../../DonationCard/DonationCards";
import { useLoaderData } from "react-router-dom";
import DonationDetailsCard from "../../DonationDetailsCard/DonationDetailsCard";


const Home = () => {
    const donationDa = useLoaderData();
    console.log(donationDa);
    return (
        <div>
           <DonationCards></DonationCards>
           <DonationDetailsCard dat = {donationDa}></DonationDetailsCard>
       
           
        </div>
    );
};

export default Home;