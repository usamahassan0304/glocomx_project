import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FaqAccordianStyle } from "../faq/faqStyle";

interface Props {
    item : any
}

const FaqAccordian: React.FC<Props> = ({ item }: { item: any }) => {
    return (
        <>
            <FaqAccordianStyle>
                <Accordion style={{backgroundColor : '#010024' , color : '#fff'}}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{color : '#FFC300'}}/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>{item.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {item.content}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </FaqAccordianStyle>

        </>
    )
}

export default FaqAccordian