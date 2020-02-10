import { h, render } from "preact";
import { App } from "../ts/app/app";

describe("render", () => {
  beforeEach(() => {
    document.body.innerHTML = `<div id="container"></div>`;
  });

  test("greetings", () => {
    const container = document.getElementById("container");
    if (container) {
      render(<App />, container);
      expect(container.innerHTML).toBe(`<div>Hello World</div>`);
    }
  });
});
