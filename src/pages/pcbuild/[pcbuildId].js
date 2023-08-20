import SelectCard from "@/components/UI/SelectCard";
import { useGetAllProductsQuery } from "@/redux/api/apiSlice";
import { useRouter } from "next/router";

const PcbuilderPage = () => {
  const router = useRouter();
  const { data } = useGetAllProductsQuery();
  const spacificPageData = data?.data?.filter(
    (products) => products?.category === router.query.pcbuildId
  );
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold border-b border-slate-400 uppercase my-4">
        Select {router.query.pcbuildId}
      </h2>
      <div className="container mx-auto  my-10">
        {spacificPageData?.map((spacific) => (
          <SelectCard key={spacific._id} products={spacific} />
        ))}
      </div>
    </div>
  );
};

export default PcbuilderPage;
