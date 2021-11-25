import React from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export const CardComponent = (props) => {
    //set card styling
    const setComicsStyle = () => {
        return {display: 'flex', justifyContent: 'center', flexDirection: 'column', flexGrow: 1};
    };

    //display data from props if not null
    return(
        <Card className="card" style={setComicsStyle()}>
            <CardMedia
                image={props?.imgObj['path'] + '/landscape_incredible.' + props?.imgObj['extension']}
                component="img"
                alt={props?.title}
                className="comic-image"
            />

            <CardContent>
                <Typography className="comic-title" variant="h7" gutterBottom component="div">
                    {props?.title}
                </Typography>

                <Typography className="comic-format" variant="h7" gutterBottom component="div">
                    {props?.format}
                </Typography>

                <Typography className="comic-modified" variant="h7" gutterBottom component="div">
                    {props?.modified}
                </Typography>
            </CardContent>
        </Card>
    );
};