


// import React from "react";

//  function Alert() {
//   return (
//     <>
//       <section className="alert-section top-50">
//         <div className="container">
//           <div className="alert-title">We’re open for you. </div>
//           <div className="alert-text">
//             Our retail stores are closed, but you can buy our products here
//             online and get fast, free delivery. If you need help finding the
//             right product or have a question on your order, chat online with a
//             Specialist or call 1-800-MY-APPLE.
//             <br />
//             For service and support, visit
//             <a href="https://support.apple.com/">support.apple.com</a>.
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Alert
import React, { Component } from 'react';
import logo from "../../../commonResource/images/icons/hero_logo_apple_watch_series_9__eg5xcrxghuaa_large.png"
import classes from "./style.module.css"
class Alert extends Component {
  render() {
    return (
      <div>
        <div className={classes.first_section_wrapper}>
          <div className={classes.content}>
            <div className={classes.model_wrapper}>
              <img className="mx-auto d-flex" src={logo} alt="" srcset="" />
            </div>
            <div
              className={`${
                classes.advert_wrapper
              } font-weight-bold text-center pt-2`}
            >
              Double tap. A magical new way to use Apple Watch.
            </div>
            <div
              className={`${classes.linkwrapper} text-center pt-3 row justify-content-center`}
            >
              <div>
                <a href="#">Learn more</a>
              </div>
              <div>
                <a href="#">Buy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Alert;
