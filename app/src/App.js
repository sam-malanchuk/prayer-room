import React from 'react';
import './App.css';
import Main from './components/Main.js';
import { Route } from 'react-router-dom';
import { MDBContainer } from "mdbreact";

function App() {
  return (
    <MDBContainer>
      <Route exact path="/" component={Main} />
    </MDBContainer>
  );
}

export default App;
