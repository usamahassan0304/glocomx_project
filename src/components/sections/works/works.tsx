import React from 'react';
import { Container, Row, Col } from "react-bootstrap"
import {
    WorkSectionStyle,
    WorkHeadingSectionStyle,
    WorkHeadingsStyle,
    CardImage,
} from "../works/workStyle"

const Works: React.FC = () => {
    return (
        <>
            <WorkSectionStyle>
                <Container>
                    <WorkHeadingSectionStyle>
                        <h1 className='pt-5 pb-5'>How <span>glocomx</span> Coins Works?</h1>
                    </WorkHeadingSectionStyle>
                    <Container>
                        <Row>
                            <Col lg={3}>
                                <WorkHeadingsStyle>
                                    <h4 className='pt-5 pb-5'>
                                        1.Heading
                                    </h4>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        Laboriosam voluptas, ullam ut iure itaque quibusdam magni maxime commodi dolor maiores at eligendi quia placeat,

                                    </p>
                                </WorkHeadingsStyle>

                                <WorkHeadingsStyle>
                                    <h4 className='pt-5 pb-5'>
                                        2.Heading
                                    </h4>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        Laboriosam voluptas, ullam ut iure itaque quibusdam magni maxime commodi dolor maiores at eligendi quia placeat,

                                    </p>
                                </WorkHeadingsStyle>
                            </Col>

                            <Col lg={6} className="d-flex justify-content-center align-items-center mt-sm-5">
                                <CardImage />
                            </Col>

                            <Col lg={3}>
                                <WorkHeadingsStyle>
                                    <h4 className='pt-5 pb-5'>
                                        3.Heading
                                    </h4>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        Laboriosam voluptas, ullam ut iure itaque quibusdam magni maxime commodi dolor maiores at eligendi quia placeat,

                                    </p>
                                </WorkHeadingsStyle>

                                <WorkHeadingsStyle>
                                    <h4 className='pt-5 pb-5'>
                                        4.Heading
                                    </h4>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        Laboriosam voluptas, ullam ut iure itaque quibusdam magni maxime commodi dolor maiores at eligendi quia placeat,

                                    </p>
                                </WorkHeadingsStyle>
                            </Col>
                        </Row>
                    </Container>

                </Container>
            </WorkSectionStyle>
        </>
    )
}

export default Works;