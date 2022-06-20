import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Homepage from "./components/pages/homePage/Homepage";

const theme = createTheme({
  typography: {
    fontFamily: "Raleway , sans-serif",
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
export default App;
