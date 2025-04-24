import { IMG_LINK } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
export const ItemList = ({ items, index, visibleRemove }) => {
  const dispatch = useDispatch();
  const handleItems = (items, action) => {
    action == "add" ? dispatch(addItem(items)) : dispatch(removeItem(items));
  };

  const { name, defaultPrice, price, description, imageId } = items?.card?.info;

  return (
    <div
      key={index}
      className="border-b-2 flex justify-between border-gray-200 m-2 pb-4"
    >
      <div>
        <h1 className="font-bold">{name}</h1>
        <h2 className="font-serif ">
          Rs {defaultPrice == undefined ? price / 100 : defaultPrice / 100}
          /-
        </h2>

        <p className=" w-[30rem] line-clamp-2 text-ellipsis overflow-hidden  text-gray-600 my-4">
          {description}
        </p>
      </div>
      <div className="relative">
        <button
          className={`text-2xl bg-green-700 hover:bg-blue-50 hover:text-black text-white   rounded-xl absolute top-[6.6rem] ${
            visibleRemove ? "left-4" : "left-12"
          }  py-1 px-6`}
          onClick={() => handleItems(items, "add")}
        >
          {visibleRemove ? "+" : "ADD+"}
        </button>
        {visibleRemove && (
          <button
            className=" text-2xl bg-red-700 hover:bg-blue-50 hover:text-black text-white   rounded-xl absolute top-[6.6rem] left-28  py-1  px-6"
            onClick={() => handleItems(items, "remove")}
          >
            -
          </button>
        )}
        <img
          className="w-44 h-34 rounded-2xl"
          src={IMG_LINK + imageId}
          alt=""
        />
      </div>
    </div>
  );
};
