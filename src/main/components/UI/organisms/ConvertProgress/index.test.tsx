import "@testing-library/jest-dom";
import * as React from "react";
import { render } from "@testing-library/react";
import { ConvertProgress } from ".";

test("displays logo", async () => {
    const { getByRole, getByAltText, getByText } = render(<ConvertProgress />);

    const element = getByRole("article");

    const theImage = getByAltText("logo of the modelling application");
    const progressContainer = getByRole("progressbar");
    const textContent = getByText(/Converting to/);

    expect(element).toContainElement(theImage);
    expect(element).toContainElement(progressContainer);
    expect(element).toContainElement(textContent);
});
