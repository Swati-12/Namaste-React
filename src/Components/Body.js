import { useState } from "react";
import resList from "../Utils/mockData";
import RestroCard from "./RestroCard";
import { useEffect } from "react";
import Shimmer from "./ShimmerUI";
const Body=()=>
{
    const [listOfRestro , setListOfRestro] = useState([]);
    const[filteredRestro , setFilteredRestro] = useState([]);
    const[searchFilter , setsearchFilter] = useState("");


    useEffect (()=> {
        fetchData()
    } ,[]);

    const fetchData = async ()=> {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5892126&lng=77.24267069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

    const json = await data.json();
    console.log(json);

    //Optional Chaining
    setListOfRestro(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestro(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
    
    };
  //Conditional Rendering

return listOfRestro.length===0 ? <Shimmer/> :(
    <div className="body-container">
    <div className="filter">
    <div className="search">
    <input type="text" className="search-area" placeholder="search here..."  value= {searchFilter} 
    onChange={(e)=>{setsearchFilter (e.target.value)
    }}/>

    <button className="btn-search" onClick={()=>{
        const filterSearch= listOfRestro.filter((res)=>res.info.name.toLowerCase()
        .includes(searchFilter.toLowerCase()));
        setFilteredRestro(filterSearch);
    }}>
    Search</button>


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
    </div>

    <div className="restro-card">
    {filteredRestro.map((restaurant=><RestroCard key={restaurant.info.id} resData = {restaurant}/>))}
    </div>
    </div>
);
};


export default Body;