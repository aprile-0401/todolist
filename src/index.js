import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import {combineReducers, createStore} from "redux"
import './index.css';
import App from './components/app';
import todos from './modules/app/reducers'

let store = createStore(todos)



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

