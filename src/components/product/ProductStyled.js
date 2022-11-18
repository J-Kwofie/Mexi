import styled from "styled-components";

export const ProductStyled = styled.section`
    
    .product-details::before{
        content: "";
        background-size:contain;
        background-repeat:no-repeat;
        background-position:center;
        min-height:352px;
        height:100%;
        width: 100%;
        display:flex;

    }
    .product-details{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`