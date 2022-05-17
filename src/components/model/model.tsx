import React from 'react'
import {
    ModelSectionStyle,
    ModelSectionHeadingStyle,
    ProgressBarSectionstyle,
    ProgressBarTextStyle,
} from "./modelStyle";
import { Container, Row, Col } from "react-bootstrap";
import { Progress } from 'antd';

const Model: React.FC = () => {
    return (
        <>

            <ModelSectionStyle>
                <Container>
                    <ModelSectionHeadingStyle>
                        <h1 className='pt-5 pb-5'>Glocomx Coin Growth Model</h1>
                    </ModelSectionHeadingStyle>
                    
                    <ProgressBarTextStyle className='text-center'>
                        Annual Growth rate of All Glocomx capital projects
                    </ProgressBarTextStyle>
                    <ProgressBarSectionstyle>        
                            <Progress
                                strokeColor={{
                                    '0%': '#FFC300',
                                    '80%': '#FFC300',
                                }}
                                percent={80}
                                strokeWidth = {15}
                            />
                    </ProgressBarSectionstyle>

                    <ProgressBarTextStyle className='text-center'>
                        Annual Growth in trading on exchanges
                    </ProgressBarTextStyle>
                    <ProgressBarSectionstyle>        
                            <Progress
                                strokeColor={{
                                    '0%': '#FFC300',
                                    '80%': '#FFC300',
                                }}
                                percent = {30}
                                strokeWidth = {15}
                            />
                    </ProgressBarSectionstyle>

                    <ProgressBarTextStyle className='text-center'>
                        Share of Glocomx Capital projects in trading on exchanges
                    </ProgressBarTextStyle>
                    <ProgressBarSectionstyle>        
                            <Progress
                                strokeColor={{
                                    '0%': '#FFC300',
                                    '80%': '#FFC300',
                                }}
                                percent={80}
                                strokeWidth = {15}

                            />
                    </ProgressBarSectionstyle>

                </Container>
            </ModelSectionStyle>

        </>
    )
}

export default Model