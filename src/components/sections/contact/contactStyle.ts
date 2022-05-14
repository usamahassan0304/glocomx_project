import styled from "styled-components";
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";
import {BsFillTelephoneFill} from "react-icons/bs";
import {GoMail} from "react-icons/go";


export const ContactSectionStyle = styled.div`
    background-color : #010024;
`;

export const ContactHeadingStyle = styled.div`
    h1{
        color : #FFFFFF;
    }
`;

export const ContactSubHeadingStyle = styled.div`
    font-size : 20px;
    font-weight : 600;
    color : #FFFFFF;
`;

export const ContactTextStyle = styled.div`
    padding-top : 10px;
    font-size : 14px;
    color : #FFFFFF;
`;

export const ContactIconsStyle = styled.div`
    color : #FFFFFF;
`;
export const ContactIconsStyle2 = styled.div`
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

export const PhoneIconStyle = styled(BsFillTelephoneFill)`
    color : #FFFFFF;
    width : 25px;
    height : 25px;
    margin-top: 40px;
    margin-bottom :10px;
`;

export const MailIconStyle = styled(GoMail)`
    color : #FFFFFF;
    width : 30px;
    height : 30px;
    margin-top: 40px;
    margin-bottom :10px;
`;

