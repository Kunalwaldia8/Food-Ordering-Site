import { IMG_LINK } from "../utils/constants";
import { ItemList } from "./ItemList";
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
          <i className="fa-solid fa-caret-down"></i>
        </div>
      </button>
      <div>
        {index &&
          itemCards.map((items, index) => {
            // console.log(items);
            return (
              <ItemList
                items={items}
                index={index}
                key={items.card.info.id}
                visibleRemove={false}
              />
            );
          })}
      </div>
    </div>
  );
};
