import React, { Component } from 'react'
import styled from 'styled-components';
import { Button } from './Button';
import shoeImage from '../images/shoe.jpg';
import fullHeart from '../icons/fullPinkHeart.svg';
import heart from '../icons/pinkHeart.svg';

const CardOuterLayer = styled.div`
    height: 300px;
    width: 250px;
    border: solid 2px #d9dbdb;
    display: flex;
    flex-direction: column;
    @media(max-width: 720px){
        width: 150px;
    }
`

const WishListContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    padding: 10px;
`

const ProductImageContainer = styled.div`
    flex: 4;
    display: flex;
    flex-direction: column;
`
const Image = styled.img`
    width: 230px;
    @media(max-width: 720px){
        width: 120px;
    }
`
const PriceTag = styled.div`
    padding: 10px 0px 10px 20px;
    font-size: 1.5rem;
`

const NameTag = styled.div`
    height: 40px;
    font-size: 1.2rem;
    padding-left: 20px;
`

const ButtonLayout = styled.div`
    margin: 0px 10px 10px 10px;
`

class ProductCard extends Component {
    render() {
        const { name, price } = this.props.product;
        const { isCartItem, isWishListItem, addToWishList, removeFromWishList } = this.props;
        return(
            <CardOuterLayer>
                <WishListContainer>
                    {
                        isWishListItem
                        ?
                        <img onClick={()=> removeFromWishList() } src={fullHeart} alt="heart" />
                        :
                        <img onClick={()=> addToWishList() } src={heart} alt="heart" />
                    }
                </WishListContainer>
                <ProductImageContainer>
                    <div style={{flex: 1}}>
                        <Image src={shoeImage} alt="shoe img" />
                    </div>
                    <NameTag>
                        {name}
                    </NameTag>
                </ProductImageContainer>
                <PriceTag>
                    { `Rs. ${price}` }
                </PriceTag>
                <ButtonLayout>
                    {
                        isCartItem
                        ?
                        <Button 
                        onClick={()=>this.props.removeFromCart()} 
                        style={{color: "#fff", fontSize: "1rem", fontWeight: 600}}
                        >
                         Remove Item
                        </Button>
                        :
                        <Button 
                        onClick={()=>this.props.addToCart()} 
                        style={{color: "#fff", fontSize: "1rem", fontWeight: 600}}
                        >
                         Add to Cart
                        </Button>
                    }
                    
                </ButtonLayout>
            </CardOuterLayer>
        )
    }
}

export default ProductCard
