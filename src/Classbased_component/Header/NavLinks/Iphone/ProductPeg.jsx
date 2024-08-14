import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Peg404 from "../../../Peg404";
import { useState } from "react";
import "./iphone.css";

export default function ProductPeg() {
  const [productpeg, setproduct] = useState([]);
  let { productID } = useParams();
  useEffect(() => {
    fetch(`https://iphone-render.onrender.com/iphone/${productID}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setproduct(data.products);
        //if we fetch all data we should fillter out each product using fillter method
        // const eachproduct = result.filter(
        //   (data) => data.product_url === productID
        // );
      })
      .catch(() => console.log("Error: unable to fetch!!"));
  }, [productID]);
  console.log(productpeg);
  if (productpeg.length) {
    return (
      <>
        {productpeg.map((SingleItem) => {
          return (
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
                  Starting at{SingleItem.starting_price}
                  <br />
                  {SingleItem.price_range}
                  <br />
                  {SingleItem.product_description}
                </div>
                <div className="right_Side_Wrrapper col-md-6">
                  <img src={SingleItem.product_img} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  } else {
    <Peg404 />;
  }
}
