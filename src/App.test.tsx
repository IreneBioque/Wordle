
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import App from "./App";

import "@testing-library/jest-dom";
import { getWordOfTheDay } from "./services/request";

test("renders App", () => {
  const history = createMemoryHistory();

  render(
    <Router location={history.location} navigator={history}>
      <App />
    </Router>
  );
  const Title = screen.getByText(/wordl/i);
  expect(Title).toBeInTheDocument();
});
test("get words", () => {
  const history = createMemoryHistory();
  render(
    <Router location={history.location} navigator={history}>
      <App />
    </Router>
  );

  const RandomWord = getWordOfTheDay();
  expect(RandomWord).toBeTruthy();
  expect(RandomWord.length).toEqual(5);
});