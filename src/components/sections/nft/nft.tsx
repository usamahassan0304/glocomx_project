import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import {
    NftSectionHeadingStyle,
    NftSectionStyle,
    NftSectionTextStyle,
    NftSectionImageStyle,
} from './nftStyle'

const Nft: React.FC = () => {
    return (
        <>
            <NftSectionStyle>
                <Container>
                    <NftSectionHeadingStyle>
                        <h1 className='pt-5 pb-5'>Why Will Glocomx Coin Value <br /> Increase ?</h1>
                    </NftSectionHeadingStyle>

                    <Row>
                        <Col lg={6}>
                            <NftSectionTextStyle>
                                <p className='pt-5'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Assumenda nihil incidunt animi. Adipisci,
                                    tempore! Ad totam, expedita ut suscipit a ipsum,
                                    aliquam officiis, aut modi corrupti illum cupiditate sequi harum?
                                </p>

                            </NftSectionTextStyle>
                        </Col>

                        <Col lg={6} className='text-center'>
                            <NftSectionImageStyle />
                        </Col>
                    </Row>
                </Container>

            </NftSectionStyle>
        </>
    )
}

export default Nft