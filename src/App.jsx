import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./themeConfig";
import Greeting from "./components/misc/Greeting.js";
import Navbar from "./components/navbar/Navbar";
import ItemListContainer from "./components/products/ItemListContainer.js";
import ItemDetailContainer from "./components/products/ItemDetailContainer";

function App() {
  const greeting = "Welcome to EcoMusic!";
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Greeting greeting={greeting} />
      <ItemListContainer />
      <ItemDetailContainer />
    </ThemeProvider>
  );
}

export default App;
