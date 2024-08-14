import React,{Component} from "react";
import Section13 from "./Section13";
import Section46 from "./Section46";
import Alert from "./Alert/Alert";
import Youtube from "./Youtube/Youtube";

class FinalSectionCollector extends Component {
  render() {
    return (
      <>
        <Alert />
        <Section13 />
        <Section46 />
        <Youtube/>
      </>
    );
  }
}

export default FinalSectionCollector;

// export default function MainSection() {
//   return (
//     <>
//       <Alert />
//        <Section13 />
//        <Section46 />
//     </>
//   );
// }
