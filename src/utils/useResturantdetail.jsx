import { useState, useEffect } from "react";
export const useresturantdetail = (API) => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);
  async function fetchdata() {
    const data = await fetch(API);
    const jsondata = await data.json();
    setlistOfRestaurants(
      jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }
  return [listOfRestaurants, setlistOfRestaurants];
};
