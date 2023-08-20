// import RootLayout from "@/components/Layouts/RootLayout";

import Banner from "@/components/UI/Banner";
import Card from "@/components/UI/Card";
import { useAppDispatch } from "@/redux/hooks";
import { avarageRating } from "@/redux/product/productSlice";
import Link from "next/link";

const HomePage = ({ allProducts }) => {
  const dispatch = useAppDispatch();
  dispatch(avarageRating(allProducts?.data));
  // const randomProduct = Math.floor(Math.random() * allProducts?.data?.length);
  // console.log(randomProduct);
  return (
    <div>
      <Banner />
      <div className="mt-8">
        <h2 className="text-center text-4xl font-bold my-4">
          Feature Products
        </h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
        {allProducts?.data?.slice(0, 6).map((product) => (
          <Card key={product._id} product={product} />
        ))}
      </div>
      <div className="container mx-auto my-5">
        <div className="flex justify-center">
          <ul className="menu menu-vertical lg:menu-horizontal bg-blue-600 rounded-box text-white">
            <li>
              <Link href="/category/processor">CPU / Processor</Link>
            </li>
            <li>
              <Link href="/category/motherboard">Motherboard</Link>
            </li>
            <li>
              <Link href="/category/ram">RAM</Link>
            </li>
            <li>
              <Link href="/category/supply">Power Supply Unit</Link>
            </li>
            <li>
              <Link href="/category/storage">Storage Device</Link>
            </li>
            <li>
              <Link href="/category/monitor">Monitor</Link>
            </li>
            <li>
              <Link href="/category/others">Others</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const res = await fetch("https://pc-cloud-server.vercel.app/products");
  const data = await res.json();
  return {
    props: {
      allProducts: data,
    },
    revalidate: 10,
  };
};

// HomePage.getLayout = function getLayout(page) {
//   return <RootLayout>{page}</RootLayout>;
// };
