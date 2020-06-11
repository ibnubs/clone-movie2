import React from "react";
import { Provider } from "react-redux";
import Store from "./store";
import LoginForm from "./components/Login";
import Footers from "./components/Footers";

function App() {
  return (
    <Provider store={Store}>
      <div>
        <LoginForm />
        <Footers />
      </div>
    </Provider>
  )
}
export default App;
