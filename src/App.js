import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store";
import Routes from './routers/Routes';


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
