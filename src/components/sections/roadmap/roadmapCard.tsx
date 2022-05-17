import React from 'react'
import {
    CardSectionStyle,
    CardDateSectionStyle1,
    CardContentStyle,
    CardHeadingStyle,
    CardTextStyle,
} from "../roadmap/roadmapStyle";

interface Props {
    item : any
}

const RoadmapCard : React.FC<Props> = ({item} : {item : any}) => {
  return (
    <>
        <CardSectionStyle>
            <CardDateSectionStyle1>{item.date}</CardDateSectionStyle1>
            <CardContentStyle>
                <CardHeadingStyle>{item.title}</CardHeadingStyle>
                <CardTextStyle>
                    {item.description}
                </CardTextStyle>
            </CardContentStyle>
        </CardSectionStyle>
    </>
  )
}

export default RoadmapCard