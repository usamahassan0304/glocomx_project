import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Advisors from '../../advisors/advisors'
import TeamImages from "../team/teamImages";
import {
    TeamSectionStyle,
    TeamHeadingStyle,
} from "../team/teamStyle";
import TeamData from "../../../data/teamData";


const Team: React.FC = () => {
    return (
        <>
            <TeamSectionStyle id='team'>
                <Container>
                    <TeamHeadingStyle>
                        <h1 className='pt-5 pb-5'>Team</h1>
                    </TeamHeadingStyle>
                    
                        <Row> 
                            {
                                TeamData.map((item) =>(
                                    <Col lg={4}>
                                        <TeamImages item = {item}/>
                                    </Col>
                                ))
                            }
                        </Row>
                    
                </Container>
            </TeamSectionStyle>

            <Advisors />
        </>
    )
}

export default Team