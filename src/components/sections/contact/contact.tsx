import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Buttons from "../../../common/buttons";
import Testimonial from '../../testimonials/testimonial';
import Partners from '../../partners/partners'

import {
    ContactSectionStyle,
    ContactHeadingStyle,
    ContactSubHeadingStyle,
    ContactTextStyle,
    ContactIconsStyle,
    ContactIconsStyle2,
    FacebookIconStyle,
    IntsagramIconStyle,
    TwitterIconStyle,
    PhoneIconStyle,
    MailIconStyle,
    FormSectionStyle,
    FieldsStyle,
    InputStyle,
    EmailFieldSection,
    Emailinput,
    TextareaStyled,
    TextareaField,
    ButtonAreaStyle,
} from "../contact/contactStyle"

const Contact: React.FC = () => {
    return (
        <>
            <ContactSectionStyle id='contact'>
                <Container>
                    <Row>
                        <Col lg={4}>
                            <ContactHeadingStyle>
                                <h1 className='pt-5 pb-5'>Contact</h1>
                            </ContactHeadingStyle>
                            <ContactSubHeadingStyle>Get in Touch</ContactSubHeadingStyle>
                            <ContactTextStyle>
                                Whether you have a question on one of our
                                service or want to get involved with our
                                mission we are ready to help.
                            </ContactTextStyle>

                            <ContactIconsStyle>
                                <FacebookIconStyle />
                                <IntsagramIconStyle />
                                <TwitterIconStyle />
                            </ContactIconsStyle>

                            {/* <ContactIconsStyle2>
                         <PhoneIconStyle/>+1 (469) 527-4117<br />
                         <MailIconStyle /> info@glocomx.com
                    </ContactIconsStyle2> */}
                        </Col>

                        <Col lg={8} className='pt-5'>
                            <FormSectionStyle>
                                <Container>
                                    <Row className='pt-5'>
                                        <Col md={6}>
                                            <FieldsStyle>
                                                <InputStyle placeholder='First Name' />
                                            </FieldsStyle>
                                        </Col>
                                        <Col md={6}>
                                            <FieldsStyle>
                                                <InputStyle placeholder='Last Name' />
                                            </FieldsStyle>
                                        </Col>
                                    </Row>

                                    <EmailFieldSection>
                                        <Emailinput placeholder='Email' />
                                    </EmailFieldSection>

                                    <TextareaField>
                                        <TextareaStyled />
                                    </TextareaField>

                                    <ButtonAreaStyle>
                                        <Buttons btnTitle='send me' />
                                    </ButtonAreaStyle>
                                    
                                </Container>
                            </FormSectionStyle>
                        </Col>
                    </Row>
                </Container>
            </ContactSectionStyle>

            <Testimonial />
            <Partners />
        </>
    )
}

export default Contact