import { Row, Col, Empty, Pagination } from "antd";

import classNames from "classnames";

import Product from "../product/Product";
import {
  getProductsByFilter,
  getProductsBySearch,
} from "../../common/shopUtils";
import React, { useState, useEffect } from "react";
// import products from "../../data/product.json";

function ShopContentProduct({
  productResponsive,
  fiveColumn,
  // products,
  productPerPage,
  productStyle,
  page,
  setPage,
}) {
  // const shopState = useSelector((state) => state.shopReducer);
  // const globalState = useSelector((state) => state.globalReducer);
  // const [currentData, setCurrentData] = useState();
  const [offset, setOffset] = useState(0);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch(
        "https://beeminesapi-ml.stackstaging.com/wp-json/wc/v3/products?consumer_key=ck_7c3f44352e6efec25bfcafd42b76f9ab3372d17d&consumer_secret=cs_c35b753b93f5bcee5ec9374fc694ff5c3c69fc90"
      );

      const data = await res.json();

      setProducts(data);
    };

    getProducts();
  }, []);

  console.log("Products", products);

  // useEffect(() => {
  //   let filteredProduct = getProductsByFilter(
  //     [...data],
  //     shopState.sort,
  //     shopState.subCategory
  //   );
  //   setCurrentData(filteredProduct);
  //   setOffset(0);
  // }, [shopState, data]);
  // useEffect(() => {
  //   setPage(1);
  // }, [globalState]);
  // const itemRender = (current, type, originalElement) => {
  // if (type === 'prev') {
  //   return (
  //     <a>
  //       <i className="fal fa-angle-left" />
  //     </a>
  //   );
  //   // }
  //   if (type === 'next') {
  //     return (
  //       <a>
  //         <i className="fal fa-angle-right" />
  //       </a>
  //     );
  //   }
  //   return originalElement;
  // };
  const onChangeOffset = (page, pageSize) => {
    let offset = (page - 1) * pageSize;
    setPage(page);
    setOffset(offset);
  };

  return (
    <div className="shop-content__product">
      {!products || !products.length ? (
        <Empty description="No products in this category" />
      ) : (
        <>
          <Row gutter={[{ xs: 5, sm: 5, xl: 15, xxl: 30 }, 30]}>
            {products
              .slice(offset, offset + productPerPage)
              .map((product, index) => (
                <Col
                  key={index}
                  className={classNames({ "five-col": fiveColumn })}
                  {...productResponsive}
                >
                  <Product data={product} productStyle={productStyle} />
                </Col>
              ))}
          </Row>
          {products.length >= productPerPage && (
            <Pagination
              classNames="shop-content__product-pagination"
              defaultCurrent={1}
              current={page}
              total={products.length}
              pageSize={productPerPage}
              itemRender={itemRender}
              onChange={(page, pageSize) => onChangeOffset(page, pageSize)}
            />
          )}
        </>
      )}
    </div>
  );
}

export default React.memo(ShopContentProduct);
