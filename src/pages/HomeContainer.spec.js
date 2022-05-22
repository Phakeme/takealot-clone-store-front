import { render, screen } from "@testing-library/react";
import { HomeContainer } from "./HomeContainer";
import { Provider } from "react-redux";
import store from "../app/app";
import { ChecContextProvider } from "../Context/ChecContextProvider";

describe("HomeContainer", () => {
  test("renders popularProductsPreviews", () => {
    render(
      <Provider store={store}>
        <ChecContextProvider>
          <HomeContainer />
        </ChecContextProvider>
      </Provider>
    );
    const element = screen.queryByTestId("popular-products-previews");
    expect(element).toBeInTheDocument();
  });

  // it("renders popular products", () => {
  //   render(<HomeContainer />);
  //   const element = screen.queryByTestId("popular-products-previews");
  //   expect(element).toBeInTheDocument();
  // });
});
