import React from "react";
import "./footer.css";
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <>
      <ScrollToTop color="#474EB0" smooth top="20" />;
      <footer>
        <div className="container">
          <div className="row">
            <div>
              <div className="row">
                <div className="col-6 col-lg-3">
                  <h2>company</h2>
                  <ul>
                    <li>
                      <a href="/">IT academy</a>
                    </li>
                    <li>
                      <a href="/">IT academy</a>
                    </li>
                    <li>
                      <a href="/">IT academy</a>
                    </li>
                    <li>
                      <a href="/">IT academy</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-lg-3">
                  <h2>support</h2>
                  <ul>
                    <li>
                      <a href="/">IT academy</a>
                    </li>
                    <li>
                      <a href="/">IT academy</a>
                    </li>
                    <li>
                      <a href="/">IT academy</a>
                    </li>
                    <li>
                      <a href="/">IT academy</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-lg-3">
                  <h2>servis</h2>
                  <ul>
                    <li>
                      <a href="/">IT academy</a>
                    </li>
                    <li>
                      <a href="/">IT academy</a>
                    </li>
                    <li>
                      <a href="/">IT academy</a>
                    </li>
                    <li>
                      <a href="/">IT academy</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-lg-3">
                  <h2>follow us</h2>
                  <div className="social">
                    <div>
                      <a href="https://www.facebook.com/">
                        <p>facebook</p>
                        <i class="fab fa-facebook-f fontawesome-style"></i>
                      </a>
                    </div>
                    <div>
                      <a href="https://www.instagram.com/">
                        <p>instagram</p>
                        <i class="fab fa-instagram fontawesome-style"></i>
                      </a>
                    </div>
                    <div>
                      <a href="https://www.youtube.com/">
                        <p>youtube</p>
                        <i class="fab fa-youtube fontawesome-style"></i>
                      </a>
                    </div>
                    <div>
                      <a href="https://www.twitter.com/">
                        <p>twitter</p>
                        <i class="fab fa-twitter fontawesome-style"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-5">
                <p>library project & 2022 📚</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
