import { useLoaderData, useParams } from "react-router-dom";

// import { saveDonation } from "../utility/LocalStorage";
import { useState, useEffect } from "react";
import DonateCard from "./DonateCard";

const CardSelection = () => {

  const [card, setCard] = useState({});
  
  const jsonData = useLoaderData();
  console.log(jsonData);
  
  const params = useParams();
  console.log(params);
  const {id} = params;
  console.log(id);

  useEffect(()=>{
const findCard = jsonData?.find(card=>card.id==id)
console.log(findCard);

setCard(findCard);
  },[id, jsonData])

  console.log(card)
  

  
  

  return (
    <>
    <DonateCard card={card}></DonateCard>
    </>
  );
};

export default CardSelection;
