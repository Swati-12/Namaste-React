import {CDN_URL} from "../Utils/Common";


const RestroCard =(props)=>
{
const {resData} = props;
const{ 
    name,
    avgRating ,
    cuisines,
    cloudinaryImageId,
    costForTwo} = resData?.info;

   const{slaString}=resData?.info.sla;

return(
    <div className="restro-container" style={{backgroundColor:"#f0f0f0"}}>
     <img className="res-logo" alt="res-logo" src={CDN_URL + cloudinaryImageId}/>
    
    <h3 className="name-container">{name} </h3>
    <h4>{avgRating}</h4>
    <h5>{cuisines.join(",")}</h5>
    <h5>{costForTwo}</h5>
    <h5>{slaString}</h5>
    </div>
)
}

export default RestroCard;