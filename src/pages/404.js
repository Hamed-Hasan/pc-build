import Image from "next/image";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <Image
        width={100}
        height={200}
        src="https://i.ibb.co/jf0MQft/not-found.webp"
        layout="responsive"
        alt="Laptop parts"
      />
    </div>
  );
};

export default NotFoundPage;
