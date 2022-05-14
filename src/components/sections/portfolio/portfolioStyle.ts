import styled from "styled-components";
import sideIcon from "../../../assets/images/transparentlogo1.png"

export const PortfolioSectionStyle = styled.div`
    background-color : #010031;
`;

export const PortfolioSectionHeadingStyle = styled.div`
    
    h1{
        color : #FFFFFF;
    }
`;

export const PortfolioTextStyle = styled.div`
    p{
        color : #FFFFFF;
        font-size : 14px;
    }
`;

export const PortfolioIconSectionStyle = styled.div``;

export const PortfolioIconStyle = styled.img.attrs({
    src : `${sideIcon}`
})`
    height : 85px;
    width : 95px;
`;

export const PortfolioTextSectionStyle = styled.div`
    p{
        color : #FFFFFF;
    }
`;


