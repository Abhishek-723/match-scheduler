import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import matchReducer from './reducer';
import {createStore} from 'redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(matchReducer, composeWithDevTools());
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
