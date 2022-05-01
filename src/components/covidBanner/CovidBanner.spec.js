import { CovidBanner } from "./CovidBanner";
import { screen, render } from "@testing-library/react";

describe("covid banner", () => {
  it("renders Stay informed!", () => {
    render(<CovidBanner />);
    expect(screen.getByText(/Stay informed!/)).toBeInTheDocument();
  });

  it("renders Visit the SA Department of Health's website for COVID-19 updates:", () => {
    render(<CovidBanner />);
    expect(
      screen.getByText(
        /Visit the SA Department of Health's website for COVID-19 updates:/
      )
    ).toBeInTheDocument();
  });

  it("renders www.sacoronavirus.co.za", () => {
    render(<CovidBanner />);
    expect(screen.getByText(/www.sacoronavirus.co.za/)).toBeInTheDocument();
  });
});
