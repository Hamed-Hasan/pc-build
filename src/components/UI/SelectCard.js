import { addToCart } from "@/redux/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import Image from "next/image";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

const SelectCard = ({ products }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { img, name, category, status, price, rating } = products;
  const handleSelect = (product) => {
    dispatch(addToCart(product));
    toast.success(`Selected ${product?.name}`);
    router.push("/pcbuilder");
  };
  return (
    <div>
      <div className="mb-5">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 px-5 bg-slate-300 p-4 rounded-lg">
          <div>
            <Image width={100} height={200} src={img} alt="Laptop parts" />
            <p>{name}</p>
          </div>
          <div>
            <p className="uppercase">{category}</p>
            <p> &#2547; {price}</p>
            <p>{status}</p>
            <p>Rating: {rating}</p>
          </div>
          <button
            onClick={() => handleSelect(products)}
            className="btn btn-outline"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectCard;
