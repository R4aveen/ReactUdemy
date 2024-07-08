import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HelloWorldApp } from './HelloWorldApp';
// import { FirtsApp } from './FirstApp';
import { CounterApp } from './CounterApp';

import './style.css';

ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        {/* <FirtsApp/> */}
        <CounterApp value ={1}/>
    </React.StrictMode>
)