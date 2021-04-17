import "@testing-library/jest-dom";
import * as React from "react";
import { render } from "@testing-library/react";
import { SelectConversion, targetFormats } from ".";

describe("Select Conversion Component", () => {
    test("Mounts select conversion component", async () => {
        const { getByRole, getByText } = render(
            <SelectConversion fileName="testing.shapr" />
        );

        const element = getByRole("article");

        expect(element).toBeTruthy();

        targetFormats.map((target) => {
            const buttonElem = getByText(target);
            expect(buttonElem).toBeInTheDocument();
        });

        const textElem = getByText("Convert to");
        expect(textElem).toBeTruthy();
    });
});
