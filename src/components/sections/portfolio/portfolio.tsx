import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import {
    PortfolioSectionStyle,
    PortfolioSectionHeadingStyle,
    PortfolioTextStyle,
    PortfolioIconSectionStyle,
    PortfolioIconStyle,
    PortfolioTextSectionStyle,
} from "../portfolio/portfolioStyle"

const Portfolio : React.FC = () => {
    return (
        <>
            <PortfolioSectionStyle>
                <Container>
                    <PortfolioSectionHeadingStyle>
                        <h1 className='pt-5 pb-5'>Portfolio</h1>
                    </PortfolioSectionHeadingStyle>
                    <Row>
                        <Col lg={6}>
                            <PortfolioTextStyle>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br />
                                    Eum eligendi cupiditate iusto rerum dignissimos aut illo tenetur<br />
                                    itaque cumque. Eos ratione incidunt aliquid voluptate asperiores<br />
                                    consequuntur quae ab temporibus perspiciatis.
                                </p>
                            </PortfolioTextStyle>
                        </Col>

                        <Col lg={6}>
                            <Row>
                                <Col lg={4}>
                                    <PortfolioIconStyle />
                                </Col>
                                <Col lg={8}>
                                <PortfolioTextSectionStyle>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        Quia velit molestiae odio voluptas quam praesentium illo facere debitis at dolore.
                                    </p>
                                </PortfolioTextSectionStyle>
                                </Col>

                            </Row>

                            <Row>
                                <Col lg={4}>
                                    <PortfolioIconStyle />
                                </Col>
                                <Col lg={8}>
                                <PortfolioTextSectionStyle>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        Quia velit molestiae odio voluptas quam praesentium illo facere debitis at dolore.
                                    </p>
                                </PortfolioTextSectionStyle>
                                </Col>

                            </Row>
                            
                        </Col>
                    </Row>

                </Container>

            </PortfolioSectionStyle>
        </>
    )
}

export default Portfolio
