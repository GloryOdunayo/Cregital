import { MouseContext } from "./../context/MouseContext";
import Link from "next/link";
import React, { useContext } from "react";

const Footer = () => {
  const { cursorChangeHandler } = useContext(MouseContext);
  let year = new Date().getFullYear();
  return (
    <footer className="footer pt-5">
      <div className="container-fluid py-lg-2 ">
        <div className="header">
          <div className="header__title">
            Get in touch
          </div>
          <p className="text py-3">
          Contact us to find out how we can help you. If it’s easier you can email us at 
            <Link href="" onMouseEnter={() => cursorChangeHandler("link-hover")} onMouseLeave={() => cursorChangeHandler("")}>hello@cregital.com</Link>
            Download the&nbsp;<Link href="/" onMouseEnter={() => cursorChangeHandler("link-hover")} onMouseLeave={() => cursorChangeHandler("")}>Cregital brochure.pdf </Link><span style={{color: '#4d4d4d'}}>(5mb)</span>
          </p>
        </div>
        <div className="row justify-content-between">
          <div className="col-md-4">
            <p className="">© {year} Cregital Design Agency</p>
          </div>                     
          <div className="col-md-3">
            <div className="d-flex align-items-center justify-content-between">
              <p className="" onMouseEnter={() => cursorChangeHandler("link-hover")} onMouseLeave={() => cursorChangeHandler("")}>Instagram</p>
              <p className="" onMouseEnter={() => cursorChangeHandler("link-hover")} onMouseLeave={() => cursorChangeHandler("")}>Twitter</p>
              <p className="" onMouseEnter={() => cursorChangeHandler("link-hover")} onMouseLeave={() => cursorChangeHandler("")}>LinkedIn</p>
            </div>
          </div>
      </div>
        {/* <div className="footer__body pt-4">
          <div className="row my-lg-2 pt-3 pt-lg-4">
            <div className="col-lg-4 col-md-6 my-3  pe-lg-3 pe-xl-4 ">
              <h6 className="footer__body--subhead">Download Prospectus</h6>
              <p className="footer__body--text mb-0">
                This is our promise to you, and the company you lead. Get it{" "}
                <Link
                  href="/prospectus.pdf"
                  className="footer--link"
                  download
                  onMouseEnter={() => cursorChangeHandler("link-hover")}
                  onMouseLeave={() => cursorChangeHandler("")}
                >
                  here.
                </Link>
              </p>
            </div>
            <div className="col-lg-4 col-md-6 my-3 pe-lg-3 pe-xl-4">
              <h6 className="footer__body--subhead">Blog</h6>

              <p className="footer__body--text mb-0">
                Explore{" "}
                <Link
                  href="/blog"
                  className="footer--link"
                  onMouseEnter={() => cursorChangeHandler("link-hover")}
                  onMouseLeave={() => cursorChangeHandler("")}
                >
                  thought-provoking
                </Link>{" "}
                muses on building timeless brands.
              </p>
            </div>{" "}
            <div className="col-lg-4 col-md-6 my-3 pe-lg-3">
              <h6 className="footer__body--subhead">Socials</h6>

              <p className="footer__body--text mb-0">
                Let’s connect, you can find us on: <br />
                <Link
                  href="https://www.linkedin.com/company/qeola/?originalSubdomain=ng"
                  target="_blank"
                  rel="referrer"
                  className="footer--link"
                  onMouseEnter={() => cursorChangeHandler("link-hover")}
                  onMouseLeave={() => cursorChangeHandler("")}
                >
                  LinkedIn
                </Link>
                ,{" "}
                <Link
                  href="https://twitter.com/officialqeola"
                  target="_blank"
                  rel="referrer"
                  className="footer--link"
                  onMouseEnter={() => cursorChangeHandler("link-hover")}
                  onMouseLeave={() => cursorChangeHandler("")}
                >
                  Twitter
                </Link>
                ,{" "}
                <Link
                  href="https://www.instagram.com/officialqeola/?hl=en"
                  target="_blank"
                  rel="referrer"
                  className="footer--link"
                  onMouseEnter={() => cursorChangeHandler("link-hover")}
                  onMouseLeave={() => cursorChangeHandler("")}
                >
                  Instagram
                </Link>
                ,{" "}
                <Link
                  href="https://web.facebook.com/officialqeola/?_rdc=1&_rdr"
                  target="_blank"
                  rel="referrer"
                  className="footer--link"
                  onMouseEnter={() => cursorChangeHandler("link-hover")}
                  onMouseLeave={() => cursorChangeHandler("")}
                >
                  Facebook
                </Link>
                ,{" "}
                <Link
                  href="https://www.behance.net/qeola"
                  target="_blank"
                  rel="referrer"
                  className="footer--link"
                  onMouseEnter={() => cursorChangeHandler("link-hover")}
                  onMouseLeave={() => cursorChangeHandler("")}
                >
                  Behance
                </Link>
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
