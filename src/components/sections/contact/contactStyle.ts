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

export const FormSectionStyle = styled.div`
    border : 2px solid gray;
    border-radius : 10px;
    
`;

export const FieldsStyle = styled.div`
    padding : 10px;
`;

export const EmailFieldSection = styled.div`
    padding : 10px;
`;

export const InputStyle = styled.input`
  font-size: 18px;
  padding: 10px 20px;
  width : 100%;
  background: #23293B ;
  border: none;
  border-radius: 30px;
  ::placeholder {
    color: #FFFFFF;
  }
`;

export const Emailinput = styled.input`
    font-size: 18px;
    padding: 10px 20px;
    width : 100%;
    background: #23293B ;
    border: none;
    border-radius: 30px;
    ::placeholder {
    color: #FFFFFF;
  }
`;

export const TextareaField = styled.div`
    padding : 10px;
`;

export const TextareaStyled = styled.textarea`
    font-size: 18px;
    padding: 10px 20px;
    width : 100%;
    height : 250px;
    background: #23293B ;
    border: none;
    border-radius: 20px;
    ::placeholder {
    color: #FFFFFF;
  }
`;

export const ButtonAreaStyle = styled.div`
    padding : 10px;
`; 