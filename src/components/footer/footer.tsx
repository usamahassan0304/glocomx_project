import React from 'react';
import { Container, Row, Col } from "react-bootstrap"
import {
    FooterMainSectionStyle,
    FooterSectionStyle,
    FooterLogoStyle,
    FooterTextStyle,
    FooterIconStyle,
    FacebookIconStyle,
    FooterLinks,
    IntsagramIconStyle,
    TwitterIconStyle,
    QuickLinksHeadingStyle,
    FooterNewsHeadingStyle,
    FooterNewsStyle,
} from './footerStyle'

const Footer: React.FC = () => {
    return (
        <>
            <FooterMainSectionStyle>
                <FooterSectionStyle>
                    <Container>
                        <Row>
                            <Col lg={5}>
                                <FooterLogoStyle />
                                <FooterTextStyle>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Ipsa commodi eaque voluptas eum voluptate corporis reprehenderit
                                    quod a dignissimos adipisci nesciunt ea natus eius, blanditiis temporibus
                                    minima esse. Perspiciatis, aut?
                                </FooterTextStyle>
                                <FooterIconStyle>
                                    <FacebookIconStyle />
                                    <IntsagramIconStyle />
                                    <TwitterIconStyle />
                                </FooterIconStyle>
                            </Col>

                            <Col lg={3}>
                                <QuickLinksHeadingStyle>Quick Links</QuickLinksHeadingStyle>
                                <FooterLinks>Shop</FooterLinks>
                                <FooterLinks>Tokens</FooterLinks>
                                <FooterLinks>Portfolio</FooterLinks>
                                <FooterLinks>Roadmap</FooterLinks>
                                <FooterLinks>FAQ</FooterLinks>
                                <FooterLinks>Team</FooterLinks>
                                <FooterLinks>Contact</FooterLinks>
                            </Col>

                            <Col lg={4}>
                                <FooterNewsHeadingStyle>Recent News</FooterNewsHeadingStyle>
                                <FooterNewsStyle>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus iure dolore minima! Cum, animi deleniti.
                                </FooterNewsStyle>

                                <FooterNewsStyle>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus iure dolore minima! Cum, animi deleniti.
                                </FooterNewsStyle>

                                <FooterNewsStyle>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus iure dolore minima! Cum, animi deleniti.
                                </FooterNewsStyle>
                            </Col>
                        </Row>
                    </Container>
                </FooterSectionStyle>
            </FooterMainSectionStyle>
        </>
    )
}

export default Footer