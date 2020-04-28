import { h, render } from "preact";
import { App } from "./app/app";
import "../scss/index.scss";

async function main () {
  if (!("fetch" in window)) {
    // @ts-ignore
    await import(/* webpackChunkName: "whatwg-fetch" */ "whatwg-fetch");
  }

  const element = document.getElementById("container");
  if (element) {
    render(<App />, element);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", main);
} else {
  main();
}

export default main;
