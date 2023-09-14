/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import React, { FC, useContext } from "react";
import { MouseContext } from '../context/MouseContext'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  const { cursorChangeHandler } = useContext(MouseContext);
  return (
    <div className={styles.container}>
      <Head>
        <title>Cregital</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <div className="wrapper" style={{height:"100vh"}}>
          <div className="">
            <div className="design col-lg-7 col-md-10 text-center">
              Cregital designs & builds digital experiences
            </div>
            <div className="text-center col-md-7 mx-auto build">We design, build and launch websites and products that are simple, beautiful and helps businesses grow.</div>
            </div>
        </div>
        <div className="">
          <div className="first container mt-5">
            <div onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")} className="card-div">
              {/* <div className="img-card" style={{background: `url(https://cregital.com/wp-content/uploads/2021/06/FBN-website-1-scaled.jpg)`}}></div> */}
              <img src='https://cregital.com/wp-content/uploads/2021/06/FBN-website-1-scaled.jpg' alt='First bank image' className='img-card'/>
              <div className="mt-4 card-text">First Bank</div>
              <p className='brand'>Website, UI/UX</p>
            </div>
            <div onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}  className="card-div">
              <img className="img-card" src='https://cregital.com/wp-content/uploads/2020/02/Disha-Pages-scaled-1.jpg' alt='Disha page image'/>
              <div className="mt-4 card-text">Disha Pages</div>
              <p className='brand'>Website, UI/UX, Web app</p>
            </div>
          </div>
          <div className="first container mt-5">
            <div className="card-div" onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")} >
                <img className="img-card" src='https://cregital.com/wp-content/uploads/2020/04/Hash-Vest.png' alt='Hash image'/>
                <div className="mt-4 card-text">Hash</div>
                <p className='brand'>Branding, Website</p>
            </div>
            <div className="" onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}>
              <div className="img-cards" style={{background: `url(https://cregital.com/wp-content/uploads/2020/03/coronation-banking-home-2.jpg)`}}></div>
              <div className="mt-4 card-text">Coronation Bank</div>
              <p className='brand'>Website</p>
            </div>
          </div>
          <div className="first container mt-5">
            <div className="card-div" onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")} >
                <div className="img-card" style={{background: `url(https://cregital.com/wp-content/uploads/2020/02/Cregital-TEF.jpg)`, backgroundSize:"cover", backgroundPosition:"center"}}></div>
                <div className="mt-4 card-text">Tony Elumelu Foundation</div>
                <p className='brand'>Website</p>
            </div>
            <div className="" onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}>
              <div className="img-cards" style={{background: `url(https://cregital.com/wp-content/uploads/2020/03/heirs-holdings.jpg)`, backgroundSize:"cover", backgroundPosition:"center"}}></div>
              
              <div className="mt-4 card-text">Heirs Holdings</div>
              <p className='brand'>Website</p>
            </div>
          </div>
          <div className="first container mt-5">
            <div className="" onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}>
              <div className="img-cards" style={{background: `url(https://cregital.com/wp-content/uploads/2020/02/ARK-Acts-of-Random-Kindness.svg)`, backgroundSize:"cover", backgroundPosition:"center"}}></div>
              <div className="mt-4 card-text">Ark</div>
              <p className='brand'>Branding, Website, UI/UX, Web app</p>
            </div>
            <div className="card-div" onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")} >
                <div className="img-card" style={{background: `url(https://cregital.com/wp-content/uploads/2016/02/Zenith-HQ.jpg)`, backgroundSize:"cover", backgroundPosition:"center"}}></div>
                <div className="mt-4 card-text">Zenith Bank</div>
                <p className='brand'>Website</p>
            </div>
          </div>
        </div>
        <div className="position" onMouseEnter={() => cursorChangeHandler("link-hover")}
          onMouseLeave={() => cursorChangeHandler("")}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://cregital.com/wp-content/uploads/2020/02/contact-icon-black.svg" className="size" alt="contact-icon" loading="lazy"/>
        {/* <Link href='' onMouseEnter={() => cursorChangeHandler("link-hover")}
          onMouseLeave={() => cursorChangeHandler("")}>
        </Link> */}
        </div>
        <div className="container">
          <div className="design">Who we are</div>
          <p className='identity'>We are designers, developers, writers, thinkers, and problem solvers. Small enough to be simple and fast, but big enough to deliver your project scope at the pace you need. You can learn more <Link href="/" className='learn' style={{ position: "relative", zIndex: "9" }} onMouseEnter={() => cursorChangeHandler("link-hover")} onMouseLeave={() => cursorChangeHandler("")}>about us</Link>, check the latest on <Link href="/" className='learn' style={{ position: "relative", zIndex: "9" }} onMouseEnter={() => cursorChangeHandler("link-hover")} onMouseLeave={() => cursorChangeHandler("")}>Instagram</Link> and <Link href="/" className='learn' style={{ position: "relative", zIndex: "9" }} onMouseEnter={() => cursorChangeHandler("link-hover")} onMouseLeave={() => cursorChangeHandler("")}>Twitter</Link> or apply to <Link href="/" className='learn' style={{ position: "relative", zIndex: "9" }} onMouseEnter={() => cursorChangeHandler("link-hover")} onMouseLeave={() => cursorChangeHandler("")}>join our team</Link>.</p>
        </div>
        <div className="container my-5 py-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
          <img width="100%" height="80%" src="https://cregital.com/wp-content/uploads/2020/02/Cregital-About-us-Masonry2-scaled-1.jpg" className="attachment-full size-full" alt="" loading="lazy" srcSet="https://cregital.com/wp-content/uploads/2020/02/Cregital-About-us-Masonry2-scaled-1.jpg 2560w, https://cregital.com/wp-content/uploads/2020/02/Cregital-About-us-Masonry2-scaled-1-300x225.jpg 300w, https://cregital.com/wp-content/uploads/2020/02/Cregital-About-us-Masonry2-scaled-1-1024x767.jpg 1024w, https://cregital.com/wp-content/uploads/2020/02/Cregital-About-us-Masonry2-scaled-1-768x575.jpg 768w, https://cregital.com/wp-content/uploads/2020/02/Cregital-About-us-Masonry2-scaled-1-1536x1151.jpg 1536w, https://cregital.com/wp-content/uploads/2020/02/Cregital-About-us-Masonry2-scaled-1-2048x1534.jpg 2048w" sizes="(max-width: 2560px) 100vw, 2560px" />
        </div>
        <Footer />
      </main>
    </div>
  )
}

export default Home
