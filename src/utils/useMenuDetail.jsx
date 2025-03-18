import { useEffect, useState } from "react";
import { MENU_LIST_API } from "./constants";
export const useMenuDetail = (id) => {
  const [Menu, setMenu] = useState();
  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    const data = await fetch(MENU_LIST_API + id);
    const jsondata = await data.json();
    setMenu(jsondata);
  };
  return Menu;
};
