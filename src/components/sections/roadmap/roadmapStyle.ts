import styled from "styled-components";

export const RoadmapSectionStyle = styled.div`
    background-color : #010024;
`;

export const RoadmapHeadingStyle = styled.div`
    h1{
        color : #FFFFFF;
    }
`;

export const RoadmapContentStyle = styled.div`
    /* padding : 20px; */
`;
 export const MainSectionStyle = styled.div`
    display : flex; 
    flex-direction : row;
    justify-content : center;
 `;
export const LeftSideSection = styled.div`
    display : flex; 
    flex-direction : column;
    padding : 30px;
    margin-top : 120px;
`;

export const RightSideSection = styled.div`
    display : flex; 
    flex-direction : column;
    padding : 30px;
`

export const CenterSectionStyle = styled.div`
    display : flex;
    justify-content : center;
`;

export const CardSectionStyle = styled.div``;

export const CardDateSectionStyle1 = styled.div`
    color : #FFFFFF;
    float : right;
    padding-top: 10px;
`;

export const CardContentStyle = styled.div`
    padding-top : 60px;
    padding-bottom : 35px;
`;

export const CardHeadingStyle = styled.div`
    color : #FFC300;
    font-size : 24px;
    text-transform : uppercase;
    padding-top : 30px;

    @media only screen and (max-width: 767px) {
        font-size : 12px;
        padding-top : 30px;
    }
`;

export const CardTextStyle = styled.div`
    color : #000;
    text-align: center;
    font-size : 14px;
    padding : 20px;
    background-color : #FFFFFF;
    border : 1px solid #FFFFFF;
    border-top-left-radius : 10px; 
    border-bottom-left-radius : 10px; 
    border-bottom-right-radius : 10px; 

    @media only screen and (max-width: 767px) {
        font-size : 12px;
        padding : 10px;
    }

`;

export const VerticalLineSectionStyle = styled.div`
    /* display : flex;
    justify-content : center; */
`;

export const VerticalLineStyle = styled.div`
    border : 6px solid #FFFFFF;
    border-top-radius : 50%;
    width :3px;
    height : 100%; 
`;