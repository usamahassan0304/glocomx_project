import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Buttons from '../../../common/buttons';
import {
    StartupSectionStyle,
    StartupHeadingSectionStyle,
    StartupTextSectionStyle,
    StartupImageSectionStyle,
} from "../startups/startupStyle"

const Startup : React.FC = () => {
    return (
        <>
            <StartupSectionStyle>
                <Container>
                    <StartupHeadingSectionStyle>
                        <h1 className='pt-5 pb-5'>Open Call for Startups</h1>
                    </StartupHeadingSectionStyle>
                    <Row>
                        <Col lg={6}>
                            <StartupTextSectionStyle>
                                <p className='pt-5 pb-5'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quas laudantium amet unde explicabo suscipit quo pariatur voluptate placeat,
                                    neque saepe ab? Iste, beatae maxime ab hic harum non impedit odio!
                                </p>
                                <Buttons btnTitle='Join Us'/>
                            </StartupTextSectionStyle>

                        </Col>
                        <Col lg={6} className='text-center'>
                            <StartupImageSectionStyle />
                        </Col>
                    </Row>
                </Container>
            </StartupSectionStyle>
        </>
    )
}

export default Startup