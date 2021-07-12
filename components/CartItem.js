import { useState, useEffect, useCallback } from "react";

function CartItem({ item, removeFromCart }) {
  const [productCount, setProductCount] = useState(1);

  return (
    <div className="flex justify-between mt-6">
      <div className="flex">
        <img
          className="h-20 w-20 object-cover rounded"
          src={item.img_url}
          alt=""
        />
        <div className="mx-3">
          <h3 className="text-sm text-gray-600">{item.name}</h3>
          <div className="flex items-center mt-2">
            <button
              className="text-gray-500 focus:outline-none focus:text-gray-600"
              onClick={() => setProductCount(productCount + 1)}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </button>
            <span className="text-gray-700 mx-2">{productCount}</span>
            <button
              className="text-gray-500 focus:outline-none focus:text-gray-600"
              onClick={() =>
                setProductCount(
                  productCount > 1 ? productCount - 1 : productCount
                )
              }
            >
              <svg
                className="h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <span className="text-gray-600">
        ${(item.price * productCount).toFixed(2)}
      </span>
      <div>
        <button onClick={() => removeFromCart(item.id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default CartItem;
