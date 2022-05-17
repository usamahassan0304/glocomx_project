import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { 
    SaleSectionStyle,
    SaleHeadingStyle,
    SaleCardStyle,
} from "./saleStyle"; 
import SaleCard from './saleCard';
import SaleCardData from "../../data/saleCardData"

const Sale : React.FC = () => {
  return (
    <>
    <SaleSectionStyle>
        <Container>
            <SaleHeadingStyle>
                <h1 className='pt-5 pb-5'>Whitelisting and Public Sale</h1>
            </SaleHeadingStyle>

            <SaleCardStyle>
                <Row>
                    {
                        SaleCardData.map((item)=>(
                            <Col lg={6}>
                                <SaleCard item = {item} />
                            </Col>
                        ))    
                    }
                </Row>
            </SaleCardStyle>
        </Container>
    </SaleSectionStyle>
    </>
  )
}

export default Sale