import React from "react";
import Head from "next/head";
import { BackTop, message } from "antd";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import WithHeaderScroll from "../../common/WithHeaderScroll";
// import SubpagesSidebar from "../subpages/SubpagesSidebar";

const ScrollHeader = WithHeaderScroll(Header);

const LayoutOne = ({
  title,
  headerStyle,
  containerType,
  children,
  clearSpaceTop,
}) => {
  message.config({
    maxCount: 3,
    duration: 1,
  });

  return (
    <>
      <Head>
        <title>Beemines | Clothing Store</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Welcome to Beemines Clothing Store, your shopping destination for fashion online. We offer fashion and quality at the best price in a more sustainable way."
        />
        <meta name="image" content="../../public/meta-pic.jpg" />
        <link rel="canonical" href="https://beemines.ml" />
      </Head>

      <ScrollHeader headerStyle={headerStyle} containerType={containerType} />
      <div className={`content $classNames({ "clear-top": clearSpaceTop })}`}>
        {children}
      </div>
      <Footer containerType={containerType} />
      <BackTop />
      {/* <SubpagesSidebar /> */}
    </>
  );
};
export default LayoutOne;
