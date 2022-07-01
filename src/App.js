import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import React from "react";




import JoinBlock from "./components/JoinBlock/JoinBlock";

function App() {

  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (

     <JoinBlock/>

  );
}

export default App;
