import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalCSS from './styles/global.css';

import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalCSS />
        <App />
    </React.StrictMode>,
);
