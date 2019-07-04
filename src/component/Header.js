import React, { Component } from 'react'
import styled from 'styled-components';
import HeartIcon from '../icons/heart.svg';
import CartIcon from '../icons/cart.svg';

const HeaderContainer = styled.div`
    height: 100px;
    background: #ff0066;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 100px;
    @media(max-width: 720px){
        padding-right: 20px;
    }
    >div {
        margin-left: 20px;
    }
`
const Circle = styled.div`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
`

export class Header extends Component {
    render() {
        const { cartListCount, wishListCount } = this.props || [];
        return(
            <div>
                <HeaderContainer>
                    <div >
                         <Circle>
                            {
                                wishListCount
                            }
                         </Circle>
                         <div>
                             <img src={HeartIcon} alt="heart img" />
                         </div>
                    </div>
                    <div>
                     <Circle>
                     {
                         cartListCount
                     }
                     </Circle>
                     <img src={ CartIcon } alt="cart img" />
                    </div>
                </HeaderContainer>
                <div>
                 {
                     this.props.children
                 }
                </div>
            </div>
         )
    }
}


