import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./iphone.css";

function Iphone() {
  const [product, setproducts] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL; // Use environment variable

  useEffect(() => {
    fetch(`${apiUrl}/iPhone`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setproducts(data.products);
      })
      .catch(() => console.log("Error: unable to fetch!!"));
  }, [apiUrl]);

  let order = 1;

  return (
    <div>
      <div className="main-titlewraper text-center top-50 pt-3">iPhone</div>
      <div className="descriptionWraper text-center">
        The best for the brightest.
      </div>
      {product.map((EachProduct, i) => {
        const order1 = order === 1 ? 1 : 2;
        const order2 = order === 1 ? 2 : 1;
        order = order === 1 ? 2 : 1;

        return (
          <div className="container-fluid" key={i}>
            <div className="row justify-content-center text-center px-5 m-3 left">
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
                    {`Starting at ${EachProduct.starting_price}`}
                    <br />
                    {EachProduct.price_range}
                  </div>
                  <div className="linwrapper text-center">
                    <Link to={EachProduct.product_url}>Learn more</Link>
                  </div>
                </div>
              </div>
              <div
                className={`right-side-wrapper mt-0 col-sm-12 col-md-6 order-${order2}`}
              >
                <img
                  src={EachProduct.product_img}
                  alt={EachProduct.product_name}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Iphone;
