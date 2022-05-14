import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { 
    TokenHeadingSectionStyle, 
    TokenSectionStyle,
    TokenSectionTextStyle, 
    TokenSectionImageStyle,
} from './tokenStyle'

const Token: React.FC = () => {
    return (
        <>
            <TokenSectionStyle>
                <Container>
                    <TokenHeadingSectionStyle>
                        <h1 className='pt-5 pb-5'>Tokens</h1>
                    </TokenHeadingSectionStyle>

                    <Row>
                        <Col lg={6}>
                            <TokenSectionTextStyle>
                                <p className='pt-5'>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Nisi consequuntur corporis recusandae sint enim, nam deserunt odio at
                                    consequatur quaerat ullam fuga voluptate quo iste, veritatis aliquam cum dolor esse!
                                </p>

                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Nisi consequuntur corporis recusandae sint enim, nam deserunt odio at
                                   
                                </p>
                            </TokenSectionTextStyle>

                        </Col>
                        <Col lg={6} className='text-center'>
                            <TokenSectionImageStyle />
                        </Col>
                    </Row>
                </Container>
            </TokenSectionStyle>
        </>
    )
}

export default Token