import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './setup'
import { BrowserRouter } from "react-router-dom";
import "./i18n";

if (document.getElementById('react-app')) {
    const root = ReactDOM.createRoot(document.getElementById("react-app"));
    root.render(
            <React.Fragment>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </React.Fragment>
    );
}
