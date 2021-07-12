import Link from "next/link";
import { useRouter } from "next/router";
// import { withSession } from "../middlewares/session";

import Banners from "../components/shop/Banners";
import LayoutOne from "../components/layouts/LayoutOne";
import ShopLayout from "../components/shop/ShopLayout";
import useProductData from "../common/useProductData";

const Home = ({ products }) => {
  const router = useRouter();

  const onLogout = async (e) => {
    e.preventDefault();

    try {
      const result = await fetch("/api/logout", {
        method: "POST",
      });
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <LayoutOne title="Stora">
        <Banners />
        <ShopLayout
          fiveColumn
          shopSidebarResponsive={{ xs: 24, lg: 4 }}
          shopContentResponsive={{ xs: 24, lg: 20 }}
          productResponsive={{ xs: 12, sm: 8, md: 6 }}
          productPerPage={15}
          products={products}
          // data={[...data]}
        />
      </LayoutOne>
    </>
  );
};
export default Home;

export async function getServerSideProps() {
  // Fetch data from external API
  const oauth = new URLSearchParams({
    consumer_key: "ck_a8506574f7e45478a231fd5b44ae04e4ab8124dd",
    consumer_secret: "cs_3ee1fae59534719e4dda214ffa5ca0c64f6cba04",
  });
  const res = await fetch(
    `https://beeminesapi-ml.stackstaging.com/wp-json/wc/v3/products?${oauth.toString()}`
  );
  const products = await res.json();
  // console.log(`i am from line 55 of index.js, ${products}`);
  // Pass data to the page via props
  return { props: { products } };
}
