import "@testing-library/jest-dom";
import * as React from "react";
import { render } from "@testing-library/react";
import { NeumorphLogo } from ".";

describe("NeumorphLogo component", () => {
    test("displays logo", async () => {
        const { getByRole, getByAltText } = render(
            <NeumorphLogo fileName="thFile.shapr" />
        );

        const element = getByRole("generic", { name: /logo/i });

        const theImage = getByAltText("logo of the modelling application");

        expect(element).toContainElement(theImage);
    });
});
