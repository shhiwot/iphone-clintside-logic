import React,{Component} from "react";
import arcade from "../../commonResource/images/icons/arcade.png";
import watch from "../../commonResource/images/icons/watch-series5-logo.png";
import appletv from "../../commonResource/images/icons/apple-tv-logo.png";
import banker from "../../commonResource/images/home/banker.png";
class Section46props extends Component {
  render() {
    return (
      <div>
        <div className={this.props.heghlightwrapper}>
          <div className="container-fluid">
            <div className="row">
              <div className="left-side-wrapper col-sm-12 col-md-6">
                <div className="left-side-container">
                  {this.props.title && (
                    <div className="title-wraper">iPhone 11</div>
                  )}
                  {this.props.toplogo && (
                    <div className={this.props.TopLogowrapper}>
                      <div className={this.props.logowrapper}>
                        <img src={this.props.logoimg} />
                      </div>
                    </div>
                  )}
                  {this.props.tvshow && (
                    <div className="tvshow-logo-wraper">
                      <img src={banker} />
                    </div>
                  )}
                  {this.props.watch && (
                    <div className="watch-more-wrapper">
                      <a href="#">Watch now on the Apple TV App</a>
                    </div>
                  )}
                  <div className={this.props.descriptionwraper}>
                    {this.props.description}
                  </div>
                  {this.props.pricewrapper && (
                    <div className="price-wrapper">
                      From $18.70/mo. or $499 with trade‑in.<sup>1</sup>
                    </div>
                  )}

                  <div className={this.props.linksswrapper}>
                    <ul>
                      <li>
                        <a href="">{this.props.leftlink}</a>
                      </li>
                      <li>
                        <a href="">{this.props.leftlink1}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="right-side-wrapper col-sm-12 col-md-6">
                <div className="right-side-container">
                  {this.props.titlewraper && (
                    <>
                      <div className={this.props.titlewraperclass}>
                        {this.props.titlediscription}
                      </div>

                      <div className={this.props.img_discription}>
                        {this.props.img_discription}
                      </div>
                      <div className={this.props.linksswrapper}>
                        <ul>
                          <li>
                            <a href="">{this.props.leftlink}</a>
                          </li>
                          <li>
                            <a href="">{this.props.leftlink1}</a>
                          </li>
                        </ul>
                      </div>
                    </>
                  )}

                  {this.props.rightlogo && (
                    <div className="top-logo-wrapper">
                      <div className="logo-wrapper">
                        <img src={watch} />
                      </div>
                    </div>
                  )}
                  {this.props.rightdiscription && (
                    <div className="description-wraper">
                      {this.props.rightdiscriptionwrapper}
                    </div>
                  )}
                  <div className={this.props.linkkswrapper}>
                    <ul>
                      <li>
                        <a href="">{this.props.link1}</a>
                      </li>
                      {this.props.link2 && (
                        <li>
                          <a href="">{this.props.linkswrapper}</a>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Section46props;

// export default function Section4() {
//   return (
//     <>
//       <div className={this.props.heghlightwrapper}>
//         <div className="container-fluid">
//           <div className="row">
//             <div className="left-side-wrapper col-sm-12 col-md-6">
//               <div className="left-side-container">
//                 {this.props.title && (
//                   <div className="title-wraper">iPhone 11</div>
//                 )}
//                 {this.props.toplogo && (
//                   <div className={this.props.TopLogowrapper}>
//                     <div className={this.props.logowrapper}>
//                       <img src={this.props.logoimg} />
//                     </div>
//                   </div>
//                 )}
//                 {this.props.tvshow && (
//                   <div className="tvshow-logo-wraper">
//                     <img src={banker} />
//                   </div>
//                 )}
//                 {this.props.watch && (
//                   <div className="watch-more-wrapper">
//                     <a href="#">Watch now on the Apple TV App</a>
//                   </div>
//                 )}
//                 <div className={this.props.descriptionwraper}>
//                   {this.props.description}
//                 </div>
//                 {this.props.pricewrapper && (
//                   <div className="price-wrapper">
//                     From $18.70/mo. or $499 with trade‑in.<sup>1</sup>
//                   </div>
//                 )}

//                 <div className={this.props.linksswrapper}>
//                   <ul>
//                     <li>
//                       <a href="">{this.props.leftlink}</a>
//                     </li>
//                     <li>
//                       <a href="">{this.props.leftlink1}</a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//             <div className="right-side-wrapper col-sm-12 col-md-6">
//               <div className="right-side-container">
//                 {this.props.titlewraper && (
//                   <div className={this.props.titlewraperclass}>
//                     {this.props.titlediscription}
//                   </div>
//                 )}

//                 {this.props.rightlogo && (
//                   <div className="top-logo-wrapper">
//                     <div className="logo-wrapper">
//                       <img src={watch} />
//                     </div>
//                   </div>
//                 )}
//                 {this.props.rightdiscription && (
//                   <div className="description-wraper">
//                     {this.props.rightdiscriptionwrapper}
//                   </div>
//                 )}
//                 <div className={this.props.linkkswrapper}>
//                   <ul>
//                     <li>
//                       <a href="">{this.props.link1}</a>
//                     </li>
//                     {this.props.link2 && (
//                       <li>
//                         <a href="">{this.props.linkswrapper}</a>
//                       </li>
//                     )}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
