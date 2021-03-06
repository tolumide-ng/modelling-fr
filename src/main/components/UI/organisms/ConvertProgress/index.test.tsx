import "@testing-library/jest-dom";
import * as React from "react";
import { render } from "@testing-library/react";
import { ConvertProgress } from ".";

describe("ConvertProgress Component", () => {
    test("Mounts Component and its child components", async () => {
        const { getByRole, getByAltText, getByText } = render(
            <ConvertProgress
                convertProgress={10}
                fileName="filesname.stl"
                targetType="stl"
                conversionError=""
            />
        );

        const element = getByRole("article");

        const theImage = getByAltText("logo of the modelling application");
        const progressContainer = getByRole("progressbar");
        const textContent = getByText(/Converting to/);

        expect(element).toContainElement(theImage);
        expect(element).toContainElement(progressContainer);
        expect(element).toContainElement(textContent);
    });

    test("Displays error if file conversion fails", async () => {
        const ERRORMESSAGE = "Error converting file";
        const { getByRole, getByAltText, getByText } = render(
            <ConvertProgress
                convertProgress={10}
                fileName="filesname.stl"
                targetType="stl"
                conversionError="Error converting file"
            />
        );

        const element = getByRole("article");

        const theImage = getByAltText("logo of the modelling application");
        const errorContent = getByText(ERRORMESSAGE);

        expect(element).toContainElement(theImage);
        expect(errorContent).toBeTruthy();
        expect(element).toContainElement(errorContent);
    });
});
