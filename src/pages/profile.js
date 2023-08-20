/* eslint-disable react-hooks/rules-of-hooks */
import { BiUserCircle } from "react-icons/bi";
import { useSession } from "next-auth/react";

const profile = () => {
  const { data: session } = useSession();
  return (
    <div className="h-[100vh]">
      <div className="text-center">
        <div>
          <div className="text-7xl mt-3 flex justify-center">
            <BiUserCircle />
          </div>

          <div>
            <h2>{session?.user?.name}</h2>
            <p>{session?.user?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default profile;
