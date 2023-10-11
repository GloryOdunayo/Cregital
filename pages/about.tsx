import Link from 'next/link';
import React, { FC, useContext }  from 'react'
import { MouseContext } from '../context/MouseContext';
import Navbar from '../components/Navbar';

const About:FC<any> = () => {
    const { cursorChangeHandler } = useContext(MouseContext);
  return (
    <div className="mx-auto">
        <div className="mx-auto" style={{ maxWidth:"1140px"}}>
            <Navbar/>
        </div>
        <div className="animate-slide-up">
            <div className="about-wrapper">
                <div className="about-wrapper__header text-center">
                    <h2>We&apos;re Cregital <br /> <span style={{color: '#DEDEDE'}}>/kree.ji.tl/</span></h2>
                    <p className='text-center col-10 col-md-8 mx-auto build pt-4'>
                    We are a digital agency passionate about using innovation, design, technology and strategy to build engaging websites, brands, and digital products.
                    </p>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img width="2560" height="1911" src="https://cregital.com/wp-content/uploads/2020/02/Cregital-about-collage-scaled-1.jpg" className="attachment-full size-full about-wrapper__header--image" alt="" loading="lazy" srcSet="https://cregital.com/wp-content/uploads/2020/02/Cregital-about-collage-scaled-1.jpg 2560w, https://cregital.com/wp-content/uploads/2020/02/Cregital-about-collage-scaled-1-300x224.jpg 300w, https://cregital.com/wp-content/uploads/2020/02/Cregital-about-collage-scaled-1-1024x764.jpg 1024w, https://cregital.com/wp-content/uploads/2020/02/Cregital-about-collage-scaled-1-768x573.jpg 768w, https://cregital.com/wp-content/uploads/2020/02/Cregital-about-collage-scaled-1-1536x1147.jpg 1536w, https://cregital.com/wp-content/uploads/2020/02/Cregital-about-collage-scaled-1-2048x1529.jpg 2048w"></img>
                </div>
                <div className="about-wrapper__story">
                    <h2 className='design'>Our story</h2>
                    <p className='identity'>Cregital was formed in 2015 by our Founder &amp; Design Lead <Link href="#" className="learn" onMouseEnter={() => cursorChangeHandler("link")} onMouseLeave={() => cursorChangeHandler("")}>Evans Akanno</Link>, with a belief that when passionate people work together and are empowered, amazing things can happen. In these few years, Cregital has made its mark in Nigeria as well as recognised internationally for excellent work and its impact on people, small and large businesses.</p>
                    <p className='identity'>Outside of our client work, we enjoy giving back to the community through the <Link href="#" className="learn" onMouseEnter={() => cursorChangeHandler("link")} onMouseLeave={() => cursorChangeHandler("")}>ARK</Link> – Acts of Random Kindness project, and helping creators showcase their work, and grow their business faster with easy to use tools and templates with <Link href="https://disha.ng" className="learn" onMouseEnter={() => cursorChangeHandler("link")} onMouseLeave={() => cursorChangeHandler("")}>Disha</Link>.</p>
                </div>
                <div className="text-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img width="2560" height="2082" src="https://cregital.com/wp-content/uploads/2020/02/cregital-about-collage-2-scaled-1.jpg" className="attachment-full size-full about-wrapper__header--image" alt="" loading="lazy" srcSet="https://cregital.com/wp-content/uploads/2020/02/cregital-about-collage-2-scaled-1.jpg 2560w, https://cregital.com/wp-content/uploads/2020/02/cregital-about-collage-2-scaled-1-300x244.jpg 300w, https://cregital.com/wp-content/uploads/2020/02/cregital-about-collage-2-scaled-1-1024x833.jpg 1024w, https://cregital.com/wp-content/uploads/2020/02/cregital-about-collage-2-scaled-1-768x625.jpg 768w, https://cregital.com/wp-content/uploads/2020/02/cregital-about-collage-2-scaled-1-1536x1249.jpg 1536w, https://cregital.com/wp-content/uploads/2020/02/cregital-about-collage-2-scaled-1-2048x1666.jpg 2048w" sizes="(max-width: 2560px) 100vw, 2560px"></img>
                </div>
            </div>
            <div className="about-wrapper__expertise">
                <div className="about-wrapper__expertise--header">
                    <h2 className='design'>Our expertise</h2>
                    <div className='py-5 my-3'>
                        <p className='identity'>We have been working on a variety of projects and across different industries across disciplines, making our work an appropriate, versatile and functional response to the unique needs of our clients. Our capabilities cover the following areas;</p>
                        <p className='identity'>Brand Identity<br />Product Strategy<br />User Experience Design<br />Iconography<br />Animation<br />Web Development<br />App Development<br />WordPress<br />Front end Development<br />Back end Development<br />E-commerce<br />Data &amp; Analytics</p>
                    </div>
                </div>
            </div>
            <div className="about-wrapper__expertise--header">
                    <h2 className='design'>Award Recognition</h2>
                    <div className='py-5 my-3'>
                        <p className='identity'>Cregital has been featured by many industry tastemakers, awards and publications. But they’re a good sign we’re going in the right direction. Here are the most noteworthy ones;</p>
                        <p className='identity'>2019. Forbes Africa – 30 under 30<br/>2018. Awwwards – Mobile Excellence<br/>2018. Awwwards – Honors (x2)<br/>2018. Nigeria Technology Awards&nbsp;<br/>2017. Nigeria Technology Awards&nbsp;<br/>2016. Nigeria Technology Awards&nbsp;<br/>2016. The Future Awards Africa&nbsp;<br/>2015. Awwwards – Honors</p>
                    </div>
                </div>
        </div>
        <div className="position" onMouseEnter={() => cursorChangeHandler("link-hover")}
          onMouseLeave={() => cursorChangeHandler("")}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://cregital.com/wp-content/uploads/2020/02/contact-icon-black.svg" className="size" alt="contact-icon" loading="lazy"/>
          </div>
    </div>
  )
}

export default About;