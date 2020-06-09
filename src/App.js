import React from "react";
import { Provider } from "react-redux";
import Store from "./store";

function App() {
  return (
    <Provider store={Store}>
      <div>
        <h1>Hello world</h1>

      </div>
    </Provider>
  )
}
export default App;
