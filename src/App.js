import React from 'react';
import './App.css';
import Routes from './routers/Routes';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';




function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="">
          <Routes />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
