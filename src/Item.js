import React from "react";
// import kurta from './images/kurta.jpg'
import { Link } from "react-router-dom";
const Item = (props) => {
  
        let { title, id, img, price } =          props;
        const discount = price- (price*20)/100;
  return (
    <div className="product col col-sm-6 col-md-4 col-lg-3 mt-5">
      <div className="card" key={id}>
        <Link to={`/Detail/${id}`}>
          <img src={img} className="card-img-top" alt="..." />
        </Link>
        <div className="card-body">
          <h5
            className="card-title"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title={title}
          >
            {title}
          </h5>
          <p className="card-text">{/* Man's Kurta  */}</p>
        </div>
        <ul className="list-group">
          {/* <li className="list-group-item">An item</li> */}
          <div className="d-flex justify-content-between">
            <p className="px-4 pt-2 text-muted">
              <span className=" text-decoration-line-through mx-2">
                {price}
              </span>
              20%
            </p>
            <p className="px-4 pt-2 fw-bold">{discount}</p>
          </div>
        </ul>
        <div className="card-body d-grid gap-2 d-md-flex justify-content-md-between">
          {/* <a href="/" className="card-link">
            Card link
          </a> */}

          <button className="btn btn-secondary" type="submit">
            Details
          </button>
          <button className="btn btn-warning" type="submit">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
