import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Greet from "../../src/components/Greet.tsx";

describe("Greet", () => {
  it("should render Hello with the name when name is provided", () => {
    render(<Greet name="John" />);
    // screen.debug();
    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent("Hello John");
    expect(heading).toBeInTheDocument();
  });
});
