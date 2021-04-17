import "@testing-library/jest-dom";
import * as React from "react";
import { render } from "@testing-library/react";
import { ProgressStatus } from ".";

describe("Progress Status Component", () => {
    const UPLOADING_STATE = "Uploading File";
    const SUCCESS_STATE = "Success";

    test("Upload state of the component is displayed", async () => {
        const { getByRole } = render(
            <ProgressStatus
                successText={SUCCESS_STATE}
                progressText={UPLOADING_STATE}
                progressPercentage={10}
            />
        );

        const element = getByRole("progress");

        expect(element).toBeTruthy();
        expect(element).toHaveTextContent(UPLOADING_STATE);
        expect(element).not.toHaveTextContent(SUCCESS_STATE);
    });

    test("Successfull upload state of the component is displayed", async () => {
        const { getByRole } = render(
            <ProgressStatus
                successText={SUCCESS_STATE}
                progressText={UPLOADING_STATE}
                progressPercentage={100}
            />
        );

        const element = getByRole("progress");

        expect(element).toBeTruthy();
        expect(element).toHaveTextContent(SUCCESS_STATE);
        expect(element).not.toHaveTextContent(UPLOADING_STATE);
    });
});
