import styled from "styled-components";
import logo from "../../assets/images/transparentlogo.png"

export const TopbarSectionStyle = styled.div`
    .container{
        
    }

    .navbar-nav{
        .nav-link{
            background-color : none;
            font-size:20px;
            color : #FFFFFF;
            padding:25px;

            &:hover {
                color: #FFC300;
            }
        }
    }
`;

export const LogoStyle = styled.img.attrs({
    src : `${logo}`
})`
    height:69px;
    width : 67px;
    margin-top : 28px;
    
`

