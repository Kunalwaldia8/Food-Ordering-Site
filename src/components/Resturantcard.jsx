//Resturant Card for home page

import { IMG_LINK } from "../utils/constants";
const Resturantcard = ({ resdetails }) => {
  const {
    id,
    name,
    cloudinaryImageId,
    costForTwo,
    cuisines,
    avgRatingString,
    areaName,
    locality,
    slaString,
  } = resdetails.info;
  const time = resdetails.info.sla.lastMileTravelString;
  return (
    <div className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-[10%] bg-white p-2 rounded-lg  items-center ml-4 mr-4 h-[15rem] w-[13rem] my-2">
      <img
        className="res-logo h-[60%] object-cover m-auto rounded-lg w-[100%]"
        src={IMG_LINK + cloudinaryImageId}
      />
      <div className="h-[40%] flex flex-col justify-between overflow-hidden">
        <h4 className="font-bold text-xl text-gray-800 line-clamp-1 overflow-hidden text-ellipsis">
          {name}
        </h4>

        <h5 className="font-light font-sans text-xs text-gray-600 line-clamp-2 overflow-hidden text-ellipsis">
          {cuisines.join(", ")}
        </h5>

        <span className="flex justify-between items-center mt-2">
          <h5 className="font-sans text-white bg-green-500 border-2 border-green-400 py-1 px-2 rounded-lg text-xs">
            {avgRatingString}
          </h5>

          <h2 className="text-sm font-sans text-gray-700">{costForTwo}</h2>

          <h2 className="text-sm font-sans text-gray-700">{time}</h2>
        </span>
      </div>
    </div>
  );
};
export default Resturantcard;
