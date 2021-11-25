import './App.css';
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { Title } from './components/Title';
import { ComicsData } from './pages/comics-home/ComicsData';
import { SiteNavigation } from './components/SiteNavigation';

import { SeriesData } from './pages/series/SeriesData';
import { CharactersData } from './pages/characters/CharactersData';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Title />
                <SiteNavigation />
                
                <Routes>
                    <Route exact path="/" element={<ComicsData />} />
                    <Route path="/series" element={<SeriesData />} />
                    <Route path="/characters" element={<CharactersData />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
