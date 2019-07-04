import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART, ADD_ITEM_TO_WISHLIST, REMOVE_ITEM_FROM_WISHLIST } from '../actions';

let defaultState = {
    cartList: [],
    wishList: []
}

export const cartReducer = (state = defaultState, action ) =>{
    switch(action.type){
        case ADD_ITEM_TO_CART: {
            return { ...state, cartList:[...state.cartList,action.payload.item] }
        }
        case REMOVE_ITEM_FROM_CART: {
            let dummyList = state.cartList.filter((el)=>el.id !== action.payload.item.id)
            return {...state, cartList: dummyList }
        }

        case ADD_ITEM_TO_WISHLIST: {
            return {...state, wishList:[...state.wishList, action.payload.item]}
        }

        case REMOVE_ITEM_FROM_WISHLIST: {
            let dummyList = state.wishList.filter((el)=>el.id !== action.payload.item.id)
            return {...state, wishList: dummyList }
        }

        default: {
            return state
        }
    }
}