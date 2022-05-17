import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import {
    FaqSectionStyle,
    FaqHeadingStyle,
    FaqAccordianSectionStyle,
} from '../faq/faqStyle';
import FaqAccordian from "../faq/faqAccordian";
import AccordianData from "../../../data/accordianData"

const Faq: React.FC = () => {
    return (
        <>
            <FaqSectionStyle id='faq'>
                <Container>
                    <FaqHeadingStyle>
                        <h1 className='pt-5 pb-5'>Frequently Asked Questions(FAQ's)</h1>
                    </FaqHeadingStyle>
                    
                        
                            <FaqAccordianSectionStyle>
                                <Row>
                                {
                                    AccordianData.map((item)=>(
                                        <Col lg={6}>
                                            <FaqAccordian item = {item}/>
                                            <hr style={{color : 'gray'}}/>
                                        </Col>
                                    ))
                                }
                                </Row>
                            </FaqAccordianSectionStyle>                   
                </Container>

            </FaqSectionStyle>
        </>
    )
}

export default Faq;