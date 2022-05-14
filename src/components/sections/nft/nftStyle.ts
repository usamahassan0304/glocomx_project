import styled from "styled-components";
import sideImage from "../../../assets/images/shop.png"

export const NftSectionStyle = styled.div`
    padding-top : 40px;
    background-color : #010024;
`;

export const NftSectionHeadingStyle = styled.div`
    h1{
        color : #FFFFFF; 
    }
`;

export const NftSectionTextStyle = styled.div`
    color :  #FFFFFF;
    p{
        font-size : 14px;
    }
`;

export const NftSectionImageStyle = styled.img.attrs({
    src : `${sideImage}`
})`
    height : 300px;
    width : 350px;
    border : 2px solid gray;
    border-radius : 10px;
`
