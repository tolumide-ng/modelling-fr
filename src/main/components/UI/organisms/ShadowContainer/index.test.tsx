import "@testing-library/jest-dom";
import * as React from "react";
import { render } from "@testing-library/react";
import { ShadowContainer } from ".";

describe("ShadowContainer Component", () => {
    test("Mounts shadow container component", async () => {
        const { getByRole } = render(
            <ShadowContainer
                childContent={<div>Named Component</div>}
                current={3}
            />
        );

        const element = getByRole("article");

        expect(element).toBeTruthy();
        expect(element).toHaveTextContent("Named Component");
    });
});
