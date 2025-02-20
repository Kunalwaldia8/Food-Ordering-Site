import { imglink } from "../utils/constants";

const Resturantcard = ({ resdetails }) => {
  const {
    id,
    name,
    cloudinaryImageId,
    costForTwo,
    cuisines,
    avgRating,
    areaName,
    locality,
  } = resdetails.info;
  return (
    <div className="res-card">
      <img className="res-logo" src={imglink + cloudinaryImageId} />

      <h4>{name}</h4>
      <h5 className="cuisines">{cuisines.join(",")}</h5>
      <h5>{locality == areaName ? locality : locality + "," + areaName}</h5>
      <h5>{costForTwo}</h5>
      <h5>{avgRating} stars</h5>
    </div>
  );
};
export default Resturantcard;
