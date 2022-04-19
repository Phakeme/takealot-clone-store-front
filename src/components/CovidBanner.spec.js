import { CovidBanner } from "./CovidBanner";
import { screen, render } from "@testing-library/react";

it("renders covid banner text info", () => {
  render(<CovidBanner />);
  expect(screen.getByText(/Stay informed!/)).toBeInTheDocument();
});
