import styled from "styled-components";
import banner from "../../../assets/images/bg.jpg";
import { IoBookOutline } from "react-icons/io5";
 



export const HeaderSecionStyle = styled.div`
    width: 100%;
    height : 100%;
    background-image : url(${banner});
    background-repeat: no-repeat;
    background-size:cover;
    background-position: center; 
    background-color: #030C15;
    opacity : 1;
`;

export const HeaderLeftContentStyle = styled.div`
    margin-top:150px;

    @media only screen and (max-width: 767px) {
        margin-top:50px;
    }
`;

export const HeaderHeadingStyle = styled.div`
    color: #FFC300;
    letter-spacing : 3.2px;
    font-size : 64px;
    text-transform : uppercase;

    @media only screen and (max-width: 767px) {
        letter-spacing : 0.5px;
        font-size : 42px;
    }
`;

export const HeaderSubHeadingStyle = styled.div`
    color: #FFFFFF;
    font-size : 30px;
    font-weight:600;
    letter-spacing : 0px;
    @media only screen and (max-width: 767px) {
        
        font-size : 20px;
        font-weight:300;
    }
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

export const TimerSectionStyle = styled.div`
    margin-top:170px;
    text-align : center;

    @media only screen and (max-width: 767px) {
        margin-top:50px;
    }
`;

export const TimerSectionHeadingStyle = styled.div`
    color : #FFFFFF;
    font-size : 18px;
    letter-spacing : 1.3px;
`;

export const TimerBlockSectionStyle = styled.div`
    display : flex;
    justify-content : center;
    flex-direction : row;
    padding-top : 20px;
`;
export const TimerBlockStyle = styled.div`
    height : 65px;
    width : 65px;
    border-radius : 5px;
    margin : 15px;
    background-color : #000;
    color : #FFFFFF;
    display:flex;
    justify-content : center ; 
    align-items : center;
    flex-direction : column;
`;

export const NumericValueStyle = styled.div`
    color : #FFFFFF;
    font-size : 22px;
`;

export const StringValueStyle = styled.div`
    color : #FFFFFF;
    font-size : 12px;
`;

export const HeaderProgessbarStyle = styled.div`
    display:flex;
    justify-content : center ; 
    width : 70%;
    margin-left : 100px; 
    @media only screen and (max-width: 992px) {
        width : 55%;
        margin-left : 175px; 
    }
    @media only screen and (max-width: 767px) {
        width : 100%;
        margin-left : 20px; 
    }
`;