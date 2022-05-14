import React from 'react';
import { Container, Row, Col } from "react-bootstrap"
import {
    NewsAndUpdateSection,
    UpdateHeadingStyle,
    UpdateCards,
} from "../updates/updateStyle";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import UpdateCard from "../updates/updateCard"
import CardData from "../../../data/cardData"


const Updates: React.FC = () => {
    return (
        <>
            <NewsAndUpdateSection>
                <Container >
                    <UpdateHeadingStyle >
                        <h1 className='pt-5 pb-5'>News And Updates</h1>
                    </UpdateHeadingStyle>

                    <UpdateCards>
                        <Row >
                            {
                                CardData.map((item) => (
                                    <Col lg={4} >
                                        <UpdateCard item = {item}/>
                                    </Col>
                                    
                                ))
                            }
                        </Row>
                    </UpdateCards>
                </Container>
            </NewsAndUpdateSection>
        </>
    )
}

export default Updates
