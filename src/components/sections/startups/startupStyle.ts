import styled from "styled-components";
import sideImage from "../../../assets/images/shop.png"

export const StartupSectionStyle = styled.div`
    background-color : #010024;
`;

export const StartupHeadingSectionStyle = styled.div`
    h1{
        color : #FFFFFF; 
    }
`;

export const StartupTextSectionStyle = styled.div`
     
    p{
        color :  #FFFFFF;
        font-size : 18px;
    }
`;

export const StartupImageSectionStyle = styled.img.attrs({
    src: `${sideImage}`
})`
    height : 300px;
    width : 350px;
    /* border : 2px solid gray; */
    border-radius : 10px;
`;