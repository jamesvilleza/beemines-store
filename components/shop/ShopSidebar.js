import React from "react";
import Link from "next/link";

import classNames from "classnames";
import { Select } from "antd";

import { SHOP } from "../../common/defines";

const ShopSidebar = ({ categories }) => {
  const { Option } = Select;
  // const dispatch = useDispatch();
  // const globalState = useSelector((state) => state.globalReducer);
  // const shopState = useSelector((state) => state.shopReducer);

  // const subCategory = SHOP.category.find(
  //   (item) => item.name.toLowerCase() === globalState.category.toLowerCase()
  // // );
  // const onChooseSubCategory = (data) => {
  //   if (!data || data === 'all') {
  //     return dispatch(setSubCategory(''));
  //   }
  //   return dispatch(setSubCategory(data));
  // };
  // const handleChange = (value) => {
  //   onChooseSubCategory(value);
  // };
  return (
    <div className="shop-sidebar">
      <h5>Category</h5>
      <div className="shop-sidebar__subcategory">
        <ul>
          <li className="-ml-3">
            <Link href="">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  onChooseSubCategory("all");
                }}
              >
                <i className="icon_document_alt" />
                All
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Tops
                <i />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Bottoms
                <i />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Dresses
                <i />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Jackets
                <i />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Hoodies
                <i />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Blazers
                <i />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Cardigans
                <i />
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="shop-sidebar__subcategory-mobile">
        <Select defaultValue="all" style={{ width: "100%" }}>
          <Option value="all">
            <i className="icon_document_alt" />
            All
          </Option>
          <Option value="tops">
            <i className="icon_document_alt" />
            Tops
          </Option>
          <Option value="bottoms">
            <i className="icon_document_alt" />
            Bottoms
          </Option>
          <Option value="dresses">
            <i className="icon_document_alt" />
            Dresses
          </Option>
          <Option value="jackets">
            <i className="icon_document_alt" />
            Jackets
          </Option>
          <Option value="hoodies">
            <i className="icon_document_alt" />
            Hoodies
          </Option>
          <Option value="blazers">
            <i className="icon_document_alt" />
            Blazers
          </Option>
          <Option value="cardigans">
            <i className="icon_document_alt" />
            Cardigans
          </Option>

          <Option>
            {" "}
            <i />
          </Option>
        </Select>
      </div>
    </div>
  );
};

export default ShopSidebar;
