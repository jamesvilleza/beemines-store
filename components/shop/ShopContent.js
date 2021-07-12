import React from "react";
import ShopContentHeader from "./ShopContentHeader";
import ShopContentProduct from "./ShopContentProduct";
import { useState } from "react";

function ShopContent({
  fiveColumn,
  productResponsive,
  products,
  productPerPage,
  productStyle,
}) {
  const [page, setPage] = useState(1);
  return (
    <div className="shop-content">
      <ShopContentHeader page={page} productPerPage={productPerPage} products={products} />
      <ShopContentProduct
        productStyle={productStyle}
        fiveColumn={fiveColumn}
        page={page}
        setPage={setPage}
        productResponsive={productResponsive}
        products={products}
        productPerPage={productPerPage}
      />
    </div>
  );
}

export default ShopContent;
