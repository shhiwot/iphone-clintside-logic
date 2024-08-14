import React, { Component } from "react";
import Footer from "./Classbased_component/Footer/Footer";
import Header from "./Classbased_component/Header/Header";
import { Route, Routes } from "react-router-dom";
import Iphone from "./Classbased_component/Header/NavLinks/Iphone/Iphone";
import MainSection from "./Classbased_component/Section/FinalSectionCollector/";
import Ipad from "./Classbased_component/Header/NavLinks/Ipad";
import Watch from "./Classbased_component/Header/NavLinks/Watch";
import Tv from "./Classbased_component/Header/NavLinks/Tv";
import Music from "./Classbased_component/Header/NavLinks/Music";
import Support from "./Classbased_component/Header/NavLinks/Support";
import Mac from "./Classbased_component/Header/NavLinks/Mac";
import SharedLayout from "./Classbased_component/SharedLayout";
import Peg404 from "./Classbased_component/Peg404";
import Search from "./Classbased_component/Header/NavLinks/Search";
import Cart from "./Classbased_component/Header/NavLinks/Cart";
//import "./Classbased_component/Header/NavLinks/iphone.css";
import ProductPeg from "./Classbased_component/Header/NavLinks/Iphone/ProductPeg";
class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<MainSection />} />
            <Route path="mac" element={<Mac />} />
            <Route path="iPhone" element={<Iphone />} />
            <Route path="iphone/:productID" element={<ProductPeg />} />
            <Route path="ipad" element={<Ipad />} />
            <Route path="watch" element={<Watch />} />
            <Route path="tv" element={<Tv />} />
            <Route path="Music" element={<Music />} />
            <Route path="Support" element={<Support />} />
            <Route path="search" element={<Search />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<Peg404 />} />
          </Route>
        </Routes>
      </>
    );
  }
}

export default App;

// function DateFormatter(dateTimeString) {
//   let date = new Date(dateTimeString);
//   let Year = date.getFullYear();
//   let Month = date.getMonth();
//   let Day = date.getDate();
//   let formattedDate =
//     Year +
//     "-" +
//     (Month + 1).toString().padStart(2, "0") +
//     "-" +
//     Day.toString().padStart(2, "0");
//   return formattedDate;
// }