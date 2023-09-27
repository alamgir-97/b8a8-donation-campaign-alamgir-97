import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { saveDonation } from "../utility/LocalStorage";
import { useState,useEffect } from "react";
import { useParams } from 'react-router-dom';




const DonationDetailsCard = ({dat}) => {
  // const params = useParams()
  // console.log(params);
  console.log(dat);

  
  
const donatioData = useLoaderData();
//  const {id} = donations;
  console.log(donatioData);
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
    



  const handleDonation = () => {
  // saveDonation(id)
    toast("Donation successful!");
  
  
  
  }
  
  
    
        
       
  // const { picture, title, description } = donationData;
 
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src="/src/assets/Education.png"/>
          </figure>
          <div className="card-actions justify-start">
            <button onClick={handleDonation} className="rounded-lg px-6 py-3 text-xl font-semibold bg-red-500 text-white -mt-24 ml-24">Donate$290</button>
            <ToastContainer/>
            </div>
       

        <div className="card-body">
          <h2 className="card-title text-4xl font-bold text-black">Eduation</h2>
          <p className="text-justify text-base font-normal text-[rgba(11, 11, 11, 0.70)]">There are many things that can be done to ensure that all people have access to a good education. Governments can invest in public schools, provide financial assistance to students, and make sure that all schools have qualified teachers and resources. Families can support their children's education by creating a learning environment at home and helping them with their schoolwork. Teachers can create a positive and supportive learning environment for their students and challenge them to reach their full potential.</p>
     
          
        </div>
      </div>
    </div>
  );
};

export default DonationDetailsCard;
