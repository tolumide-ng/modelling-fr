import "@testing-library/jest-dom";
import * as React from "react";
import { fireEvent, render } from "@testing-library/react";
import { DownloadFile } from ".";

describe("Download File Component", () => {
    test("Mounts Component", async () => {
        const FILE_NAME = "test_file.shapr";

        const handleClick = jest.fn();

        const { getByRole, getByAltText } = render(
            <DownloadFile
                fileName={FILE_NAME}
                handleFileDownload={handleClick}
            />
        );

        const element = getByRole("article");
        const theImage = getByAltText("logo of the modelling application");
        const downloadButton = getByRole("button");
        downloadButton.focus();

        fireEvent.click(downloadButton);

        expect(element).toContainElement(theImage);
        expect(element).toContainElement(downloadButton);
        expect(downloadButton).toHaveFocus();
        expect(element).toHaveTextContent("Download");
        expect(element).toHaveTextContent(FILE_NAME);
        expect(handleClick).toHaveBeenCalled();
    });
});
