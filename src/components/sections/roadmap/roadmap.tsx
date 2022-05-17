import React from 'react';
import { Container, Row, Col } from "react-bootstrap"
import RoadmapCard from './roadmapCard';
import {
    RoadmapSectionStyle,
    RoadmapHeadingStyle,
    LeftSideSection,
    RightSideSection,
    CenterSectionStyle,
    VerticalLineSectionStyle,
    VerticalLineStyle,
    MainSectionStyle,
} from './roadmapStyle';
import RoadmapCardData from "../../../data/roadmapCardData";
// import RoadmapCard from "../roadmap/roadmapCard"

const Roadmap: React.FC = () => {
    return (
        <>
            <RoadmapSectionStyle id='roadmap'>
                <Container>
                    <RoadmapHeadingStyle>
                        <h1 className='pt-5 pb-5'>Roadmap</h1>
                    </RoadmapHeadingStyle>
                    <MainSectionStyle>
                        <LeftSideSection>
                            {
                                RoadmapCardData.map((item) => (
                                    <RoadmapCard item={item} />
                                ))
                            }
                        </LeftSideSection>

                        <CenterSectionStyle>
                            <VerticalLineStyle />
                        </CenterSectionStyle>

                        <RightSideSection>
                            {
                                RoadmapCardData.map((item) => (
                                    <RoadmapCard item={item} />
                                ))
                            }
                        </RightSideSection>
                    </MainSectionStyle>



                   
                </Container>
            </RoadmapSectionStyle>
        </>
    )
}

export default Roadmap 