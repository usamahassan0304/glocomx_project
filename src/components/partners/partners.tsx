import React from 'react'
import { Container , Row , Col } from "react-bootstrap"
import { PartnerHeadingStyle, PartnerSectionStyle, PartnersLogoStyle } from './partnerStyle';
import PartnerData from "../../data/partnerData";
import PartnerCompanies from './partnerCompanies';



const Partners : React.FC = () => {
  return (
    <>
        <PartnerSectionStyle>
            <Container>
                <PartnerHeadingStyle>
                    <h1 className='pt-5 pb-5'>Partners</h1>
                </PartnerHeadingStyle>

                <Row>
                 {
                   PartnerData.map((item)=>(
                      <Col lg={4}>
                        <PartnerCompanies item={item}/>
                      </Col>
                   ))
                 }
                  
                </Row>
            </Container>
        </PartnerSectionStyle>
    </>
  )
}

export default Partners