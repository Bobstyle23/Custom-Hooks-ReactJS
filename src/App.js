import React from "react";
import "./App.css";
import BackwardCounter from "./components/BackwardCounter";
import ForwardCounter from "./components/ForwardCounter";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <ForwardCounter />
        <BackwardCounter />
        <Counter />
      </React.Fragment>
    </div>
  );
}

export default App;
