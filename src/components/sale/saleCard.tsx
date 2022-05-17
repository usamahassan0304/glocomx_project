import React from 'react';
import { SaleCardButton, SaleCardStyle } from "./saleStyle"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Buttons from "../../common/buttons"

interface Props {
    item: any,
}

const SaleCard: React.FC<Props> = ({ item }: { item: any }) => {
    return (
        <>
            <SaleCardStyle>
            <Card className='text-center p-5 mb-4'>
                <CardActionArea>
                    
                        {/* <img src ={item.icon} /> */}
                    
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.content}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <SaleCardButton>
                    {/* {item.btnValue} */}
                    <Buttons btnTitle={item.btnValue} />
                </SaleCardButton>

            </Card>
            </SaleCardStyle>
        </>
    )
}

export default SaleCard