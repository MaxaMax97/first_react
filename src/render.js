import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {BrowserRouter} from "react-router-dom";
import {addMessage, addPost, updateNewPostText} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));
export let renderEntireTree = (state) => {


    root.render(
        <React.StrictMode>
            <BrowserRouter>

                <App updateNewPostText={updateNewPostText} state={state} addPost={addPost} addMessage={addMessage}/>
            </BrowserRouter>
        </React.StrictMode>
    );

}
