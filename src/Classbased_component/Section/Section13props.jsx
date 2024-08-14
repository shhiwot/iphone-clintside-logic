



import React, { Component } from 'react';

class Section13props extends Component {
  render() {
    return (
      <>
        <section className={this.props.wrapper}>
          <div className="container">
            {this.props.alertmessage && <div className="new-alert">New</div>}
            <div className={this.props.titlewraper}>{this.props.title}</div>

            {this.props.description && (
              <div className={this.props.discriptionwrraper}>
                Twice the speed. Twice the storage.
              </div>
            )}

            {this.props.price && (
              <div className={this.props.priceclass}>{this.props.price1}</div>
            )}

            <div className="links-wrapper">
              <ul>
                <li>
                  <a href="">Learn more</a>
                </li>
                <li>
                  <a href="">Order</a>
                </li>
              </ul>
            </div>

            {this.props.ipodcaption && (
              <div className="ipod-caption row">
                <div className="col-sm-12 col-md-6 text-md-right">
                  iPad Pro available starting 3.25
                </div>
                <div className="col-sm-12 col-md-6 text-md-left">
                  Magic Keyboard coming in May
                </div>
              </div>
            )}
          </div>
        </section>
      </>
    );
  }
}

export default Section13props;


// export default function Section13props() {
//   return (
//     <>
//       <section className={this.props.wrapper}>
//         <div className="container">
//           {this.props.alertmessage && <div className="new-alert">New</div>}
//           <div className={this.props.titlewraper}>{this.props.title}</div>

//           {this.props.description && (
//             <div className={this.props.discriptionwrraper}>
//               Twice the speed. Twice the storage.
//             </div>
//           )}

//           {this.props.price && (
//             <div className={this.props.priceclass}>{this.props.price1}</div>
//           )}

//           <div className="links-wrapper">
//             <ul>
//               <li>
//                 <a href="">Learn more</a>
//               </li>
//               <li>
//                 <a href="">Order</a>
//               </li>
//             </ul>
//           </div>

//           {this.props.ipodcaption && (
//             <div className="ipod-caption row">
//               <div className="col-sm-12 col-md-6 text-md-right">
//                 iPad Pro available starting 3.25
//               </div>
//               <div className="col-sm-12 col-md-6 text-md-left">
//                 Magic Keyboard coming in May
//               </div>
//             </div>
//           )}
//         </div>
//       </section>
//     </>
//   );
// }
