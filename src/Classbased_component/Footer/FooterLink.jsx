import React, { Component } from "react";
import footerData from "./footerData";
import FooterColumn from "./FooterColumn";
class FooterLink extends Component {
  render() {
    return (
      <>
        <div className="footer-links-wrapper row">
          {footerData.map((obj, i) => {
            return (
              <div
                className={`links-wrapper-${i + 1} col-sm-12 col-md`}
                key={i}
              >
                <FooterColumn footerdata={obj} />
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default FooterLink;
