import React from "react";
import { render } from "@testing-library/react";
import { Title } from "../components/Title";

it('title should render with h1 tag', () => {
    render(<Title />)
    expect(document.querySelector('h1')).toBeInTheDocument()
})