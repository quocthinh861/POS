import { createSlice } from '@reduxjs/toolkit'

export const itemSlice = createSlice({
    name: 'item',
    initialState: {
        numberCart: 2,
        Carts: [{
            id: 0,
            quantity: 1,
            name: "FOODNAME",
            image: "/images/menu-1.jpg",
            price: 15.99,
        }, {
            id: 1,
            quantity: 1,
            name: "FOODNAME",
            image: "/images/menu-1.jpg",
            price: 7.33,
        }]
    }, 
    reducers: {
        addToCart: (state, action) => {
            if(state.numberCart === 0)
            {
                let cart = {
                    id: action.payload.id,
                    quantity: 1,
                    name: action.payload.name,
                    image: action.payload.image,
                    price: action.payload.price,
                }
                state.Carts.push(cart);
            }
            else 
            {
                let check = false;
                state.Carts.forEach((item, key) => {
                    if(item.id === action.payload.id){
                        state.Carts[key].quantity++;
                        check = true;
                    }
                })
                if(!check)
                {
                    let _cart = {
                        id: action.payload.id,
                        quantity: 1,
                        name: action.payload.name,
                        image: action.payload.image,
                        price: action.payload.price,
                    }
                    state.Carts.push(_cart);
                }
            }
            state.numberCart += 1;
        },
        increaseQuantity: (state, action) => {
            state.numberCart = state.numberCart + 1;
            ++state.Carts.filter(item => item.id === action.payload)[0].quantity;
        },
        decreaseQuantity: (state, action) => {
            let quantity = state.Carts.filter(item => item.id === action.payload)[0].quantity;
            if(quantity > 0){
                state.numberCart -= 1;
                let left = --state.Carts.filter(item => item.id === action.payload)[0].quantity;

                if( left == 0)
                {
                    state.Carts = state.Carts.filter(item => item.id !== action.payload);
                }
            }
        }, 
        removeToCart: (state, action) => {
           let _quantity = state.Carts.filter(item => item.id === action.payload)[0].quantity;
           if(_quantity > 0){
            state.numberCart = state.numberCart - _quantity;
            state.Carts = state.Carts.filter(item => item.id !== action.payload);
           }
        }
    }
})

export const {addToCart, increaseQuantity, decreaseQuantity, removeToCart} = itemSlice.actions;
export default itemSlice.reducer;