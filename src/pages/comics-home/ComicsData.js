import './comics-data.css';
import React, { useState, useEffect } from 'react';

import fetchData from '../../utils/fetchData';
import { AlertErrors } from '../../components/AlertErrors';
import { CardComponent } from '../../components/CardComponent';
import { ProgressComponent } from '../../components/ProgressComponent';

export const ComicsData = () => {

    const [comics, setData] = useState([]);
    const [error, setError] = useState([]);

    //call utils func and fetch data
    useEffect(() => {
        fetchData.getApiData('comics')
            .then(data => {
                if (data.code === 200)
                    setData(data.data.results); //successful call to api
                else
                    setError(data); //failed call to api
            })
            .catch(err => setError(err));
    }, []);

    //re-usable <AlertErros> component
    if (error.length !== 0) {
        return (<AlertErrors code={error.code} message={error.message} />);
    };

    //displaying progress while data gets fetch from api
    if (comics.length === 0) {
        return (<ProgressComponent />);
    };

    //rendering success data
    //re-usable <CardComponent>
    return(
        <div className="container">
            {comics.map((comic, i) => {
                return(
                    <CardComponent
                        key={i} 
                        imgObj={comic.thumbnail}
                        title={comic.title}
                        format={comic.format}
                        modified={comic.modified}
                    />
                );
            })};
        </div>
    );
    
};