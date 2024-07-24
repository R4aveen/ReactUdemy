import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HelloWorldApp } from './components/HelloWorldApp';
import { FirstApp } from './components/FirstApp';
import { CounterApp } from './components/CounterApp';
import ApiImages  from './components/ApiImages';

import './style.css';

const App = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">HelloWorldApp</Link>
                    </li>
                    <li>
                        <Link to="/first-app">FirstApp</Link>
                    </li>
                    <li>
                        <Link to="/counter-app">CounterApp</Link>
                    </li>
                    <li>
                        <Link to="/api-images">ApiImages</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<HelloWorldApp />} />
                <Route path="/first-app" element={<FirstApp />} />
                <Route path="/counter-app" element={<CounterApp value={1} />} />
                <Route path="/api-images" element={<ApiImages />} />
            </Routes>
        </Router>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
