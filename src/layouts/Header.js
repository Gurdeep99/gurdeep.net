import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { linkClick, toggleMenu } from "../utils";
import SvgIcons from "../SvgIcons";

const Header = () => {
  const [day, setDay] = useState(true);
  useEffect(() => {
    if (day) {
      document.querySelector("body").classList.add("light-skin");
      document.querySelector("body").classList.remove("dark-skin");
    } else {
      document.querySelector("body").classList.add("dark-skin");
    }
  }, [day]);

  const [pageToggle, setPageToggle] = useState(false);

  return (
    <Fragment>
      {/* Header */}
      <header className="header">
        <div className="header__builder">
          <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              {/* logo */}
              <div className="logo">
                <Link href="/" legacyBehavior>
                  <a>
                    <img
                      width={228}
                      height={38}
                      src="assets/images/logo2.png"
                      alt=""
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 align-right">
              {/* switcher btn */}
              <a
                href="#"
                className={`switcher-btn ${day ? "" : "active"}`}
                onClick={(e) => {
                  e.preventDefault();
                  setDay(!day);
                }}
              >
                <span className="sw-before">
                  <SvgIcons icon={"moon"} />
                </span>
                <span className="sw-after">
                  <SvgIcons icon={"sun"} />
                </span>
              </a>
              {/* menu btn */}
              <a href="#" className="menu-btn" onClick={(e) => toggleMenu(e)}>
                <span />
                <span />
              </a>
              {/* Menu Full Overlay */}
              <div className="menu-full-overlay">
                <div className="menu-full-container">
                  <div className="container">
                    <div className="row">
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        {/* menu full */}
                        <div className="menu-full">
                          <ul className="menu-full">
                            <li className="menu-item">
                              <Link legacyBehavior href="/">
                                <a
                                  className="splitting-text-anim-2"
                                  data-splitting="chars"
                                >
                                  Home
                                </a>
                              </Link>
                            </li>
                            <li className="menu-item">
                              <a
                                className="splitting-text-anim-2"
                                data-splitting="chars"
                                href="/#services-section"
                                onClick={() => linkClick()}
                              >
                                Services
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                className="splitting-text-anim-2"
                                data-splitting="chars"
                                href="/#skills-section"
                                onClick={() => linkClick()}
                              >
                                Skills
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                className="splitting-text-anim-2"
                                data-splitting="chars"
                                href="/#works-section"
                                onClick={() => linkClick()}
                              >
                                Works
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                className="splitting-text-anim-2"
                                data-splitting="chars"
                                href="/#resume-section"
                                onClick={() => linkClick()}
                              >
                                Resume
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                className="splitting-text-anim-2"
                                data-splitting="chars"
                                href="/#testimonials-sec
                                onClick={() => linkClick()}tion"
                              >
                                Testimonials
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                className="splitting-text-anim-2"
                                data-splitting="chars"
                                href="/#pricing-section"
                                onClick={() => linkClick()}
                              >
                                Pricing
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                className="splitting-text-anim-2"
                                data-splitting="chars"
                                href="/#blog-section"
                                onClick={() => linkClick()}
                              >
                                Blog
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                className="splitting-text-anim-2"
                                data-splitting="chars"
                                href="/#contact-section"
                                onClick={() => linkClick()}
                              >
                                Contact
                              </a>
                            </li>
                            <li
                              className={`menu-item menu-item-has-children has-children ${
                                pageToggle ? "opened" : "closed"
                              }`}
                            >
                              <a
                                className="splitting-text-anim-2"
                                data-splitting="chars"
                                onClick={() => setPageToggle(!pageToggle)}
                              >
                                Pages
                                <i className="fas fa-chevron-down"></i>
                              </a>

                              <ul
                                className="sub-menu"
                                style={{
                                  marginTop: "1rem",
                                  display: `${pageToggle ? "block" : "none"}`,
                                }}
                              >
                                <li className="menu-item">
                                  <Link legacyBehavior href="/works-list">
                                    <a
                                      className="splitting-text-anim-1"
                                      data-splitting="chars"
                                    >
                                      Works (List)
                                    </a>
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link legacyBehavior href="/works">
                                    <a
                                      className="splitting-text-anim-1"
                                      data-splitting="chars"
                                    >
                                      Works (Grid)
                                    </a>
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link legacyBehavior href="/work-single">
                                    <a
                                      className="splitting-text-anim-1"
                                      data-splitting="chars"
                                    >
                                      Work Single Page
                                    </a>
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link legacyBehavior href="/blog">
                                    <a
                                      className=" splitting-text-anim-1"
                                      data-splitting="chars"
                                    >
                                      Blog
                                    </a>
                                  </Link>
                                </li>
                                <li className="menu-item">
                                  <Link legacyBehavior href="/blog-single">
                                    <a
                                      className="splitting-text-anim-1"
                                      data-splitting="chars"
                                    >
                                      Single Post
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                        {/* social */}
                        <div className="menu-social-links">
                          <a
                            href="http://dribbble.com"
                            target="blank"
                            className="scrolla-element-anim-1"
                            title="dribbble"
                          >
                            <i className="fab fa-dribbble" />
                          </a>
                          <a
                            href="http://twitter.com"
                            target="blank"
                            className="scrolla-element-anim-1"
                            title="twitter"
                          >
                            <i className="fab fa-twitter" />
                          </a>
                          <a
                            href="http://behance.com"
                            target="blank"
                            className="scrolla-element-anim-1"
                            title="behance"
                          >
                            <i className="fab fa-behance" />
                          </a>
                        </div>
                        <div className="v-line-block">
                          <span />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="menu-overlay" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};
export default Header;
