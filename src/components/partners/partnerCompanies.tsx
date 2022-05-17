import React from 'react'
import { 
    PartnerCompaniesStyle,
    PartnersLogoStyle,
    PartnersNameStyle,
} from './partnerStyle';

interface Props {
    item : any,
}


const PartnerCompanies : React.FC<Props> = ({item} : {item : any}) => {
  return (
    <>
        <PartnerCompaniesStyle>
            <PartnersLogoStyle src={item.logo}/>
            <PartnersNameStyle>{item.name}</PartnersNameStyle>
                
        </PartnerCompaniesStyle>
    </>
  )
}

export default PartnerCompanies;