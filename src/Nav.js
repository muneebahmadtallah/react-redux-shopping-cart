import React from "react";
import { BsFillCartDashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  const {totalQuantities} = useSelector(state=> state.CartReducer);
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Redux Shopping Cart
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Detail">
                
              </Link>
            </li>
            
          </ul>
          <form className="d-flex justify-content-between align-items-center">
            <Link to="/Cart">
            <span className="text-warning mx-4">
              <BsFillCartDashFill />
              {totalQuantities > 0 ? 
              <span class="top-0 translate-middle badge rounded-pill bg-danger">
                {totalQuantities}
        
              </span> : ""}
            </span>
            </Link>
            <button className="btn btn-outline-warning" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
