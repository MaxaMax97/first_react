import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let post = [
    {id: 1, message: 'I am learning react', likeCount: 24},
    {id: 2, message: 'Thanks Dimych', likeCount: 31},
    {id: 3, message: 'Thanks Maxim', likeCount: 635},
    {id: 4, message: 'You', likeCount: 125}
]
let dialogs = [
    {id: 1, name: 'Maksim'},
    {id: 2, name: 'Nastia'},
    {id: 3, name: 'Pasha'},
    {id: 4, name: 'Lera'},
    {id: 5, name: 'Igor'}
]
let messageAll = [
    {id: 1, message: 'Hi,my name Maksim'},
    {id: 2, message: 'Hi,my name Nastia'},
    {id: 3, message: 'Hi,my name Pasha'},
    {id: 4, message: 'Hi,my name Lera'},
    {id: 5, message: 'Hi,my name Igor'}
]
let data = {
    post: post,
    dialogs: dialogs,
    messageAll: messageAll
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App data={data}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
