const initialState = {
    products: [],
    totalPrice: 0,
    totalQuantities: 0
}

const CartReducer = (state = initialState, action) =>
{
    switch(action.type){
        case 'ADD_TO_CART':
            // console.log(action.payload.product.id);
            const {product, quantity} = action.payload;
            // in above line we use destructing method by which we can easily accses all the component 
            // of product and quantity that is coming from our add to cart detail page
            // console.log(product.id);
            // due to destructing in below line we use product.id instead of action.payload.product.id
            const check= state.products.find(products => products.id === product.id);
            if(check){
                return state;
            }else{
                 const tPrice = state.totalPrice + product.price * quantity;
                const tquantities = state.totalQuantities + quantity; 
                product.quantity = quantity;
                // in above line we add product quantity in state quantity
                return{
                    ...state, products:[...state.products, product], totalPrice: tPrice,
                    totalQuantities: tquantities
                }
                  
            }
            
        default:
        return state;

    }
}

export default CartReducer;