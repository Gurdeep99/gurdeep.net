import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { linkClick, toggleMenu } from "../utils";
import SvgIcons from "../SvgIcons";
import navbarApi from "../apiData/navbarApi";
import socialApi from "../apiData/socialApi";

const Header = () => {
  const [day, setDay] = useState(true);
  const [navData, setNavData] = useState([]);
  const [SocialData, setSocialData] = useState([]);
 
  useEffect(() => {
    if (day) {
      document.querySelector("body").classList.add("light-skin");
      document.querySelector("body").classList.remove("dark-skin");
    } else {
      document.querySelector("body").classList.add("dark-skin");
    }
  }, [day]);

  const [pageToggle, setPageToggle] = useState(false);

  const fetchApiData = () => {
    const promises = [navbarApi(), socialApi()];
    Promise.all(promises).then(([responce, responceSocial]) => {
      if (responce) {
        // console.log(responce);
        // console.log(responceSocial);
        setSocialData(responceSocial);
        setNavData(responce);
      }
    }).finally(() => {
      console.log("released");
    });
  };
  useEffect(() => {
    fetchApiData();
  }, []);

  // useEffect(() => {
  //   console.log(day);
  // }, [day]);

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
                            {navData?.map((item, index) => (
                              <li className="menu-item" key={index}>
                                {item?.name !== "Home" ? (
                                  <a
                                    className="splitting-text-anim-2"
                                    data-splitting="chars"
                                    href={`/${item?.slug}`}
                                    onClick={() => linkClick()}
                                  >
                                    {item?.name}
                                  </a>
                                ) : (
                                  <Link legacyBehavior href={item?.slug} key={index}>
                                    <a
                                      className="splitting-text-anim-2"
                                      data-splitting="chars"
                                    >
                                      {item?.name}
                                    </a>
                                  </Link>
                                )}
                              </li>
                            ))}

                            {/* <li
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
                            </li> */}
                          </ul>
                        </div>
                        {/* social */}
                        <div className="menu-social-links">
                          {SocialData?.map((item, index) => (
                             <a
                             key={index}
                             href={item?.slug}
                             target="_blank"
                             className="scrolla-element-anim-1"
                             title="dribbble"
                           >
                            <SvgIcons icon={item?.icon} fill={day ? "#000" : "#fff"} />
                           </a>
                          ))}
                          
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
