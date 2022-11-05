import { fireEvent } from "@testing-library/react-native";
import * as React from "react";
import { renderWithNavigation } from "../../../utils/test-utils";
import EnableLocationScreen from "../index";

describe("Enable location screen test cases.", () => {
  it("renders correctly", () => {
    const { getByText } = renderWithNavigation(<EnableLocationScreen />);
    expect(getByText("Please Enable Location")).toBeTruthy();
  });

  it("should render the Enable button properly.", () => {
    const { getByText } = renderWithNavigation(<EnableLocationScreen />);

    expect(getByText("Enable")).toBeEnabled();
  });

  it("should be able to press Enable button.", () => {
    const onPressMock = jest.fn();

    const { getByText } = renderWithNavigation(<EnableLocationScreen />);

    fireEvent.press(getByText("Enable"));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  //   test("User can sign in successully with correct credentials", async () => {
  //     // Idiom: no need to capture render output, as we will use `screen` for queries.
  //     render(<EnableLocationScreen />);

  //     // Idiom: `getByXxx` is a predicate by itself, but we will use it with `expect().toBeTruthy()` to
  //     // clarify our intent.
  //     // Note: `.toBeTruthy()` is the preferred matcher for checking that elements are present.
  //     expect(
  //       screen.getByText("Sign in to Example EnableLocationScreen")
  //     ).toBeTruthy();
  //     expect(screen.getByText("Username")).toBeTruthy();
  //     expect(screen.getByText("Password")).toBeTruthy();

  //     // Hint: we can use `getByLabelText` to find our text inputs in accessibility-friendly way.
  //     fireEvent.changeText(screen.getByLabelText("Username"), "admin");
  //     fireEvent.changeText(screen.getByLabelText("Password"), "admin1");

  //     // Hint: we can use `getByText` to find our button by its text.
  //     fireEvent.press(screen.getByText("Sign In"));

  //     // Idiom: since pressing button triggers async operation we need to use `findBy` query to wait
  //     // for the action to complete.
  //     // Hint: subsequent queries do not need to use `findBy`, because they are used after the async action
  //     // already finished
  //     expect(await screen.findByText("Welcome admin!")).toBeTruthy();

  //     // Idiom: use `queryByXxx` with `expect().toBeFalsy()` to assess that element is not present.
  //     expect(
  //       screen.queryByText("Sign in to Example EnableLocationScreen")
  //     ).toBeFalsy();
  //     expect(screen.queryByText("Username")).toBeFalsy();
  //     expect(screen.queryByText("Password")).toBeFalsy();
  //   });

  //   /**
  //    * Another test case based on manual test scenario.
  //    *
  //    * Hint: Try to tests what a user would see and do, instead of assering internal component state
  //    * that is not directly reflected in the UI.
  //    *
  //    * For this reason prefer quries that correspond to things directly observable by the user like:
  //    * `getByText`, `getByLabelText`, `getByPlaceholderText, `getByDisplayValue`, `getByRole`, etc.
  //    * over `getByTestId` which is not directly observable by the user.
  //    *
  //    * Note: that some times you will have to resort to `getByTestId`, but treat it as a last resort.
  //    */
  //   test("User will see errors for incorrect credentials", async () => {
  //     render(<EnableLocationScreen />);

  //     expect(
  //       screen.getByText("Sign in to Example EnableLocationScreen")
  //     ).toBeTruthy();
  //     expect(screen.getByText("Username")).toBeTruthy();
  //     expect(screen.getByText("Password")).toBeTruthy();

  //     fireEvent.changeText(screen.getByLabelText("Username"), "admin");
  //     fireEvent.changeText(screen.getByLabelText("Password"), "qwerty123");
  //     fireEvent.press(screen.getByText("Sign In"));

  //     // Hint: you can use custom Jest Native matcher to check text content.
  //     expect(await screen.findByLabelText("Error")).toHaveTextContent(
  //       "Incorrect username or password"
  //     );

  //     expect(
  //       screen.getByText("Sign in to Example EnableLocationScreen")
  //     ).toBeTruthy();
  //     expect(screen.getByText("Username")).toBeTruthy();
  //     expect(screen.getByText("Password")).toBeTruthy();
  //   });

  //   /**
  //    * Do not be afraid to write longer test scenarios, with repeating act and assert statements.
  //    */
  //   test("User can sign in after incorrect attempt", async () => {
  //     render(<EnableLocationScreen />);

  //     expect(
  //       screen.getByText("Sign in to Example EnableLocationScreen")
  //     ).toBeTruthy();
  //     expect(screen.getByText("Username")).toBeTruthy();
  //     expect(screen.getByText("Password")).toBeTruthy();

  //     fireEvent.changeText(screen.getByLabelText("Username"), "admin");
  //     fireEvent.changeText(screen.getByLabelText("Password"), "qwerty123");
  //     fireEvent.press(screen.getByText("Sign In"));

  //     expect(await screen.findByLabelText("Error")).toHaveTextContent(
  //       "Incorrect username or password"
  //     );

  //     fireEvent.changeText(screen.getByLabelText("Password"), "admin1");
  //     fireEvent.press(screen.getByText("Sign In"));

  //     expect(await screen.findByText("Welcome admin!")).toBeTruthy();
  //     expect(
  //       screen.queryByText("Sign in to Example EnableLocationScreen")
  //     ).toBeFalsy();
  //     expect(screen.queryByText("Username")).toBeFalsy();
  //     expect(screen.queryByText("Password")).toBeFalsy();
  //   });
});
