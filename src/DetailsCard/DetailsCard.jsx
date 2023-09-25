import { useLoaderData } from "react-router-dom";
import { Route } from "react-router-dom";

const DetailsCard = () => {
    const jasonData = useLoaderData();
    console.log(jasonData)
    const {picture, title, description} = jasonData;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
  <figure><img src="./Rectangle4288.png" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default DetailsCard;