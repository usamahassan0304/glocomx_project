import React from 'react';
import { Container,Row, Col } from "react-bootstrap"
import {
    AdvisorsSectionStyle,
    AdvisorsHeadingStyle,
} from "./advisorsStyle";
import AdvisorData from "../../data/advisorsData";
import AdvisrosImages from "./advisrosImages"

const Advisors: React.FC = () => {
    return (
        <>
            <AdvisorsSectionStyle>
                <Container>
                    <AdvisorsHeadingStyle>
                        <h1 className='pt-5 pb-5'>Advisors</h1>
                    </AdvisorsHeadingStyle>
                    <Row>
                        {
                            AdvisorData.map((item) =>(
                                <Col lg={4}>
                                    <AdvisrosImages item = {item}/>

                                </Col>
                            ))
                        }
                    </Row>
                </Container>

            </AdvisorsSectionStyle>
        </>
    )
}

export default Advisors