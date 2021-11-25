import React from "react";
import { render, waitFor } from "@testing-library/react";
import { ComicsData } from "../pages/comics-home/ComicsData";

it("comics with proper HTML structure", async () => {
    render(<ComicsData />);

    waitFor(async () => expect(document.querySelector(".comic-image")).toBeInTheDocument());
    waitFor(async () => expect(document.querySelector(".comic-content")).toBeInTheDocument());
    waitFor(async () => expect(document.querySelector(".comic-title")).toBeInTheDocument());

    waitFor(async () => {
        const titleStyle = document.querySelector(".comics").style;
        expect(titleStyle.display).toBe("flex");
        expect(titleStyle.flexDirection).toBe("column");
    });
});

