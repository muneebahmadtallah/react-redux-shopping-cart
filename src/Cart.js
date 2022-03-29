import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RiDeleteBinLine } from "react-icons/ri";

const Cart = () => {
    const {products} = useSelector(state=> state.CartReducer);
    // we use destructing method  for {products}
    // also we use useSelector for calling the specific reducer

    const {totalPrice, totalQuantities} = useSelector(state => state.CartReducer);
    const dispatch = useDispatch();
      

  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="row">
        <div className="col-md-9">
          <h1 className='text-center text-warning fw-bold my-2'>Order Details</h1>
          {products.length > 0 ? (
            <>
              <table className="table">
                <thead>
                  <tr className="text-center">
                    <th scope="col">#</th>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Inc/Dec</th>
                    <th scope="col">TotalPrice</th>
                    <th scope="col">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, i) => {
                    i *= 1;
                    //    above line is for autoincerment index
                    return (
                      <tr key={product.id}>
                        <th scope="row">{i + 1}</th>
                        <td>
                          <img
                            src={product.image}
                            className="img-fluid"
                            style={{ maxWidth: "100px", maxHeight: "100px" }}
                            alt="ProductImage"
                          />
                        </td>
                        <td>{product.title}</td>
                        <td>{product.price.toFixed(2)}</td>
                        <td className="text-center">{product.quantity}</td>
                        <td>
                          <div className="cart_detail">
                            <span
                              onClick={() =>
                                dispatch({ type: "DEC", payload: product.id })
                              }
                            >
                              -
                            </span>
                            <span>{product.quantity}</span>
                            <span
                              className="mr-20"
                              onClick={() =>
                                dispatch({ type: "INC", payload: product.id })
                              }
                            >
                              +
                            </span>
                          </div>
                        </td>
                        <td className="text-center">
                          {(product.price * product.quantity).toFixed(2)}
                        </td>
                        <td className="text-center text-warning">
                          <span
                            className="remove"
                            onClick={() =>
                              dispatch({ type: "REMOVE", payload: product.id })
                            }
                          >
                            <RiDeleteBinLine />
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </>
          ) : (
            <h4 className='text-center my-5 text-warning'>"No Products availables"</h4>
          )}
        </div>
            {products.length > 0 ?
        <div className="col-md-3 grandTotal">
          <h2 className="text-center text-warning">Grand Total Bill</h2>
          <h4>
            Total Price: <span className="fw-bold">{totalPrice.toFixed(0)}</span>
          </h4>
          <h4>
            Total Quantities: <span className="fw-bold">{totalQuantities}</span>
          </h4>
            <button className="btn btn-warning my-4 mx-auto">Check Out</button>
          
        </div>
        : ""}

      </div>
    </div>
  );
}

export default Cart