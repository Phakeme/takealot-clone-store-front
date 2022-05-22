//import "regenerator-runtime/runtime";
import { render, screen } from "@testing-library/react";
import App from "./App";
import store from "./app/app";
import { Provider } from "react-redux";
import { ChecContextProvider } from "./Context/ChecContextProvider";

describe("Routing", () => {
  const setup = (path) => {
    window.history.pushState({}, "", path);
    render(
      <Provider store={store}>
        <ChecContextProvider>
          <App />
        </ChecContextProvider>
      </Provider>
    );
  };
  it.each`
    path       | pageTestId
    ${"/"}     | ${"home-page"}
    ${"/help"} | ${"help-page"}
  `("displays $pageTestId when path is $path", ({ path, pageTestId }) => {
    setup(path);
    const page = screen.queryByTestId(pageTestId);
    expect(page).toBeInTheDocument();
  });

  it.each`
    path       | pageTestId
    ${"/"}     | ${"help-page"}
    ${"/help"} | ${"home-page"}
  `(
    "does not displays $pageTestId when path is $path",
    ({ path, pageTestId }) => {
      setup(path);
      const page = screen.queryByTestId(pageTestId);
      expect(page).not.toBeInTheDocument();
    }
  );
});
