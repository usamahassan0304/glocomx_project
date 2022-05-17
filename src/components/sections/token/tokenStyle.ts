import styled from "styled-components";
import sideImage from "../../../assets/images/shop.png";

export const TokenSectionStyle = styled.div`
    padding-top : 40px;
    background-color : #010024;
`;

export const TokenHeadingSectionStyle = styled.div`
    h1{
        color : #FFFFFF; 
    }
`;
export const TokenSectionTextStyle = styled.div`
    color :  #FFFFFF;
    p{
        font-size : 14px;
    }
`;

export const TokenSectionImageStyle = styled.img.attrs({
    src : `${sideImage}`
})`
    height : 300px;
    width : 350px;
    border-bottom: 2px solid gray;
    border-left: 2px solid gray;
`