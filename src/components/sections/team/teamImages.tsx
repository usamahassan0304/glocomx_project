import Item from 'antd/lib/list/Item';
import React from 'react';
import {
    TeamImageSectionStyle,
    TeamImageStyle,
    ImageTitleStyle,
    ImageContentStyle,
} from "../team/teamStyle";


interface Props {
    item : any,
}

const TeamImages : React.FC<Props> = ({item} : {item:any}) => {
    console.log(item)
  return (
    <>
        <TeamImageSectionStyle>
            <TeamImageStyle src={item.Imgs}></TeamImageStyle>
            <ImageTitleStyle>{item.title}</ImageTitleStyle>
            <ImageContentStyle>{item.content}</ImageContentStyle>
        </TeamImageSectionStyle>

    </>
  )
}

export default TeamImages