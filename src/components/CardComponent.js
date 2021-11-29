import React from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export const CardComponent = (props) => {
    //set card styling
    const setCardStyle = () => {
        return {display: 'flex', justifyContent: 'center', flexDirection: 'column', flexGrow: 1};
    };

    //display data from props if not null
    return(
        <Card className="card" role="div" style={setCardStyle()}>
            <CardMedia
                image={props?.imgObj['path'] + '.' + props?.imgObj['extension']}
                component="img"
                alt={props?.title}
                className="card-image"
            />

            <CardContent>
                <Typography className="card-title" variant="h7" gutterBottom component="div">
                    {props?.title}
                </Typography>

                <Typography className="card-format" variant="h7" gutterBottom component="div">
                    {props?.format}
                </Typography>

                <Typography className="card-modified" variant="h7" gutterBottom component="div">
                    {props?.modified}
                </Typography>
            </CardContent>
        </Card>
    );
};