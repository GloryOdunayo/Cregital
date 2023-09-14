import { MouseContext } from "./../context/MouseContext";
import Link from "next/link";
import React, { useContext } from "react";

const Footer = () => {
  const { cursorChangeHandler } = useContext(MouseContext);
  let year = new Date().getFullYear();
  return (
    <footer className="footer pt-5">
      <div className="container-fluid">
        <div className="header">
          <div className="header__title">
            Get in touch
          </div>
          <p className="text py-3">
            Contact us to find out how we can help you. If it’s easier you can email us at&nbsp;
            <Link href="" className="learn" onMouseEnter={() => cursorChangeHandler("link-hover")} onMouseLeave={() => cursorChangeHandler("")}>hello@cregital.com.</Link>
            &nbsp;Download the&nbsp;<Link href="/" className="learn" onMouseEnter={() => cursorChangeHandler("link-hover")} onMouseLeave={() => cursorChangeHandler("")}>Cregital brochure.pdf</Link><span style={{color: '#4d4d4d'}}>&nbsp;(5mb)</span>
          </p>
        </div>
        <div className="footer">
          <div className="col-md-4">
            <p className="">© {year} Cregital Design Agency</p>
          </div>                     
          <div className="col-md-3 socials">
            <div className="d-flex align-items-cente justify-content-around">
              <p className="" onMouseEnter={() => cursorChangeHandler("link-hover")} onMouseLeave={() => cursorChangeHandler("")}>Instagram</p>
              <p className="" onMouseEnter={() => cursorChangeHandler("link-hover")} onMouseLeave={() => cursorChangeHandler("")}>Twitter</p>
              <p className="" onMouseEnter={() => cursorChangeHandler("link-hover")} onMouseLeave={() => cursorChangeHandler("")}>LinkedIn</p>
            </div>
          </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
