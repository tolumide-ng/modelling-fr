import "@testing-library/jest-dom";
import * as React from "react";
import { render } from "@testing-library/react";
import { UploadFile } from ".";

describe("UploadFile Component", () => {
    test("Mounts upload file container component", async () => {
        const FILE_NAME = "test_file.shapr";

        const { getByRole } = render(
            <UploadFile
                fileName={FILE_NAME}
                uploadProgress={10}
                fileUploadError=""
            />
        );

        const element = getByRole("article");

        expect(element).toBeTruthy();
        expect(element).toHaveTextContent(FILE_NAME);
        expect(element).toHaveTextContent("Uploading...");
    });
});
