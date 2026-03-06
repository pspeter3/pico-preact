import { render } from "@testing-library/preact";
import { locationStub } from "preact-iso/prerender";
import { expect, test } from "vitest";

import { App } from "./app";

test("renders the home route", () => {
  locationStub("/");
  const { getByRole } = render(<App />);
  const heading = getByRole("heading", { level: 1 });
  expect(heading).toHaveTextContent("Pico Preact");
});

test("renders the not found route", () => {
  locationStub("/not-found");
  const { getByRole } = render(<App />);
  const heading = getByRole("heading", { level: 1 });
  expect(heading).toHaveTextContent("404");
});
