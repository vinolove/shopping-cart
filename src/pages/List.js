import React, { Component } from 'react';
import { OuterLayout, ProductCard, Header } from '../component';
import { data } from '../data';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addItemToCartAction, removeItemFromCartAction, addToWishList, removeFromWishList } from '../redux/actions/actionCreators'

const PriceListLayout = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`


class ProductList extends Component {

    handleAddToCart = (item) =>{
        this.props.addItem(item)
    }

    handleRemoveItem = (item) =>{
        this.props.removeItem(item)
    }

    handleAddToWishList = (item) =>{
        this.props.addToWishList(item);
    }

    handleRemoveFromWishList = (item) => {
        this.props.removeFromWishList(item);
    }

    render() {
        const { cartList, wishList } = this.props || [];
        const cartListCount = cartList.length;
        const wishListCount = wishList.length;
        const productList = data.map((item,i)=>{
            const isTrue = (cartList && cartList.includes(item) ) || false;
            const isWishListItem = (wishList && wishList.includes(item) ) || false;
            return <ProductCard 
                        isCartItem={isTrue} 
                        key={i} 
                        product={item}
                        removeFromCart={()=>this.handleRemoveItem(item)}
                        addToCart={()=>this.handleAddToCart(item)}
                        addToWishList={()=>this.handleAddToWishList(item)}
                        removeFromWishList={()=>this.handleRemoveFromWishList(item)}
                        isWishListItem={isWishListItem}
                    />
        })
        return (
            <Header cartListCount={cartListCount} wishListCount={wishListCount} >
                <OuterLayout>
                        <PriceListLayout>
                        {
                            productList
                        }
                        </PriceListLayout>
                </OuterLayout>
            </Header>
        )
    }
}


const mapStateToProps = state => {
    return {
        cartList: state.cart.cartList,
        wishList: state.cart.wishList,
    }
}

export default connect(mapStateToProps, 
    { 
        addItem: addItemToCartAction,
        removeItem: removeItemFromCartAction,
        addToWishList,
        removeFromWishList,
    })(ProductList)


