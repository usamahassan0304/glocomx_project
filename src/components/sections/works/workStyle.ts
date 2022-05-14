import styled from "styled-components";
import cardImg from "../../../assets/images/transparentlogo1.png"

export const WorkSectionStyle = styled.div`
    background-color : #010024;
`;

export const WorkHeadingSectionStyle = styled.div`
    h1{
        color : #FFFFFF;
        
        span{
            text-transform : uppercase;
        }
    }

`;

export const WorkHeadingsStyle = styled.div`
    h4{
        color : #FFFFFF;
    }

    p{
        font-size : 12px;
        color: #FFFFFF;
    }
`;

export const CardImage = styled.img.attrs({
    src : `${cardImg}`
})`
    height :250px;
    width : 280px;
    
`