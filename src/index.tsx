import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { CalculatorProvider } from './components/CalculatorProvider/CalculatorProvider';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <CalculatorProvider>
            <App />
        </CalculatorProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
