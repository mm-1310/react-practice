import './App.css';
import React, { Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { Header } from './components/Header';
import { ComicsData } from './pages/comics-home/ComicsData';
import { CharactersData } from './pages/characters/CharactersData';
import { NoFound } from './pages/404-not-found/NoFound';

const SeriesComponent = React.lazy(() => import ('./pages/series/SeriesComponent'));

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="*" element={<NoFound />} />

                        <Route exact path="/" element={<ComicsData />} />
                        <Route path="/series" element={<SeriesComponent />} />
                        <Route path="/characters" element={<CharactersData />} />
                    </Routes>
                </Suspense>
            </div>
        </BrowserRouter>
    );
}

export default App;
