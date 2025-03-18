import { useState } from "react";
import { IMG_LINK } from "../utils/constants";
export const MenuCard = ({ Menu, showIndexFunction, index }) => {
  const { title, itemCards } = Menu;
  return (
    <div className="bg-gray-50 w-6/12 m-auto shadow-lg shadow-gray-200  p-2 my-4">
      <button
        className="w-full"
        onClick={() => {
          showIndexFunction(!index);
        }}
      >
        <div className="flex font-extrabold text-gray-500 text-2xl p-2 justify-between my-1">
          <h1 className="">
            {title} ({itemCards.length})
          </h1>
          <i class="fa-solid fa-caret-down"></i>
        </div>
      </button>
      <div>
        {index &&
          itemCards.map((items, index) => {
            const { name, defaultPrice, price, description, imageId } =
              items?.card?.info;

            return (
              <div className="border-b-2 flex justify-between border-gray-200 m-2 pb-4">
                <div>
                  <h1 className="font-bold" key={index}>
                    {name}
                  </h1>
                  <h2 className="font-serif ">
                    Rs{" "}
                    {defaultPrice == undefined
                      ? price / 100
                      : defaultPrice / 100}
                    /-
                  </h2>

                  <p className=" w-[30rem] line-clamp-2 text-ellipsis overflow-hidden  text-gray-600 my-4">
                    {description}
                  </p>
                </div>
                <div className="relative">
                  <button className=" bg-black hover:bg-blue-50 hover:text-black text-white   rounded-xl absolute top-[6.5rem] left-12  py-2 px-6">
                    ADD
                  </button>
                  <img
                    className="w-44 h-34 rounded-2xl"
                    src={IMG_LINK + imageId}
                    alt=""
                  />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
