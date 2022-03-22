import React from 'react';
import Carousel from './Carousel';
import Item from './Item';
import { useSelector } from 'react-redux';

const Home = () => {
    //useSelector function take an argument. so we pass state as an argument it will be any name like a,b,c.. so we take state 
    const {products} = useSelector(state => state.ProductsReducers);
    //in above line we use {products} as a array dstructering method.. products is an array of object 
    // console.log(products);
  return (
    <>
      <div className="App">
        <Carousel />
        <div className="container allProduct">
          <div className="row">
              {products.map((element)=>
              {return (
                <Item
                  id={element.id}
                  title={
                    element.title ? element.title.slice(0, 25) + "..." : element.title
                  }
                  img={element.image}
                  price={element.price ? element.price : "unknown"}
                />
              );
              }
              )}
             
          </div>
        </div>
      </div>
    </>
  );
}

export default Home