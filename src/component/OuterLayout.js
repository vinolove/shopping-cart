import React from 'react';
import styled from 'styled-components';

const StyledOuterLayout = styled.div`
    max-width: 1500px;
    margin: auto;
    padding: 20px;
`

export const OuterLayout = (props) =>{
    return <StyledOuterLayout>
        {
            props.children
        }
    </StyledOuterLayout>
}