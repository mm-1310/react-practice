import React from "react";
import { render } from "@testing-library/react";
import { ProgressComponent } from "../components/ProgressComponent";

// test for HTML structure
// ComicsData is parent and renders CardComponent
// so we called ComicsData here
it("should render progress bar", () => {
    const { getByRole } = render(<ProgressComponent />);
    const progressBar = getByRole('progressbar');

    expect(progressBar).toBeInTheDocument();
});