import React from 'react';
import { Container, Row, Col } from "react-bootstrap"

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
} from "../contact/contactStyle"

const Contact : React.FC = () => {
  return (
    <>
    <ContactSectionStyle>
        <Container>
            <Row>
                <Col lg={3}>
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

                <Col lg={9}>
                    
                </Col>
            </Row>
        </Container>
    </ContactSectionStyle>
    </>
  )
}

export default Contact