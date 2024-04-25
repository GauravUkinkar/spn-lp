import React from 'react'
import "../Styles/footer.scss"
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { Link } from 'react-router-dom';
function Footer(props) {
  return (
    <>
     <div className="footer-bottom-content-box parent">
        <div className="footer-bottom-content-box-container cont">
          <div className="footer-social-icons ">
            <span>
              <a href="https://www.facebook.com/SambhajiPatilBJP" target="_blank">
                <FaFacebookF />
              </a>
            </span>

            <span>
              <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fsambhajipatil77" target="_blank">
                <FaXTwitter />
              </a>
            </span>
            <span>
              <a
                href="https://www.youtube.com/SambhajiPatilNilangekar77"
                target="_blank"
              >
                <FaYoutube />
              </a>
            </span>
            <span>
              <a href="https://www.instagram.com/sambhajipatil77/-" target="_blank">
                <FaInstagram />
              </a>
            </span>
          </div>
          <div className="footer-copyright">
          <p className="bottom-text">
            
              Copyright©2024.All Rights Reserved | <a href="/">Sambhaji Patil Nilangekar</a> | Designed &
              Developed by{" "}
              <Link to="https://diwise.uk/" target="_blank">
                Diwise
              </Link>
            </p>
          </div>
        </div>
      </div>
     
    </>

  )
}

export default Footer
