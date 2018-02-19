import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import toJSON from 'enzyme-to-json';

import './index.css';
import Link from './components/Link';
import Articles from './components/Articles';
import App from './App';

render(
    <App/>
    , document.getElementById('root'));
