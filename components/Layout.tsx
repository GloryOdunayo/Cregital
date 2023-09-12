import React, { FC, useContext } from "react";
import { MouseContext } from "../context/MouseContext";
import Footer from "./Footer";
// import Footer from "./Footer";
// import Navbar from "./Navbar";
// import { Inter } from "@next/font/google";
// const inter = Inter({ subsets: ["latin"] });

const Layout: FC<any> = ({ children }) => {
  const { cursorChangeHandler } = useContext(MouseContext);

  return (
    <div
      className=""
      onMouseEnter={() => cursorChangeHandler("")}
      onMouseLeave={() => cursorChangeHandler("")}
    >
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
