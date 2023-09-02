import React from "react";
import TestRenderer, { ReactTestRenderer } from "react-test-renderer";

import App from "./App";

jest.useFakeTimers();

describe("<App/>", () => {
  let renderer: ReactTestRenderer;

  beforeEach(() => {
    renderer = TestRenderer.create(<App />);
  });
  afterEach(() => {
    renderer.unmount();
  });
  it("compiles and has children", () => {
    const tree = renderer.toJSON();
    jest.runOnlyPendingTimers();
    if (Array.isArray(tree)) {
      expect(Array.isArray(tree)).toBeFalsy();
      // This return is to help TypeScript determine that
      // tree cannot be an Array
      return;
    }
    expect(tree?.children?.length).toBeGreaterThan(0);
  });
});
