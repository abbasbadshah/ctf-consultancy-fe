import { hasClassProps } from "@utils/helpers";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FooterLayoutOne = ({ className, logo, socialClass }) => {
  const [copyrightText, setCopyrightText] = useState("");
  useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    setCopyrightText(
      `© Copyright ${year}, All Rights Reserved by CTF Consultancy`
    );
  }, []);

  return (
    <div className={`footer${hasClassProps(className)}`}>
      <div className="container">
        <div className="row row--footer-main">
          <div className="col-md-8 col-lg-5 col-xl-5 col-xxl-4">
            <div className="footer__content-block">
              <div className="footer__content-text">
                <div className="footer-brand">
                  <img src={`/image/${logo}`} alt="image alt" />
                </div>
                <p>
                  We are strategic & creative digital agency who are focused on
                  user experience, mobile, social, data gathering and
                  promotional offerings.
                </p>
              </div>

              <a href="mailto:coffee@ctmail.com" className="footer-link">
                coffee@ctmail.com
              </a>
              <br />
              <ul
                className={`list-social${socialClass ? ` ${socialClass}` : ""}`}
              >
                <li>
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className=" col-lg-7 col-xl-6 col-xxl-7 offset-xl-1">
            <div className="row row--list-block">
              <div className="col-auto col-md-4 col-lg-auto col-xl-auto col-xxl-auto">
                <h3 className="footer-title">Primary Pages</h3>
                <ul className="footer-list">
                  <li>
                    {/*<a href="#">Home</a>*/}
                    <Link to={"/home"}>Home</Link>
                  </li>
                  <li>
                    <Link to={"/about"}>About Us</Link>
                  </li>
                  <li>
                    <Link to={"/service"}>Services</Link>
                  </li>
                  <li>
                    <Link to={"/portfolio"}>Portfolio</Link>
                  </li>
                  <li>
                    <Link to={"/contact"}>Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="col-auto col-md-4 col-lg-auto col-xl-auto col-xxl-auto">
                <h3 className="footer-title">Utility pages</h3>
                <ul className="footer-list">
                  <li>
                    <Link to={"/team"}>Team</Link>
                  </li>
                  <li>
                    <Link to={"/career"}>Career</Link>
                  </li>
                  <li>
                    <Link to={"/faq"}>FAQ's</Link>
                  </li>
                  <li>
                    <Link to={"/portfolio"}>Portfolio</Link>
                  </li>
                  <li>
                    <Link to={"/blog"}>Blogs</Link>
                  </li>
                </ul>
              </div>
              <div className="col-auto col-md-4 col-lg-auto col-xl-auto col-xxl-auto">
                <h3 className="footer-title">Pricing</h3>
                <ul className="footer-list">
                  <li>
                    <Link to={"/web-development-plan"}>Web Development Plan</Link>
                  </li>
                  <li>
                    <Link to={"/digital-marketing-plan"}>Digital Marketing Plans</Link>
                  </li>
                  <li>
                    <Link to={"/graphic-designing-plan"}>Graphic Designing Plans</Link>
                  </li>
                  <li>
                    <Link to={"/content-writing-plan"}>Content Writting Plans</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-block">
        <div className="container">
          <div className="copyright-inner text-center  copyright-border">
            <p>{copyrightText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLayoutOne;
