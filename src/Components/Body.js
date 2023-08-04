import { useState } from "react";
import resList from "../Utils/mockData";
import RestroCard from "./RestroCard";
const Body=()=>
{
    const [listOfRestro , setListOfRestro] = useState(resList);

return(
    <div className="body-container">
    <div className="filter">
        <button 
        className="btn-filter" 
        onClick={()=> {
        const filterList = listOfRestro.filter(
            (res)=> res.info.avgRating > 4.2
            );
            setListOfRestro(filterList);
        }}
        >Top Rated Restraurats

        </button>
    </div>

    <div className="restro-card">
    {listOfRestro.map((restaurant=><RestroCard key={restaurant.info.id} resData = {restaurant}/>))}
    </div>
    </div>
);
};


export default Body;