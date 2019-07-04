import { combineReducers } from 'redux';
import { cartReducer } from './shopReducers'

export const rootReducer = combineReducers({
    cart: cartReducer
})