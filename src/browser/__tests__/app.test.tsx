import { h, render } from "preact";
import { App } from "../ts/app/app";

beforeAll(() => {
  // @ts-ignore
  fetch.mockImplementation(url => {
    return new Promise((resolve, reject) => {
      const res = {
        status: 200,
        json: () => {
          return {
            greeting: "Hello World",
          };
        },
      };
      resolve(res);
    });
  });
});

describe("render", () => {
  beforeEach(() => {
    document.body.innerHTML = `<div id="container"></div>`;
  });

  test("greetings", (done) => {
    const container = document.getElementById("container");
    if (container) {
      render(<App />, container);
      // Wait for finishing componentDidMounted operation
      setTimeout(() => {
        expect(container.innerHTML).toBe(`<div>Hello World</div>`);
        done();
      }, 100);
    }
  });
});
