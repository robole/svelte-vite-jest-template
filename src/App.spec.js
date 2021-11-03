import { render, screen } from "@testing-library/svelte";

import App from "./App.svelte";

describe("App", () => {
  test("says 'hello world!'", () => {
    render(App);
    const node = screen.queryByText("Hello world!");
    expect(node).toBeInTheDocument();
  });
});
