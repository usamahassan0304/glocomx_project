import styled from "styled-components";
import banner from "../../../assets/images/bg.jpg";
import { IoBookOutline } from "react-icons/io5";
 



export const HeaderSecionStyle = styled.div`
    width: 100%;
    height : 100%;
    background-image : url(${banner});
    background-repeat: no-repeat;
    background-size:contain;
    background-position: center; 
    background-color: #030C15;
    opacity : 1;
`;

export const HeaderLeftContentStyle = styled.div`
    margin-top:150px;
`;

export const HeaderHeadingStyle = styled.div`
    color: #FFC300;
    letter-spacing : 3.2px;
    font-size : 64px;
    text-transform : uppercase;
`;

export const HeaderSubHeadingStyle = styled.div`
    color: #FFFFFF;
    font-size : 30px;
    font-weight:600;
    letter-spacing : 0px;
`;

export const HeaderContentTextStyle = styled.div`
    font-size: 14px;
    margin-top: 30px;
    letter-spacing: 0.14px;
    color: #FFFFFF;
    opacity: 1;
`;

export const LowerHeaderSection = styled.div`
    margin-top: 60px;
    background-color : #010031; 
`;

export const HeadingTextStyle = styled.div`
    color: #FFFFFF;
`;

export const PlainTextStyle = styled.div`
    color : #FFC300;
`;

export const HeaderIcons = styled(IoBookOutline)`
    color : #9A9A9A;
    height: 70px;
    width : 79px;
    margin-top: 30px;
    margin-bottom :10px;
`;

