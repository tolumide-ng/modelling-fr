import "@testing-library/jest-dom";
import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { NeumorphLogo } from ".";

test("handles clicks event", async () => {
    const CURRENT = "click me";

    const handleClick = jest.fn();

    const { getByText } = render(
        <Button
            buttonText={CURRENT}
            buttonClass=""
            buttonType="button"
            handleClick={handleClick}
        />
    );

    const element = getByText(CURRENT);

    fireEvent.click(element);

    expect(handleClick).toHaveBeenCalled();
});
