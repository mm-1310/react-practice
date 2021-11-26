import React from "react";
import { render } from "@testing-library/react";
import { Title } from "../components/Title";

it("should render title with h1 tag", () => {
    render(<Title />);
    expect(document.querySelector("h1")).toBeInTheDocument();

    expect(document.querySelector("h1").innerHTML).toBe("Marvel Library");
});