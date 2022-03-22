import React from "react";
import Greeting from "../misc/Greeting";
import ItemListContainer from "../products/ItemListContainer";

function App() {
  const greeting = "Welcome to EcoMusic!";
  return (
    <>
      <Greeting greeting={greeting} />
      <ItemListContainer />
    </>
  );
}

export default App;
