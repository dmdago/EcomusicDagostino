import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./themeConfig";
import Navbar from "./components/navbar/Navbar";
import ItemListContainer from "./components/products/ItemListContainer.js";

function App() {
  const greeting = "Electric Guitar";
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <ItemListContainer greeting={greeting} />
    </ThemeProvider>
  );
}

export default App;
