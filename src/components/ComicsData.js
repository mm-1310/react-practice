import React, { useState, useEffect } from 'react'
import { Md5 } from 'ts-md5/dist/md5'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

//data needed for hash
const url = 'https://gateway.marvel.com:443/v1/public';
const publicKey = '89dd9f6152897008a59e0050cecf5713';
const privateKey = 'e3e2db831d87d93f01ede25bfdc6bd0d46ac9fa6';
const timeStamp = Date.now();

//hash creation
const hash = Md5.hashStr(timeStamp + privateKey + publicKey);

export const ComicsData = () => {

    const [comics, setData] = useState([]);

    useEffect(() => {
        //useEffect doesn't handle async 
        //create async func to handle api call
        const fetchData = async() => {
            const response = await fetch(url + `/comics?limit=20&offset=20&ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`);
            const postData = await response.json();

            setData(postData.data.results);
        }

        fetchData();
    }, []);

    if (comics.length === 0) {
        return (<div style={{textAlign: "center", marginTop: 200, fontSize: 25}}>Loading...</div>);
    };

    const setComicsStyle = () => {
        return {display: 'flex', justifyContent: 'center', flexDirection: 'column', flexGrow: 1};
    };

    return(
        <div className="comics-container">
            {comics.map((comic, i) => {
                return(
                    <Card className="comics" style={setComicsStyle()} key={i}>
                        <CardMedia 
                            image={comic?.thumbnail['path'] + '/landscape_incredible.' + comic?.thumbnail['extension']}
                            component="img"
                            alt={comic?.title}
                            className="comic-image"
                        />
                        <CardContent className="comic-content">
                            <Typography className="comic-title" variant="h7" gutterBottom component="div">
                                {comic?.title}
                            </Typography>

                            <Typography className="comic-format" variant="h7" gutterBottom component="div">
                                {comic?.format}
                            </Typography>

                            <Typography className="comic-modified" variant="h7" gutterBottom component="div">
                                {comic?.modified}
                            </Typography>
                        </CardContent>
                    </Card>
                );
            })};
        </div>
    );
    
};