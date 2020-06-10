import React from "react";
import { Provider } from "react-redux";
import Store from "./store";
import Footers from "./components/Footers";

function App() {
  return (
    <Provider store={Store}>
      <div>
        <h1>Hello world</h1>
        <Footers />
      </div>
    </Provider>
  )
}
export default App;
