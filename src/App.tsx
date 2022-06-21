import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Homepage from "./components/pages/homePage/Homepage";
import CartPage from "./components/pages/cartPage/CartPage";
import SearchPage from "./components/pages/searchPage/SearchPage";
import CheckoutPage from "./components/pages/checkoutPage/CheckoutPage";

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
          <Route path="/search" element={<SearchPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
export default App;
