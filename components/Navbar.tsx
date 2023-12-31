import { MouseContext } from "./../context/MouseContext";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useContext, useEffect, useState } from "react";
import cregital from '../public/public/Screenshot 2023-09-12 144059.png';

const Navbar: FC<any> = () => {
  // const { navbg } = useSelector((state: RootState) => state);

  const [scrollStatus, setScrollStatus] = useState<any>({
    scrollDirection: null,
    scrollPos: 0,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScrollDocument);

      return () => window.removeEventListener("scroll", handleScrollDocument);
    }
  }, []);

  function handleScrollDocument() {
    setScrollStatus((prev: any) => {
      // to get 'previous' value of state
      // const element = document.getElementById("section-1");
      // console.log(element);
      return {
        scrollDirection:
          document.body.getBoundingClientRect().top > prev.scrollPos
            ? "up"
            : "down",
        scrollPos: document.body.getBoundingClientRect().top,
      };
    });
  }

  // console.log(background, color);
  const { cursorChangeHandler } = useContext(MouseContext);
  return (
    <nav
      className={`navbar bg-body-transparent nav
      ${
        typeof window !== "undefined" &&
        window.scrollY >= 200 &&
        (scrollStatus.scrollDirection === "down" ? "nav--bg" : "false")
      }
      ${
        typeof window !== "undefined" && window.scrollY >= 80
          ? "nav--white"
          : "transparent"
      }
      `}
      onMouseEnter={() => cursorChangeHandler("")}
      onMouseLeave={() => cursorChangeHandler("")}
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          href="/"
          onMouseEnter={() => cursorChangeHandler("link-hover")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <Image
            src={cregital}
            alt="Cregital logo"
            className="img-fluid"
            loading="lazy"
            height={30}
          />
        </Link>
        <div
          className=""
          id="navbarSupportedContent"
          onMouseEnter={() => cursorChangeHandler("")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li className="" onMouseEnter={() =>
              cursorChangeHandler(
                typeof window !== "undefined" && window.scrollY >= 80
                ? ""
                : "link-hover-white"
              )
            }
            onMouseLeave={() => cursorChangeHandler("")}>
              <Link href='/menu' onMouseEnter={() => cursorChangeHandler("link-hover")}
                onMouseLeave={() =>
                  cursorChangeHandler(
                    typeof window !== "undefined" && window.scrollY >= 80
                    ? ""
                    : "link-hover-white"
                  )
                }>

                <span className="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="23px" height="15px" viewBox="0 0 23 15"><title>menu (2)</title><desc>Created with Sketch.</desc><g id="Brand" stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd"><g id="menu-(2)" stroke="#000000" strokeWidth="2.5"><line x1="0" y1="1.25" x2="22.5" y2="1.25" id="Path"></line><line x1="0" y1="13.75" x2="22.5" y2="13.75" id="Path"></line></g></g></svg>
                </span>
                <span className="ps-2" style={{fontWeight:"700", verticalAlign:"middle", textDecoration: 'none', color:"#000000"}}>MENU</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
