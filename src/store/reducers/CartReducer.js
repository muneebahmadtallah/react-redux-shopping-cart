const initialState = {
    products: [],
    totalPrice: 0,
    totalQuantities: 0
}

const CartReducer = (state = initialState, action) =>{
    let findPro;
    let index;
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
                    ...state, 
                    // we update products array firstly by coping all the products from state using (...state) 
                    // and then add new (product)
                    products:[...state.products, product], 
                    // then we update totalPrice by puttin (tPrice)
                    totalPrice: tPrice,
                    // and at the end we update totalQuantities by puting tquantities
                    totalQuantities: tquantities
                }
                  
            }
            case 'INC':
            findPro = state.products.find(products=> products.id === action.payload);
            index = state.products.findIndex(products=> products.id === action.payload);
            findPro.quantity += 1;
            state.products[index] = findPro; 
            // in above line we add findPro(product) in products array on given index that we already found
            return{
                ...state, //first we copy state
                // then we update totalprice from state and then we update totalquantities from state
                totalPrice: state.totalPrice + findPro.price, totalQuantities: state.totalQuantities+1
            }
            
            case 'DEC':
                findPro = state.products.find(products=> products.id === action.payload);
                index = state.products.find(products=> products.id === action.payload);
                if(findPro.quantity > 1){
                    findPro.quantity -= 1;
                    state.products[index] = findPro;
                    return{
                        ...state,
                        totalPrice: state.totalPrice - findPro.price, totalQuantities: state.totalQuantities- 1
                    }

                } else {
                    return state;
                }
                case 'REMOVE':
                findPro = state.products.find(products => products.id === action.payload);
                // if (products.id !== action.payload) if this statement is true then product will add in filtered
                // wo we can easily remove the desired product
                const filtered = state.products.filter(products => products.id !== action.payload);
                return{
                    ...state, //copy full state
                    products: filtered, // then add filtered products in products array
                    totalPrice: state.totalPrice - findPro.price * findPro.quantity,
                    //then we update total price by removing the deleted product price
                    totalQuantities: state.totalQuantities - findPro.quantity
                    // finally we also update our total quantities by removing the deleted product quantity
                }
            default:
        return state;

    }
}

export default CartReducer;