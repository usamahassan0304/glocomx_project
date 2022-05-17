import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Buttons from '../../../common/buttons';
import Topbar from '../../navbar/topbar';
import Updates from '../../updates/updates';
import Works from '../../works/works';
import Nft from '../../nft/nft';
import { Progress } from 'antd';
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
    TimerSectionStyle,
    TimerSectionHeadingStyle,
    TimerBlockStyle,
    TimerBlockSectionStyle,
    NumericValueStyle,
    StringValueStyle,
    HeaderProgessbarStyle,
} from './headerStyle';

const Header: React.FC = () => {
    return (
        <>
            <HeaderSecionStyle id='shop'>
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
                                <Buttons btnTitle='Buy Now' />
                            </HeaderLeftContentStyle>
                        </Col>

                        <Col lg={6}>

                            <TimerSectionStyle>
                                <TimerSectionHeadingStyle>Public Sale, Price $0.02</TimerSectionHeadingStyle>
                            </TimerSectionStyle>

                            <TimerBlockSectionStyle>
                                <TimerBlockStyle>
                                    <NumericValueStyle>15</NumericValueStyle>
                                    <StringValueStyle>Days</StringValueStyle>
                                </TimerBlockStyle>
                                <TimerBlockStyle>
                                    <NumericValueStyle>15</NumericValueStyle>
                                    <StringValueStyle>Days</StringValueStyle>
                                </TimerBlockStyle>
                                <TimerBlockStyle>
                                    <NumericValueStyle>15</NumericValueStyle>
                                    <StringValueStyle>Days</StringValueStyle>
                                </TimerBlockStyle>
                                <TimerBlockStyle>
                                    <NumericValueStyle>15</NumericValueStyle>
                                    <StringValueStyle>Days</StringValueStyle>
                                </TimerBlockStyle>
                            </TimerBlockSectionStyle>

                            <HeaderProgessbarStyle>
                                <Progress
                                    strokeColor={{
                                        '0%': '#FFC300',
                                        '60%': '#FFC300',
                                    }}
                                    percent={60}
                                    strokeWidth={12}
                                />
                            </HeaderProgessbarStyle>

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
                                <Buttons btnTitle='Download' />
                            </Col>
                            <Col lg={4} className="text-center">
                                <HeaderIcons />
                                <HeadingTextStyle>
                                    <p>Glocomx Coin</p>
                                </HeadingTextStyle>
                                <PlainTextStyle>
                                    <p>white paper</p>
                                </PlainTextStyle>
                                <Buttons btnTitle='Buy NFT' />
                            </Col>
                            <Col lg={4} className="text-center">
                                <HeaderIcons />
                                <HeadingTextStyle>
                                    <p>Glocomx Coin</p>
                                </HeadingTextStyle>
                                <PlainTextStyle>
                                    <p>white paper</p>
                                </PlainTextStyle>
                                <Buttons btnTitle='Join Us' />
                            </Col>
                        </Row>
                    </Container>
                </LowerHeaderSection>

            </HeaderSecionStyle>

            <Updates />
            <Works />
            <Nft />
        </>
    )
}

export default Header;