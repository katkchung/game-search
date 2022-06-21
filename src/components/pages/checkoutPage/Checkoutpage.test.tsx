import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CheckoutPage from "./CheckoutPage";
import { Game } from "../../../resources/types";
import { rootReducer } from "../../../store/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

describe("Checkout Page", () => {
  it("renders buttons", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CheckoutPage />
        </BrowserRouter>
      </Provider>
    );
    expect(
      await screen.findByTestId("back-to-cart-button")
    ).toBeInTheDocument();
    expect(screen.getByTestId("payment-page-button")).toBeInTheDocument();
  });
});
