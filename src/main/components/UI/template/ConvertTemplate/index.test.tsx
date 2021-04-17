import "@testing-library/jest-dom";
import * as React from "react";
import { render } from "@testing-library/react";
import { ConvertTemplate } from ".";

describe("ConvertTemplate Component", () => {
    test("renders child component", async () => {
        const FILE_NAME = "test_file.shapr";

        const { getByRole } = render(
            <ConvertTemplate
                fileName={FILE_NAME}
                childComp={<div>CHILD COMPONENT</div>}
            />
        );

        const element = getByRole("article");

        expect(element).toBeTruthy();
        expect(element).toHaveTextContent(FILE_NAME);
        expect(element).toHaveTextContent("CHILD COMPONENT");
    });
});
