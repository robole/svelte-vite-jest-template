import { render, screen, fireEvent } from "@testing-library/svelte";

import Counter from "./Counter.svelte";

describe("Counter", () => {
  test("it has a button with the text 'Clicks: 0'", async () => {
    render(Counter);

    const button = screen.getByText("Clicks: 0");
    expect(button).toBeInTheDocument();
  });

  test("it should increment the count by 1 when it the button is pressed", async () => {
    render(Counter);

    const button = screen.getByText("Clicks: 0");
    await fireEvent.click(button);

    expect(screen.getByText("Clicks: 1")).toBeInTheDocument();
  });
});
