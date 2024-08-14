//import React, { Component } from "react";
import search from "../../commonResource/images/icons/search-icon-sm.png";
import cart from "../../commonResource/images/icons/cart-sm.png";
import { Link } from "react-router-dom";

import React from 'react'

export default function Navitem(props) {
  let { url, title, img } = props.data;

  return (
    <>
      {title && (
        <li className="nav-item">
          <Link className="nav-title js-scroll-trigger" to={url}>
            {title}
          </Link>
        </li>
      )}
      {img && (
        <li className="nav-item">
          <Link className="nav-title js-scroll-trigger" to={url}>
            <img src={img} alt="" />
          </Link>
        </li>
      )}
    </>
  );
}


// class NavItem extends Component {
//   render() {
//     let { url, title, img } = this.props.data;
//     return (
//       <>
//         {title && (
//           <li className="nav-item">
            
//               <Link className="nav-title js-scroll-trigger" to={url}>
//                 {title}
//               </Link>
            
//           </li>
//         )}
//         {img && (
//           <li className="nav-item">
//             <Link className="nav-title js-scroll-trigger" to={url}>
//               <img src={img} alt="" />
//             </Link>
//           </li>
//         )}
//       </>
//     );
//   }
// }

// export default NavItem;
