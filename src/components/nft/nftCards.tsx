import React from 'react'
import {
    NftCardStyle,
    NftCardHeaderStyle,
    NftCardImageStyle,
    NftContentStyle,
    NftTitleStyle,
    NftStatusStyle,
    NftDescriptionStyle,
} from "./nftStyle"


interface Props {
    item : any,
}

const NftCards : React.FC<Props> = ({item} : {item:any}) => {
  return (
    <>
        <NftCardStyle>
                <NftCardHeaderStyle>
                    <NftCardImageStyle />
                    <NftContentStyle>
                        <NftTitleStyle>{item.title}</NftTitleStyle>
                    </NftContentStyle>
                </NftCardHeaderStyle>
                <NftDescriptionStyle>{item.desc}</NftDescriptionStyle>
                
            </NftCardStyle>
    </>
  )
}

export default NftCards