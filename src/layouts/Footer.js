import { useEffect, useState } from "react";
import socialApi from "../apiData/socialApi";
import SvgIcons from "../SvgIcons";

const Footer = () => {
  const [SocialData, setSocialData] = useState([]);
  const fetchApiData = () => {
    const promises = [socialApi()];
    Promise.all(promises)
      .then(([responceSocial]) => {
        setSocialData(responceSocial);
      })
      .finally(() => {
        console.log("released");
      });
  };
  useEffect(() => {
    fetchApiData();
  }, []);
  return (
    <div className="footer">
      <div className="footer__builder">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="social-links scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                {SocialData?.map((item, index) => (
                  <a key={index} target="_blank" rel="nofollow" href={item?.slug}>
                    <SvgIcons icon={item?.icon} fill={"#000"} />
                  </a>
                ))}
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="copyright-text align-center scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                © 2025 <strong>Mr Singh Creations</strong>. All rights reserved
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="copyright-text align-right scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                Your IP is <strong>10.59.98.115</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
