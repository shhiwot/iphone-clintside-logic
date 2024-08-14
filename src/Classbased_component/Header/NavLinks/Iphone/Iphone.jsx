import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../../headerData";
import "./iphone.css";
function Iphone() {
  const [product, setproducts] = useState([]);
  useEffect(() => {
    fetch("https://iphone-render.onrender.com/iPhone")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setproducts(data.products);
      })
      .catch(() => console.log("Error: unable to fetch!!"));
  }, []);
  //for css only

  var order = 1;
  return (
    <div>
      <div className="main-titlewraper text-center top-50 pt-3">iphone</div>
      <div className="descriptionWraper text-center">
        The best for the brightest.
      </div>
      {product?.map((EachProduct, i) => {
        var order1 = 1;
        var order2 = 2;
        if (order != 1) {
          order1 = 2;
          order2 = 1;
          order++;
        } else {
          order--;
        }
        let productWrapper = (
          <div className="container-fluid" key={i}>
            <div className="row justify-content-center text-center px-5 m-3 left ">
              <div
                className={`leftSideWrapper mt-5 col-sm-12 col-md-6 order-${order1}`}
              >
                <div className="leftsidecontainer">
                  <div className="titleWraper text-center pb-3">
                    {EachProduct.product_name}
                  </div>
                  <div className="text text-center">
                    {EachProduct.product_brief_description}
                    <br />
                    {`starting at ${EachProduct.starting_price}`}
                    <br />
                    {EachProduct.price_range}
                  </div>
                  <div className="linwrapper text-center">
                    <Link to={EachProduct.product_url}>Learn more</Link>
                  </div>
                </div>
              </div>
              <div
                className={`right-side-wrapper mt-0  col-sm-12 col-md-6 order-${order2}`}
              >
                <img src={EachProduct.product_img} alt="product" />
              </div>
            </div>
          </div>
        );
        return productWrapper;
      })}
    </div>
  );
}
export default Iphone;
