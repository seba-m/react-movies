import React from 'react'
import { MovieDetails } from './pages/MovieDetails'
import { LandingPage } from './pages/LandingPage'

import styles from './App.module.scss';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

export function App() {
    return (
        <Router>
            <header>
                <Link to="/">
                    <h1 className={styles.title}>Movies</h1>
                </Link>
            </header>
            <main>
                <Routes>
                    <Route exact path="/movies/:movieId" element={<MovieDetails />}></Route>
                    <Route path="/" element={<LandingPage />}></Route>
                </Routes>
            </main>
        </Router>
    )
}
