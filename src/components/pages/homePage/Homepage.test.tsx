import React from "react";
import { render, screen } from "@testing-library/react";
import Homepage from "./Homepage";
import { BrowserRouter } from "react-router-dom";

describe("Home Page", () => {
  it("renders start search button", async () => {
    render(
      <BrowserRouter>
        <Homepage />
      </BrowserRouter>
    );
    expect(
      await screen.findByTestId("start-search-button")
    ).toBeInTheDocument();
  });

  it("renders top nav", async () => {
    render(
      <BrowserRouter>
        <Homepage />
      </BrowserRouter>
    );
    expect(await screen.findByTestId("top-nav-home")).toBeInTheDocument();
  });
});
