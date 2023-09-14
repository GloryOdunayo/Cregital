import Link from 'next/link';
import React, { FC, useContext, useEffect, useState } from "react";
import { MouseContext } from '../context/MouseContext';

const Menu:FC<any> = () => {
    const { cursorChangeHandler } = useContext(MouseContext);
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
  return (
    <>
    <div className="" style={{backgroundColor:"black", minHeight:"100vh"}}>
      <nav
      className={`navbar navbar-expand-md bg-body-transparent nav
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
          <img src="https://cregital.com/wp-content/uploads/2020/02/Cregital_.svg" className="attachment-full size-full" alt="Cregital Logo" loading="lazy"/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
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
              <Link href='/' onMouseEnter={() => cursorChangeHandler("link")}
                onMouseLeave={() =>
                  cursorChangeHandler(
                    typeof window !== "undefined" && window.scrollY >= 80
                    ? ""
                    : "link-hover-white"
                  )
                }>

                <span className="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="square" stroke-linejoin="arcs"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </span>
                <span className="ps-2" style={{fontWeight:"700", verticalAlign:"middle", textDecoration: 'none', color:"#fff"}}>CLOSE</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      </nav>
        <div className="wrapper" style={{height:"100vh"}}>
            <div className="animate-slide-up container">
                {/* <p>Your Text Here</p> */}
                <p className="text py-3">
                Learn more&nbsp;
                <Link href="" className="learn" onMouseEnter={() => cursorChangeHandler("link")} onMouseLeave={() => cursorChangeHandler("")}>about us</Link>, check out&nbsp;
                <Link href="" className="learn" onMouseEnter={() => cursorChangeHandler("link")} onMouseLeave={() => cursorChangeHandler("")}>our work</Link>, the latest on&nbsp;
                <Link href="" className="learn" onMouseEnter={() => cursorChangeHandler("link")} onMouseLeave={() => cursorChangeHandler("")}>instagram</Link>&nbsp;and&nbsp;
                <Link href="/" className="learn" onMouseEnter={() => cursorChangeHandler("link")} onMouseLeave={() => cursorChangeHandler("")}>contact us</Link><span style={{color: '#4d4d4d'}}></span>
            </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Menu;