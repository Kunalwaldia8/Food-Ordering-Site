//Restruant Menu Page for each resturant

import { useParams } from "react-router-dom";
import { useMenuDetail } from "../utils/useMenuDetail";
import { IMG_LINK } from "../utils/constants";
import ShimmerUI from "./ShimmerUI";
import { MenuCard } from "./MenuCard";
import { useState } from "react";
const RestrauntCard = () => {
  const { id } = useParams();
  const Menu = useMenuDetail(id);
  const [showIndex, setShowIndex] = useState(0);
  if (Menu == undefined) return <ShimmerUI />;
  const {
    name,
    cuisines,
    avgRatingString,
    costForTwoMessage,
    totalRatingsString,
    locality,
    cloudinaryImageId,
  } = Menu?.data?.cards[2]?.card?.card?.info;

  const MenuSection = Menu.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
  return (
    <div>
      <div className=" w-6/12 m-auto flex justify-center">
        <div className="m-2 w-2xl h-1/6 flex  px-4 rounded-2xl border-2 border-gray-200  card_container shadow-[-10px_10px_5px_gray]">
          <img
            className="w-40 mx-4 my-2 rounded-sm h-34"
            src={IMG_LINK + cloudinaryImageId}
            alt=""
          />

          <div className="m-2">
            <h1 className="font-bold text-3xl">{name}</h1>
            <div className="flex justify-between items-center w-sm h-20">
              <h2 className="font-medium text-gray-600">
                {avgRatingString}({totalRatingsString}){" "}
              </h2>
              <p>|</p>
              <h2 className="font-medium text-gray-600">
                {costForTwoMessage}{" "}
              </h2>
              <p>|</p>
              <h2 className="font-medium text-gray-600">
                {cuisines.join(" ,")}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div>
        {MenuSection.filter((items) => {
          return items?.card?.card?.itemCards;
        }).map((item, index) => {
          return (
            <MenuCard
              key={index}
              Menu={item?.card?.card}
              index={showIndex == index && true}
              showIndexFunction={(show) => {
                if (show) setShowIndex(index);
                else setShowIndex(null);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestrauntCard;
