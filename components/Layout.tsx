import React, { FC, useContext } from "react";
import { MouseContext } from "../context/MouseContext";
import Footer from "./Footer";

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
