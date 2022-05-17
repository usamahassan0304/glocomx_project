import footerLogo from "../../assets/images/transparentlogo.png";
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";
import {BsFillTelephoneFill} from "react-icons/bs";
import {GoMail} from "react-icons/go";

import styled from "styled-components";

export const FooterMainSectionStyle = styled.div`
    background-color : #010024; 
    padding-top : 90px;
    padding-bottom : 10px; 
`;

export const FooterSectionStyle = styled.div`
    background-color : #23293B;
    padding-top: 30px;
    padding-bottom : 70px; 
    
`;

export const FooterLogoStyle = styled.img.attrs({
    src : `${footerLogo}`
})`
    height : 79px;
    width : 77px;
`;

export const FooterIconStyle = styled.div`

`;

export const FooterTextStyle = styled.div`
    padding-top : 20px;
    font-size : 12px;
    color : #FFFFFF;
`;

export const FacebookIconStyle = styled(FaFacebook)`
    color : #FFFFFF;
    width : 35px;
    height : 35px;
    margin-top: 40px;
    margin-bottom :10px;
`;

export const IntsagramIconStyle = styled(FaInstagram)`
    color : #FFFFFF;
    width : 35px;
    height : 35px;
    margin-left : 35px;
    margin-top: 40px;
    margin-bottom :10px;
`;

export const TwitterIconStyle = styled(FaTwitter)`
    color : #FFFFFF;
    width : 35px;
    height : 35px;
    margin-left : 35px;
    margin-top: 40px;
    margin-bottom :10px;
`;


export const QuickLinksHeadingStyle = styled.div`
    color : #FFFFFF;
    font-size : 24px;
    font-weight : 600;
`;

export const FooterLinks = styled.div`
    margin-top : 15px;
    color : #FFFFFF;
    padding : 5px;
`;

export const FooterNewsHeadingStyle = styled.div`
    color : #FFFFFF;
    font-size : 24px;
    font-weight : 600;
`;

export const FooterNewsStyle = styled.div`
    margin-top : 15px;
    color : #FFFFFF;
    font-size : 16px;
`;

