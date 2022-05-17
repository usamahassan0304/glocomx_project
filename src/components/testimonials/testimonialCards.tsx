import React from 'react'
import {
    TestimonialCardStyle,
    TestimonialCardImageStyle,
    TestimonialCardHeaderStyle,
    CardTitleStyle,
    CardStatusStyle,
    CardDescriptionStyle,
    CardContentStyle,
} from './testimonialStyle';

interface Props {
    item: any,
}

const TestimonialCards: React.FC<Props> = ({ item }: { item: any }) => {
    return (

        <>
            <TestimonialCardStyle>
                <TestimonialCardHeaderStyle>
                    <TestimonialCardImageStyle src={item.imgs} />
                    <CardContentStyle>
                        <CardTitleStyle>{item.name}</CardTitleStyle>
                        <CardStatusStyle>{item.status}</CardStatusStyle>
                    </CardContentStyle>
                </TestimonialCardHeaderStyle>
                <CardDescriptionStyle>{item.description}</CardDescriptionStyle>
            </TestimonialCardStyle>
        </>
    )
}

export default TestimonialCards;