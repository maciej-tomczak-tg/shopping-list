import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingList from "./components/ShoppingList";
import Container from "react-bootstrap/Container";

function App() {
  return (
      <Container>
          <ShoppingList/>
      </Container>
  );
}

export default App;
