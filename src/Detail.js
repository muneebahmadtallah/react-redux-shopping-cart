import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, UseSelector } from 'react-redux';
import kurta from "./images/kurta2.jpg";


const Detail = () => {
  
  // const params = useParams();
  // console.log(params);
  const {id} = useParams();
  console.log(id);
  //in above line we use {id} as an array destructureing
  
  // const dispatch = useDispatch();

  // useEffect(()=>{
  //   dispatch({type: 'PRODUCT', id: id })
  //   //dispatch function executes the action. so in ProductsReducers file we can easily get the id by wrting action.id
  // }, [id])

  return (
    <div className="detail gap-2 d-md-flex justify-content-md-between">
      <div className="col-md-5">
        <img
          src={kurta}
          className="img-fluid"
          style={{ minWidth: "200px", minHeight: "200px" }}
          alt="Kurta"
        />
      </div>
      <div className="col-6 detailRight pb-3">
        <h1>Men's Cotton Kurtan</h1>
        <h5 className="text-warning">Rating | 4.5</h5>
        <div className="tech d-flex justify-content-between">
          <h4 className='text-warning fw-bold'>price $20 </h4>
          <div>
          <button type="button" className="btn btn-warning">
            -
          </button>
          <input type="text" className='mx-1 mt-1'></input>
          <button type="button" className="btn btn-warning mr-20">
            +
          </button>
           </div>
        </div>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available. It is also
          used to temporarily replace text in a process called greeking, which
          allows designers to consider the form of a webpage or publication,
          without the meaning of the text influencing the design. Lorem ipsum is
          typically a corrupted version of De finibus bonorum et malorum, a
          1st-century BC text by the Roman statesman and philosopher Cicero,
          with words altered, added, and removed to make it nonsensical and
          improper Latin.
        </p>
        <button className="btn btn-secondary" type="submit">
          Buy Now
        </button>
        <button className="btn btn-warning" type="submit">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Detail