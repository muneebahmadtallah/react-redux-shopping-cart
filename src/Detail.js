import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import kurta from "./images/kurta2.jpg";

const Detail = () => {
  const [quantity, setQuantity] = useState(1);
  // const params = useParams();
  // console.log(params);
  const { id } = useParams();
  // console.log(id);
  //in above line we use {id} as an array destructureing

  const dispatch = useDispatch();

  const { product } = useSelector((state) => state.ProductsReducers);
  // console.log(product);

  useEffect(() => {
    dispatch({ type: "PRODUCT", id });
  }, [id]);

  const decQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  //dispatch function executes the action. so in ProductsReducers file we can easily get the id by wrting action.id

  const price = product.price;
  const discount = price - (price * 20) / 100;

  return (
    <div className="detail gap-2 d-md-flex justify-content-md-between">
      <div className="col-md-5">
        <img
          src={product.image}
          className="img-fluid"
          style={{ minWidth: "200px", minHeight: "200px" }}
          alt="ProductImage"
        />
      </div>
      <div className="col-6 detailRight pb-3">
        <h2 className="text-secondary">{product.title}</h2>
        <div className="tech d-flex justify-content-between">
          <h4 className="text-warning fw-bold">
            <span className="text-decoration-line-through text-secondary ">
              ${discount}
            </span>
            &nbsp;&nbsp; ${product.price}
          </h4>

          <h5 className="text-warning fw-bold">
            <span className="text-secondary ">Rating |</span>
          </h5>
        </div>
        <p>{product.description}</p>
        {/* <button className="btn btn-secondary" type="submit">
          Buy Now
        </button> */}
        <div className="qnty">
          <h3 className="text-secondary mr-20">Quantity</h3>
          <span onClick={decQuantity}>-</span>
          <span>{quantity}</span>
          <span className="mr-20" onClick={() => setQuantity(quantity + 1)}>
            +
          </span>

          <button
            className="btn btn-lg btn-warning ml-20 fw-bold"
            type="submit"
            onClick={() =>
              dispatch({ type: "ADD_TO_CART", payload: { product, quantity } })
            }
          >
            {" "}
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
