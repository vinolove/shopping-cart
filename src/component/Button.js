import React from 'react';
import styled from 'styled-components';


const StyledButton = styled.button`
    width: 100%;
    height: 40px;
    background: #ff0066;
    outline: none;
    cursor: pointer;
`

export const Button = ({style, onClick, ...props}) =>{
    return(
        <StyledButton onClick={onClick} style={style} {...props} >
            {
                props.children
            }
        </StyledButton>
    )
}