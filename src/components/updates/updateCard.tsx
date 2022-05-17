import React from 'react';
import {UpdateCardImageStyle} from "./updateStyle" 

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

interface props {
    item : any,
}
const UpdateCard :React.FC <props> = ({item} : {item : any}) => {
    // console.log(item)
    return (
        <>
            <Card className='mb-3' >
                <CardActionArea>
                    <CardMedia>
                        <UpdateCardImageStyle src={item.image}/>
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.content}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        {item.btnValue}
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

export default UpdateCard