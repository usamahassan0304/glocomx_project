import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Buttons from '../../../common/buttons';
import Topbar from '../../navbar/topbar';
import { IoBookOutline } from "react-icons/io5"
import {
    HeaderSecionStyle,
    HeaderLeftContentStyle,
    HeaderHeadingStyle,
    HeaderSubHeadingStyle,
    HeaderContentTextStyle,
    LowerHeaderSection,
    HeadingTextStyle,
    PlainTextStyle,
    HeaderIcons,
} from './headerStyle'

const Header: React.FC = () => {
    return (
        <>
            <HeaderSecionStyle>
                <Topbar />
                <Container>
                    <Row>
                        <Col lg={6}>
                            <HeaderLeftContentStyle>
                                <HeaderHeadingStyle>
                                    glocomx coin
                                    <HeaderSubHeadingStyle>
                                        Revolutionizing International <br />
                                        Trade
                                    </HeaderSubHeadingStyle>
                                </HeaderHeadingStyle>

                                <HeaderContentTextStyle>
                                    <p>
                                        A digital transection plateform that delivers certainly, simplicity and security<br />
                                        for all parties. Your Business deserves better. it is time to transition your<br />
                                        business into a highly efficient and a profitable entity with the Glocomx<br />
                                        innovation marketplace
                                    </p>
                                </HeaderContentTextStyle>
                                <Buttons btnTitle='Buy Now'/>
                            </HeaderLeftContentStyle>
                        </Col>

                        <Col lg={6}>
                        </Col>
                    </Row>
                </Container>
                <LowerHeaderSection>
                    <Container >
                        <Row>
                            <Col lg={4} className="text-center">
                                <HeaderIcons />
                                <HeadingTextStyle>
                                    <p>Glocomx Coin</p>
                                </HeadingTextStyle>
                                <PlainTextStyle>
                                    <p>white paper</p>
                                </PlainTextStyle>
                                <Buttons btnTitle='Download'/>
                            </Col>
                            <Col lg={4} className="text-center">
                                <HeaderIcons />
                                <HeadingTextStyle>
                                    <p>Glocomx Coin</p>
                                </HeadingTextStyle>
                                <PlainTextStyle>
                                    <p>white paper</p>
                                </PlainTextStyle>
                                <Buttons btnTitle='Buy NFT'/>
                            </Col>
                            <Col lg={4} className="text-center">
                                <HeaderIcons />
                                <HeadingTextStyle>
                                    <p>Glocomx Coin</p>
                                </HeadingTextStyle>
                                <PlainTextStyle>
                                    <p>white paper</p>
                                </PlainTextStyle>
                                <Buttons btnTitle='Join Us'/>
                            </Col>
                        </Row>
                    </Container>
                </LowerHeaderSection>

            </HeaderSecionStyle>
        </>
    )
}

export default Header;