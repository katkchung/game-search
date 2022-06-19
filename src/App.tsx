import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import Homepage from "./components/pages/homePage/Homepage";

const theme = createTheme({
  typography: {
    fontFamily: "Raleway , sans-serif",
  },
});
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </MuiThemeProvider>
  );
}
export default App;
