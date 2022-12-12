import { render, screen, waitFor } from "@testing-library/react";
import Home from "../src/pages/index";

describe("Test if the index page renders correctly", () => {
  it("should render Home page", async () => {
    render(<Home />);

    const title = screen.getByText("Get started by editing");

    waitFor(() => {
      expect(title).toBeInTheDocument();
    });
  });
});
