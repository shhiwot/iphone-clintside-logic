import React,{Component} from 'react'
import Section1 from './Section13props';
import Sectionprops from './Section13props';

class Section13 extends Component {
  render() {
    return (
      <>
        <Sectionprops
          wrapper={"first-hightlight-wrapper"}
          alertmessage={"new-alert"}
          titlewraper={"title-wraper bold black"}
          title={"iPad Pro"}
          ipodcaption={"ipod-caption row"}
        />
        <Sectionprops
          wrapper={"second-hightlight-wrapper"}
          alertmessage
          titlewraper={"title-wraper bold black"}
          title={"MacBook Air"}
          description
          price
          discriptionwrraper={"description-wrapper black"}
          priceclass={"price-wrapper grey"}
          price1={"From $999."}
        />
        <Sectionprops
          wrapper={"third-hightlight-wrapper"}
          titlewraper={"title-wraper bold"}
          title={"iPhone 15 Pro"}
          description
          price
          discriptionwrraper={"description-wrapper"}
          priceclass={"price-wrapper"}
          price1={"From $24.95/mo. or $599 with trade‑in."}
        />
      </>
    );
  }
}

export default Section13;



// export default function Section13() {
//   return (
//     <>
//       <Sectionprops
//         wrapper={"first-hightlight-wrapper"}
//         alertmessage={"new-alert"}
//         titlewraper={"title-wraper bold black"}
//         title={"iPad Pro"}
//         ipodcaption={"ipod-caption row"}
//       />
//       <Sectionprops
//         wrapper={"second-hightlight-wrapper"}
//         alertmessage
//         titlewraper={"title-wraper bold black"}
//         title={"MacBook Air"}
//         description
//         price
//         discriptionwrraper={"description-wrapper black"}
//         priceclass={"price-wrapper grey"}
//         price1={"From $999."}
//       />
//       <Sectionprops
//         wrapper={"third-hightlight-wrapper"}
//         titlewraper={"title-wraper bold"}
//         title={"iPhone 11 Pro"}
//         description
//         price
//         discriptionwrraper={"description-wrapper"}
//         priceclass={"price-wrapper"}
//         price1={"From $24.95/mo. or $599 with trade‑in."}
//       />
//     </>
//   );
// }
