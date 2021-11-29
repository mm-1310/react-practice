import './characters-data.css';
import React, { useState, useEffect } from 'react';

import fetchData from '../../utils/fetchData';
import { AlertErrors } from '../../components/AlertErrors';
import { CardComponent } from '../../components/CardComponent';
import { ProgressComponent } from '../../components/ProgressComponent';

export const CharactersData = () => {

    const [characters, setData] = useState([]);
    const [error, setError] = useState([]);

    //call utils func and fetch data
    useEffect(() => {
        fetchData.getApiData('characters')
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
    if (characters.length === 0) {
        return (<ProgressComponent />);
    };

    //rendering success data
    //re-usable <CardComponent>
    return(
        <div className="container">
            {characters.map((character, i) => {
                return(
                    <CardComponent
                        key={i} 
                        imgObj={character.thumbnail}
                        title={character.name}
                        format={character.format}
                        modified={character.modified}
                    />
                );
            })};
        </div>
    );
    
};