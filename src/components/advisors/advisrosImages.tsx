import React from 'react';
import {
    AdvisrosImageSectionStyle,
    AdvisorsImageStyle,
    AdvisorsTitleStyle,
    AdvisorsContentStyle,
} from "./advisorsStyle";

interface Props {
    item : any,
}

const AdvisrosImages : React.FC<Props> = ({item} : {item:any}) => {
    return (
        <>
            <AdvisrosImageSectionStyle>
                <AdvisorsImageStyle src={item.Imgs}></AdvisorsImageStyle>
                <AdvisorsTitleStyle>{item.title}</AdvisorsTitleStyle>
                <AdvisorsContentStyle>{item.content}</AdvisorsContentStyle>
            </AdvisrosImageSectionStyle>

        </>
    )
}

export default AdvisrosImages