import Resturantcard from "./Resturantcard";
import { restaurants } from "../utils/mockdata";
import { useState, useEffect } from "react";
const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState(restaurants);
  const [text, settext] = useState("");

  const searchOperation = () => {
    const filtered = restaurants.filter((items) => {
      return items.info.name.toLowerCase().includes(text.toLowerCase());
    });
    console.log(filtered);
    setlistOfRestaurants(filtered);
  };
  try {
    useEffect(() => {
      fetchdata();
    }, []);
    const fetchdata = async () => {
      const api =
        "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=30.73390&lng=76.78890&carousel=true&third_party_vendor=1";
      const fetchData = await fetch(api);
      const fetchedjson = await fetchData.json();
      setlistOfRestaurants(
        fetchedjson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    };
  } catch (error) {
    console.log(err);
  }
  return (
    <div className="body-container">
      <div className="button-container">
        <button
          className="filter-btn"
          onClick={() => {
            const list = listOfRestaurants.filter((items) => {
              return items.info.avgRating > 4.4;
            });
            setlistOfRestaurants(list);
          }}
        >
          Tap to filter
        </button>
        <div>
          <input
            type="text"
            placeholder="Search"
            value={text}
            onChange={(e) => {
              settext(e.target.value);
            }}
          ></input>
          <button className="search-btn" onClick={searchOperation}>
            search button
          </button>
        </div>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((items) => {
          return <Resturantcard key={items.info.id} resdetails={items} />;
        })}
      </div>
    </div>
  );
};
export default Body;
