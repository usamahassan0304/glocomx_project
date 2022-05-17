import styled from "styled-components";
import sideImage from "../../assets/images/shop.png";
import { FaHands } from "react-icons/fa"

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
`;

export const NftCardStyle = styled.div`
    background-color : #23293B;
    width : 100%;
    margin-bottom : 20px;
    border : 1px solid #23293B;
    border-radius : 10px;
`;

export const NftCardHeaderStyle = styled.div`
    text-align: center;
`;

export const NftCardImageStyle = styled(FaHands)`
    color : #EAEAEA;
    height : 70px;
    width : 70px;
    margin-top: 30px;
    margin-bottom :10px;
`;

export const NftContentStyle = styled.div``;

export const NftTitleStyle = styled.div`
    color : #FFFFFF;
    font-size : 18px;
`;

export const NftStatusStyle = styled.div`
    color : #FFFFFF;
    font-size : 14px;
`;

export const NftDescriptionStyle = styled.div`
    color : #FFFFFF;
    text-align : center;
    padding : 20px;
    font-size : 14px;
`;
