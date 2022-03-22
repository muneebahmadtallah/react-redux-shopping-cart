import React from "react";
// import kurta from './images/kurta.jpg'
import { Link } from "react-router-dom";
const Item = (props) => {
  
        let { title, id, img, price } =          props;
        const discount = price- (price*20)/100;
  return (
    <div className="product col col-sm-6 col-md-4 col-lg-3 mt-5" key={id}>
      <div class="card">
        <Link to={`/Detail/${id}`}>
          <img src={img} class="card-img-top" alt="..." />
        </Link>
        <div class="card-body">
          <h5
            class="card-title"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title={title}
          >
            {title}
          </h5>
          <p class="card-text">{/* Man's Kurta  */}</p>
        </div>
        <ul class="list-group">
          {/* <li class="list-group-item">An item</li> */}
          <div className="d-flex justify-content-between">
            <p className="px-4 pt-2 text-muted">
              <span className=" text-decoration-line-through mx-2">{price}</span>
              20%
            </p>
            <p className="px-4 pt-2 fw-bold">{discount}</p>
          </div>
        </ul>
        <div class="card-body d-grid gap-2 d-md-flex justify-content-md-between">
          {/* <a href="/" class="card-link">
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
