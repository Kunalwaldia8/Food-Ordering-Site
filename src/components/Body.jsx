import Resturantcard from "./Resturantcard";
import { useState, useEffect } from "react";
import { useresturantdetail } from "../utils/useResturantdetail";
import { HOME_PAGE_API } from "../utils/constants.js";
import { Link } from "react-router-dom";
import ShimmerUI from "./ShimmerUI.jsx";
const Body = () => {
  const [restaurants, setResturants] = useresturantdetail(HOME_PAGE_API);
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (restaurants.length > 0) {
      setlistOfRestaurants(restaurants);
      setLoading(false);
    }
  }, [restaurants]);
  const [text, settext] = useState("");
  const searchOperation = (t) => {
    settext(t);
    if (t === "") {
      setlistOfRestaurants(restaurants);
    } else {
      setlistOfRestaurants(
        restaurants.filter((item) =>
          item.info.name.toLowerCase().includes(t.toLowerCase())
        )
      );
    }
  };
  if (loading) return <ShimmerUI />;

  return (
    <div>
      <div className="m-4 flex  items-center">
        <div className="m-auto">
          <input
            className=" border-2 w-xl px-5 py-2 rounded-2xl "
            type="text"
            placeholder="Search"
            value={text}
            onChange={(e) => {
              searchOperation(e.target.value);
            }}
          ></input>
          <button
            className="ml-2 bg-blue-500 text-white font-semibold py-2 px-5 rounded-full 
               shadow-md hover:bg-blue-600 
               active:bg-blue-700 focus:outline-none focus:ring-4 
               focus:ring-blue-300 transition duration-300"
            onClick={() => {
              searchOperation(text);
            }}
          >
            search
          </button>
        </div>
      </div>
      <div className=" flex w-full justify-center flex-wrap mx-auto my-auto gap-x-2">
        {listOfRestaurants.map((items) => {
          return (
            <Link
              className="basis-full  shadow-blue-300 sm:basis-1/2 md:basis-1/6 lg:basis-1/6 xl:basis-1/6 bg-white  items-center ml-4 mr-4 h-[15rem] w-[13rem] my-2 "
              key={items.info.id}
              to={"/resturantMenu/" + items.info.id}
            >
              <Resturantcard resdetails={items} />
            </Link>
          );
        })}
      </div>
      <br />
    </div>
  );
};
export default Body;
