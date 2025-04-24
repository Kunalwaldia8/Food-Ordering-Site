import react from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearItem } from "../utils/cartSlice";
import { ItemList } from "./ItemList";

export const CartItems = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearItem());
  };

  return cartItems.length == 0 ? (
    <h1 className="mx-auto w-2/12 font-bold text-4xl">Cart Empty</h1>
  ) : (
    <div>
      <div className="flex justify-center my-4">
        <h1 className="text-4xl font-bold mx-auto w-1/12 my-4 p-2">Cart</h1>
      </div>
      <div className="flex justify-center my-4">
        <button
          className="px-4 py-2 bg-black text-white rounded-3xl"
          onClick={handleClear}
        >
          Clear Cart
        </button>
      </div>
      <div className="mx-auto w-6/12">
        {cartItems.map((items, index) => {
          return <ItemList items={items} key={index} visibleRemove={true} />;
        })}
      </div>
    </div>
  );
};
