import React from "react";
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="h-[100vh]">{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;
