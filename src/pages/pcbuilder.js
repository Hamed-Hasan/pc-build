/* eslint-disable react-hooks/rules-of-hooks */
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { toast } from "react-hot-toast";

const pcbuilder = () => {
  const { products } = useAppSelector((state) => state.product);
  const processor = products?.filter(
    (processor) => processor?.category === "processor"
  );
  const motherboard = products?.filter(
    (motherboard) => motherboard?.category === "motherboard"
  );
  const ram = products?.filter((ram) => ram?.category === "ram");
  const supply = products?.filter((supply) => supply?.category === "supply");
  const storage = products?.filter(
    (storage) => storage?.category === "storage"
  );
  const monitor = products?.filter(
    (monitor) => monitor?.category === "monitor"
  );
  const others = products?.filter((others) => others?.category === "others");
  const handleSubmit = () => {
    toast.success("Pc Build Successfully");
  };
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold border-b border-slate-400 uppercase my-4">
        PC Build
      </h2>
      <div>
        <h4 className="text-center font-bold text-xl bg-slate-500 rounded-lg text-white">
          Component select
        </h4>
      </div>
      <div className="w-[50%] mx-auto bg-slate-100 p-5 rounded-md">
        <div className="flex justify-between items-center bg-white p-4 rounded-md border-b border-slate-500 mb-4">
          <h2 className="font-bold">CPU/Processor</h2>
          <Link href="/pcbuild/processor">
            {processor?.length === 1 ? (
              <button className="btn btn-sm btn-outline btn-accent hidden">
                Choose
              </button>
            ) : (
              <button className="btn btn-sm btn-outline btn-accent">
                Choose
              </button>
            )}
          </Link>
        </div>
        {processor?.map((cpu) => (
          <div key={cpu._id} className="ml-5 flex items-center gap-3">
            <Image width={50} height={60} src={cpu?.img} alt="Laptop parts" />
            <p>{cpu?.name}</p>
          </div>
        ))}

        <div className="flex justify-between items-center bg-white p-4 rounded-md border-b border-slate-500 mb-4">
          <h2 className="font-bold">Motherboard</h2>
          <Link href="/pcbuild/motherboard">
            {motherboard?.length === 1 ? (
              <button className="btn btn-sm btn-outline btn-accent hidden">
                Choose
              </button>
            ) : (
              <button className="btn btn-sm btn-outline btn-accent">
                Choose
              </button>
            )}
          </Link>
        </div>
        {motherboard?.map((cpu) => (
          <div key={cpu._id} className="ml-5 flex items-center gap-3">
            <Image width={50} height={60} src={cpu?.img} alt="Laptop parts" />
            <p>{cpu?.name}</p>
          </div>
        ))}
        <div className="flex justify-between items-center bg-white p-4 rounded-md border-b border-slate-500 mb-4">
          <h2 className="font-bold">Ram</h2>
          <Link href="/pcbuild/ram">
            {ram?.length === 1 ? (
              <button className="btn btn-sm btn-outline btn-accent hidden">
                Choose
              </button>
            ) : (
              <button className="btn btn-sm btn-outline btn-accent">
                Choose
              </button>
            )}
          </Link>
        </div>
        {ram?.map((ram) => (
          <div key={ram._id} className="ml-5 flex items-center gap-3">
            <Image width={50} height={60} src={ram?.img} alt="Laptop parts" />
            <p>{ram?.name}</p>
          </div>
        ))}
        <div className="flex justify-between items-center bg-white p-4 rounded-md border-b border-slate-500 mb-4">
          <h2 className="font-bold">Power supply unit</h2>
          <Link href="/pcbuild/supply">
            {supply?.length === 1 ? (
              <button className="btn btn-sm btn-outline btn-accent hidden">
                Choose
              </button>
            ) : (
              <button className="btn btn-sm btn-outline btn-accent">
                Choose
              </button>
            )}
          </Link>
        </div>
        {supply?.map((item) => (
          <div key={item._id} className="ml-5 flex items-center gap-3">
            <Image width={50} height={60} src={item?.img} alt="Laptop parts" />
            <p>{item?.name}</p>
          </div>
        ))}
        <div className="flex justify-between items-center bg-white p-4 rounded-md border-b border-slate-500 mb-4">
          <h2 className="font-bold">Storage Device</h2>
          <Link href="/pcbuild/storage">
            {storage?.length === 1 ? (
              <button className="btn btn-sm btn-outline btn-accent hidden">
                Choose
              </button>
            ) : (
              <button className="btn btn-sm btn-outline btn-accent">
                Choose
              </button>
            )}
          </Link>
        </div>
        {storage?.map((item) => (
          <div key={item._id} className="ml-5 flex items-center gap-3">
            <Image width={50} height={60} src={item?.img} alt="Laptop parts" />
            <p>{item?.name}</p>
          </div>
        ))}
        <div className="flex justify-between items-center bg-white p-4 rounded-md border-b border-slate-500 mb-4">
          <h2 className="font-bold">Monitor</h2>
          <Link href="/pcbuild/monitor">
            {monitor?.length === 1 ? (
              <button className="btn btn-sm btn-outline btn-accent hidden">
                Choose
              </button>
            ) : (
              <button className="btn btn-sm btn-outline btn-accent">
                Choose
              </button>
            )}
          </Link>
        </div>
        {monitor?.map((item) => (
          <div key={item._id} className="ml-5 flex items-center gap-3">
            <Image width={50} height={60} src={item?.img} alt="Laptop parts" />
            <p>{item?.name}</p>
          </div>
        ))}
        <div className="flex justify-between items-center bg-white p-4 rounded-md border-b border-slate-500 mb-4">
          <h2 className="font-bold">Others</h2>
          <Link href="/pcbuild/others">
            {others?.length === 1 ? (
              <button className="btn btn-sm btn-outline btn-accent hidden">
                Choose
              </button>
            ) : (
              <button className="btn btn-sm btn-outline btn-accent">
                Choose
              </button>
            )}
          </Link>
        </div>
        {others?.map((item) => (
          <div key={item._id} className="ml-5 flex items-center gap-3">
            <Image width={50} height={60} src={item?.img} alt="Laptop parts" />
            <p>{item?.name}</p>
          </div>
        ))}
        {products.length === 7 ? (
          <button
            onClick={handleSubmit}
            className="btn btn-primary w-full mt-8"
          >
            Complete Build
          </button>
        ) : (
          <button className="btn btn-primary w-full mt-8" disabled>
            Complete Build
          </button>
        )}
      </div>
    </div>
  );
};

export default pcbuilder;
