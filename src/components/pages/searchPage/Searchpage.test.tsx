import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { rootReducer } from "../../../store/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import SearchPage from "./SearchPage";
import GameCard from "../GameCard";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

describe("Search Page", () => {
  it("renders search bar", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SearchPage />
        </BrowserRouter>
      </Provider>
    );
    expect(await screen.findByTestId("search-bar-input")).toBeInTheDocument();
    expect(screen.getByTestId("search-bar-search-button")).toBeInTheDocument();
  });
  it("renders game card", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <GameCard
            game={{
              id: 1,
              name: "test game",
              deck: "some description",
              driverImageUrl: "some image url",
            }}
          />
        </BrowserRouter>
      </Provider>
    );
    expect(await screen.findByText("test game")).toBeInTheDocument();
  });
});
