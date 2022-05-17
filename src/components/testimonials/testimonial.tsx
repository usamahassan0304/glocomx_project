import React from 'react';
import { TestimonialHeadingStyle, TestimonialSectionStyle } from './testimonialStyle';
import { Container, Row, Col } from "react-bootstrap";
import TestimonialData from "../../data/testimonialData";
import TestimonialCards from './testimonialCards';


const Testimonial: React.FC = () => {
    return (
        <>
            <TestimonialSectionStyle>
                <Container>
                    <TestimonialHeadingStyle>
                        <h1 className='pt-5 pb-5'>Testimonials</h1>
                    </TestimonialHeadingStyle>

                    <Row>
                        {
                            TestimonialData.map((item) =>(
                                <Col lg={4}>
                                    <TestimonialCards item={item} />
                                </Col>
                            ))
                        }
                    </Row>
                </Container>

                

            </TestimonialSectionStyle>
        </>
    )
}

export default Testimonial