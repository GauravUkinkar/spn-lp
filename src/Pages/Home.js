import React, { useState, useEffect } from "react";

import "../Styles/home.scss";
import { Link } from "react-router-dom";
import Contactform from "./Contactform";
import { IoMdClose } from "react-icons/io";

import { GrInstagram } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FiYoutube } from "react-icons/fi";

function Home(props) {
  const [close, setClsoe] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setClsoe(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {props.data.map((data) => {
        return (
          <>
            {/* popup section */}
            {close && (
              <div className="pop">
                <div className="main-popup">
                  <h2>Reach Our Social Media</h2>
                  <div className="close" onClick={() => setClsoe(false)}>
                    <IoMdClose />
                  </div>
                  <div className="icons-list">
                    <Link
                      to="https://www.instagram.com/sambhajipatil77/"
                      target="_blank"
                      className="icons"
                    >
                      <GrInstagram />
                    </Link>
                    <Link
                      to="https://www.facebook.com/SambhajiPatilBJP"
                      target="_blank"
                      className="icons"
                    >
                      <FaFacebookF />
                    </Link>
                    <Link
                      to="https://twitter.com/sambhajipatil77"
                      target="_blank"
                      className="icons"
                    >
                      <BsTwitterX />
                    </Link>
                    <Link
                      to="https://www.youtube.com/SambhajiPatilNilangekar77"
                      target="_blank"
                      className="icons"
                    >
                      <FiYoutube />
                    </Link>
                  </div>
                </div>
              </div>
            )}
            {/* hero section starts here */}

            <div className="hero parent ">
              <div className="overlay bg-img-cover"></div>
              <div className="cont hero-cont">
                <h1 onClick={() => setClsoe(true)}>{data.hero_title}</h1>
                <Link className="btn">{data.hero_cta}</Link>
              </div>
            </div>

            <div className="parent about">
              <div className="cont about-cont">
                <div className="left">
                  <div className="box bg-img-cover"></div>
                </div>
                <div className="right">
                  <h2>{data.about_title}</h2>
                  <p>{data.about_desc}</p>
                  <button className="btn"> {data.about_cta}</button>
                </div>
              </div>
            </div>

            <div className="parent cu">
              <div className="cont cu-cont">
                <div className="left">
                  <div className="box bg-img-cover"></div>
                </div>
                <div className="right">
                  <h2>{data.cu_title}</h2>
                  <p>{data.cu_desc}</p>
                  <button className="btn"> {data.cu_cta}</button>
                </div>
              </div>
            </div>

            <div className="parent cuf">
              <div className="cont cuf-cont">
                <h2>{data.cuf_title}</h2>

                <div className="cuf-box-container">
                  <div className="cuf-box">
                    <div className="overlay"></div>
                    <div className="cuf-img img1 bg-img-cover"></div>
                    <h4>{data.cuf_1}</h4>
                  </div>

                  <div className="cuf-box">
                    <div className="overlay"></div>
                    <div className="cuf-img img2 bg-img-cover"></div>
                    <h4>{data.cuf_2}</h4>
                  </div>

                  <div className="cuf-box">
                    <div className="overlay"></div>
                    <div className="cuf-img img3 bg-img-cover"></div>
                    <h4>{data.cuf_3}</h4>
                  </div>

                  <div className="cuf-box">
                    <div className="overlay"></div>
                    <div className="cuf-img img4 bg-img-cover"></div>
                    <h4>{data.cuf_4}</h4>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}

      <Contactform data={props.data} />
    </>
  );
}

export default Home;
