import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './_app';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('container');

const root = createRoot(container);

root.render(<h1>Hello world</h1>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
