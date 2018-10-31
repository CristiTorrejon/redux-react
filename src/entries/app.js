import React from 'react';
import { render } from 'react-dom';
import App from '../pages/containers/app';
import { BrowserRouter} from 'react-router-dom';


const container = document.getElementById('home-container');
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
, container);