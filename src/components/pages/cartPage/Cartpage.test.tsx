import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CartPage from "./CartPage";
import { rootReducer } from "../../../store/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

describe("Cart Page", () => {
  it("renders top nav", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CartPage />
        </BrowserRouter>
      </Provider>
    );
    expect(await screen.findByTestId("top-nav-search")).toBeInTheDocument();
    expect(screen.getByTestId("top-nav-cart")).toBeInTheDocument();
  });
  it("renders title on page", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CartPage />
        </BrowserRouter>
      </Provider>
    );
    expect(
      await screen.findByText("Current Items in Pack")
    ).toBeInTheDocument();
  });
});
