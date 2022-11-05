import { fireEvent } from "@testing-library/react-native";
import * as React from "react";
import { renderWithNavigation } from "../../../utils/test-utils";
import SubmitLongLatScreen from "../index";

describe("Submit long and lat screen test cases.", () => {
  it("renders correctly", () => {
    const { getByText } = renderWithNavigation(<SubmitLongLatScreen />);
    expect(getByText("Longitude")).toBeTruthy();
  });

  it("should render the Submit button properly.", () => {
    const { getByText } = renderWithNavigation(<SubmitLongLatScreen />);

    expect(getByText("Submit")).toBeTruthy();
  });

  it("should render the Submit button initially disabled properly.", () => {
    const { getByText } = renderWithNavigation(<SubmitLongLatScreen />);

    expect(getByText("Submit")).toBeDisabled();
  });

  it("should be able to press Enable button.", () => {
    const onPressMock = jest.fn();

    const { getByText } = renderWithNavigation(<SubmitLongLatScreen />);

    fireEvent.press(getByText("Submit"));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it("should enable the submit button when we type longitude and latitude values in input box", async () => {
    const dummylat = "27.223222";
    const dummyLong = "10.32432";
    const { getByTestId, getByText } = renderWithNavigation(
      <SubmitLongLatScreen />
    );

    fireEvent.changeText(getByTestId("lat-testId"), dummylat);
    fireEvent.changeText(getByTestId("long-testId"), dummyLong);

    expect(getByText("Submit")).toBeEnabled();
  });
});
