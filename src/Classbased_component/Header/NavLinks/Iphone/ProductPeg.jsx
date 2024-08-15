import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Peg404 from "../../../Peg404";
import "./iphone.css";

export default function ProductPeg() {
  const [productpeg, setproduct] = useState([]);
  const { productID } = useParams();
  const apiUrl = import.meta.env.VITE_API_URL; // Use environment variable

  useEffect(() => {
    fetch("https://iphone-render.onrender.com/iphone")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // Filter the product data to find the specific product by ID
        const filteredProduct = data.products.filter(
          (item) => item.product_url === productID
        );
        setproduct(filteredProduct);
      })
      .catch(() => console.log("Error: unable to fetch!!"));
  }, [productID, apiUrl]);

  // Display a 404 page if no product is found
  if (productpeg.length === 0) {
    return <Peg404 />;
  }

  return (
    <>
      {productpeg.map((SingleItem) => (
        <div className="container-fluid" key={SingleItem.product_name}>
          <div className="outer_title_Wrapper">
            <div className="title_Wraper1 text-center fw-b">
              {SingleItem.product_name}
            </div>
            <div className="title_Discription_Wraper text-center">
              {SingleItem.product_brief_description}
            </div>
          </div>
          <div className="row">
            <div className="left_Side_Wrrapper col-md-6 text-center">
              Starting at {SingleItem.starting_price}
              <br />
              {SingleItem.price_range}
              <br />
              {SingleItem.product_description}
            </div>
            <div className="right_Side_Wrrapper col-md-6">
              <img src={SingleItem.product_img} alt={SingleItem.product_name} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
