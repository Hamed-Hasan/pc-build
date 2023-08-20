import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import React from "react";

const ProductDetailPage = ({ product }) => {
  const { sumRating } = useAppSelector((state) => state.products);
  const {
    img,
    name,
    category,
    status,
    price,
    keyFeature,
    rating,
    description,
    reviews,
  } = product?.data;
  return (
    <div className="container mx-auto">
      <div className="container grid grid-cols-1 md:grid-cols-2 items-center gap-5 mx-auto">
        <div>
          <Image
            width={500}
            height={600}
            layout="responsive"
            src={img}
            alt="Laptop parts"
          />
        </div>
        <div>
          <h2 className="text-4xl mb-8">{name}</h2>
          <div className="flex items-center justify-between mt-2">
            <p className="text-xl">{category}</p>
            <p className=" btn btn-success btn-xs">{status}</p>
          </div>
          <p className="text-xl font-bold mt-3">&#2547; {price}</p>
          <div>
            <p className="text-2xl font-bold mt-5">Key Features</p>
            <p className="mt-2">{keyFeature}</p>
          </div>
          <h2 className="font-bold text-lg mt-4">Rating: {rating}/5</h2>
          <h2>Avarage Rating: {sumRating}/5</h2>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold mt-5 border-b border-slate-400">
          Description
        </h2>
        <p className="my-4 text-justify">{description}</p>
      </div>
      <h2 className="text-2xl font-bold mt-5 border-b border-slate-400">
        Review
      </h2>
      {reviews?.map((review, index) => (
        <div key={index} className="my-5">
          <p className="text-blue-500 border-b inline-block">{review.name}</p>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductDetailPage;

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://pc-cloud-server.vercel.app/product/${params.productId}`
  );
  const data = await res.json();

  return {
    props: {
      product: data,
    },
  };
};
