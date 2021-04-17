import "@testing-library/jest-dom";
import * as React from "react";
import { createEvent, fireEvent, render } from "@testing-library/react";
import { DropFile } from ".";

describe("Drop File Component", () => {
    test("Drag and drop event is emitted when a file is dropped", async () => {
        const changeFile = jest.fn();

        // Big Thanks to: https://github.com/testing-library/react-testing-library/issues/339#issuecomment-526310225

        const { getByText } = render(
            <DropFile changeFile={changeFile} changeScreen={() => {}} />
        );

        const element = getByText("browse");

        const fileDropEvent = createEvent.drop(element);

        const file = new File([""], "test_file.shapr", {
            type: "text/plain",
        });

        Object.defineProperty(fileDropEvent, "dataTransfer", {
            value: {
                files: [file],
            },
        });

        fireEvent(element, fileDropEvent);

        expect(changeFile).toHaveBeenCalledTimes(1);
        const comment = getByText(/Supports/);
        expect(comment).toBeInTheDocument();
    });
});
