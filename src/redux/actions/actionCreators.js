import { ADD_ITEM_TO_CART, GET_CART_LIST, REMOVE_ITEM_FROM_CART, ADD_ITEM_TO_WISHLIST, REMOVE_ITEM_FROM_WISHLIST } from './index';

export const addItemToCartAction = item =>{
    return{
        type: ADD_ITEM_TO_CART,
        payload:{
            item
        }
    }
}

export const removeItemFromCartAction = item =>{
    return{
        type: REMOVE_ITEM_FROM_CART,
        payload:{
            item
        }
    }
}

export const getCartListAction = item =>{
    return{
        type: GET_CART_LIST,
        payload:{
            item
        }
    }
}

export const addToWishList = item =>{
    return{
        type: ADD_ITEM_TO_WISHLIST,
        payload:{
            item
        }
    }
}
export const removeFromWishList = item =>{
    return{
        type: REMOVE_ITEM_FROM_WISHLIST,
        payload:{
            item
        }
    }
}