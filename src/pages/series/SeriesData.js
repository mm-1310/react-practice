import './series-data.css';
import { React, useEffect, useState } from "react";

import fetchData from '../../utils/fetchData';
import { AlertErrors } from '../../components/AlertErrors';
import { CardComponent } from '../../components/CardComponent';
import { ProgressComponent } from '../../components/ProgressComponent';

export const SeriesData = () => {

    const [items, setData] = useState([]);
    const [error, setError] = useState([]);

    //call utils func and fetch data
    useEffect(() => {
        fetchData.getApiData('series')
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
    if (items.length === 0) {
        return (<ProgressComponent />);
    };
    
    //rendering success data
    //re-usable <CardComponent>
    return(
        <div className="container">
            {items.map((item, i) => {
                return(
                    <CardComponent
                        key={i} 
                        imgObj={item.thumbnail}
                        title={item.title}
                        format={item.format}
                        modified={item.modified}
                    />
                )
            })}
        </div>
    );
};